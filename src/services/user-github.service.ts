import { env } from "@/config/env";
import { unstable_cache } from "next/cache";

interface PinnedRepoNode {
 name: string;
}

interface PinnedReposResponse {
 data: {
  user: {
   pinnedItems: {
    nodes: PinnedRepoNode[];
   };
  };
 };
}

interface DependabotAlert {
 state: string;
 security_advisory: {
  severity: string;
 };
}

interface DependabotAlertsResponse extends Array<DependabotAlert> {}

const revalidate = 60;
const MINUTES_5 = 60 * 5;
const HOURS_1 = 3600 * 1;
const HOURS_12 = 3600 * 12;

// User API
export async function getUser(username: string) {
 try {
  console.log("Fetching user data for", username);
  console.time("getUser");
  const res = await fetch(`${env.GITHUB_API}/users/${username}`, {
   headers: { Authorization: `Bearer ${env.GH_TOKEN}` },
   next: { revalidate },
  });
  const result = await res.json();
  console.timeEnd("getUser");

  return result;
 } catch (error) {
  console.error("Error fetching user data", error);
  return null;
 }
}

// Repo API
export async function getRepos(username: string) {
 console.log("Fetching repos for", username);
 console.time("getRepos");
 const res = await fetch(`${env.GITHUB_API}/users/${username}/repos`, {
  headers: { Authorization: `Bearer ${env.GH_TOKEN}` },
  next: { revalidate },
 });
 console.timeEnd("getRepos");
 return res.json();
}

// Social integrated with GitHub API
export async function getSocialAccounts(username: string) {
 console.log("Fetching social accounts for", username);
 console.time("getSocialAccounts");
 const res = await fetch(
  `${env.GITHUB_API}/users/${username}/social_accounts`,
  {
   headers: { Authorization: `Bearer ${env.GH_TOKEN}` },
   next: { revalidate: MINUTES_5 },
  },
 );
 console.timeEnd("getSocialAccounts");
 return res.json();
}

// Pinned repo API
export const getPinnedRepos = unstable_cache(
 async (username: string) => {
  console.log("Fetching pinned repos for", username);
  console.time("getPinnedRepos");
  const res = await fetch(`${env.GITHUB_API}/graphql`, {
   method: "POST",
   headers: { Authorization: `Bearer ${env.GH_TOKEN}` },
   body: JSON.stringify({
    query: `{user(login: "${username}") {pinnedItems(first: 6) {nodes {... on Repository {name}}}}}`,
   }),
  });
  const pinned: PinnedReposResponse = await res.json();
  console.timeEnd("getPinnedRepos");
  const names = pinned.data.user.pinnedItems.nodes.map((node) => node.name);
  return names;
 },
 ["get-pinned-repos"],
 { revalidate: MINUTES_5 },
);

// Organization API
export const getUserOrganizations = async (username: string) => {
 console.log("Fetching organizations for", username);
 console.time("getUserOrganizations");
 const res = await fetch(`${env.GITHUB_API}/graphql`, {
  method: "POST",
  headers: { Authorization: `Bearer ${env.GH_TOKEN}` },
  body: JSON.stringify({
   query: `{user(login: "${username}") {organizations(first: 6) {nodes {name,websiteUrl,url,avatarUrl,description}}}}`,
  }),
  next: { revalidate: MINUTES_5 },
 });
 console.timeEnd("getUserOrganizations");
 return res.json();
};

// Vercel API
export const getVercelProjects = async () => {
 if (!env.VERCEL_TOKEN) {
  console.log("No Vercel token found - no projects will be shown.");
  return { projects: [] };
 }
 console.log("Fetching Vercel projects");
 console.time("getVercelProjects");
 const res = await fetch(`${env.VERCEL_PROJECT_API}`, {
  headers: { Authorization: `Bearer ${env.VERCEL_TOKEN}` },
 });
 console.timeEnd("getVercelProjects");
 if (!res.ok) {
  console.error("Vercel API returned an error.", res.status, res.statusText);
  return { projects: [] };
 }
 return res.json();
};

// Cache get repository package.json
export const getRepositoryPackageJson = unstable_cache(
 async (username: string, reponame: string) => {
  const res = await fetch(`${env.GITHUB_API}/graphq`, {
   method: "POST",
   headers: { Authorization: `Bearer ${env.GH_TOKEN}` },
   body: JSON.stringify({
    query: `{
        repository(name: "${reponame}", owner: "${username}") {
          object(expression: "HEAD:package.json") {
            ... on Blob {
              text
            }
          }
        }
      }`,
   }),
  });
  const response = await res.json();
  try {
   const packageJson = JSON.parse(response.data.repository.object.text);
   return packageJson;
  } catch (error) {
   console.error("Error parsing package.json", error);
   return {};
  }
 },
 ["repository-package-json"],
 { revalidate: HOURS_1 },
);

// Cache get recent user activity
export const getRecentUserActivity = unstable_cache(
 async (username: string) => {
  console.log("Fetching recent activity for", username);
  console.time("getRecentUserActivity");
  const res = await fetch(`${env.GITHUB_API}/users/${username}/events`, {
   headers: { Authorization: `Bearer ${env.GH_TOKEN}` },
  });
  const response = await res.json();
  console.timeEnd("getRecentUserActivity");
  return response;
 },
 ["recent-user-activity"],
 { revalidate: HOURS_1 },
);

// Get dependabot alerts
export const getDependabotAlerts = unstable_cache(
 async (username: string, reponame: string) => {
  const res = await fetch(
   `${env.GITHUB_API}/repos/${username}/${reponame}/dependabot/alerts`,
   {
    headers: { Authorization: `Bearer ${env.GH_TOKEN}` },
   },
  );
  const response: DependabotAlertsResponse = await res.json();

  // If dependabot is not enabled, the response will be an object, not an array.
  if (!Array.isArray(response)) {
   return [];
  }
  const openAlertsBySeverity = response.reduce(
   (acc: Record<string, number>, alert: DependabotAlert) => {
    if (alert.state === "open") {
     acc[alert.security_advisory.severity] = acc[
      alert.security_advisory.severity
     ]
      ? acc[alert.security_advisory.severity] + 1
      : 1;
    }
    return acc;
   },
   {},
  );

  return openAlertsBySeverity;
 },
 ["dependabot-alerts"],
 {
  revalidate: HOURS_12,
 },
);
