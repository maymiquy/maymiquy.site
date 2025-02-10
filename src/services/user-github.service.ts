import { env } from "@/config/env";

const revalidate = 60;
const MINUTES_5 = 60 * 5;
const HOURS_1 = 3600 * 1;
const HOURS_12 = 3600 * 12;

// User API
export async function getUser(username: string): Promise<GitHubUser> {
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
  throw new Error(`Error fetching user data: ${error}`);
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
  }
 );
 console.timeEnd("getSocialAccounts");
 return res.json();
}

// Pinned repo API
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

export async function getPinnedRepos(username: string) {
 console.log("Fetching pinned repos for", username);
 console.time("getPinnedRepos");
 const res = await fetch(`${env.GITHUB_API}/graphql`, {
  method: "POST",
  headers: { Authorization: `Bearer ${env.GH_TOKEN}` },
  body: JSON.stringify({
   query: `{user(login: "${username}") {pinnedItems(first: 6) {nodes {... on Repository {name}}}}}`,
  }),
  next: { revalidate: MINUTES_5 },
 });
 const pinned: PinnedReposResponse = await res.json();
 console.timeEnd("getPinnedRepos");
 const result = pinned.data.user.pinnedItems.nodes.map((node) => node.name);
 return result;
}

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

// Cache get repository package.json
export async function getRepositoryPackageJson(
 username: string,
 reponame: string
) {
 const res = await fetch(`${env.GITHUB_API}/graphql`, {
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
  next: { revalidate: HOURS_1 },
 });
 const response = await res.json();
 try {
  const packageJson = JSON.parse(response.data.repository.object.text);
  return packageJson;
 } catch (error) {
  console.error("Error parsing package.json", error);
  return {};
 }
}

// Cache get recent user activity
export const getRecentUserActivity = async (
 username: string
): Promise<RecentUserActivity[]> => {
 console.log("Fetching recent activity for", username);
 console.time("getRecentUserActivity");
 const res = await fetch(`${env.GITHUB_API}/users/${username}/events`, {
  headers: { Authorization: `Bearer ${env.GH_TOKEN}` },
  next: { revalidate: HOURS_1 },
 });
 console.timeEnd("getRecentUserActivity");
 return res.json();
};

// Cache get repo languages
interface RepoLanguagesResponse {
 data: {
  [key: string]: {
   name: string;
   languages: {
    edges: [
     {
      size: number;
      node: {
       name: string;
       color: string;
      };
     },
    ];
   };
  };
 };
}

export async function getRepoLanguages(
 owner: string,
 repoNames: string[]
): Promise<RepoLanguagesResponse> {
 console.time(`getRepoLanguages`);

 const query = `
    query {
      ${repoNames
       .map(
        (repo, index) => `
        repo${index}: repository(owner: "${owner}", name: "${repo}") {
          name
          languages(first: 10, orderBy: {field: SIZE, direction: DESC}) {
            edges {
              size
              node {
                name
                color
              }
            }
          }
        }
      `
       )
       .join("")}
    }
  `;

 const res = await fetch(`${env.GITHUB_API}/graphql`, {
  method: "POST",
  headers: {
   Authorization: `Bearer ${env.GH_TOKEN}`,
   "Content-Type": "application/json",
  },
  body: JSON.stringify({ query }),
  next: { revalidate: HOURS_12 },
 });

 if (!res.ok) {
  throw new Error(`Error: ${res.status}`);
 }

 console.timeEnd(`getRepoLanguages`);
 return res.json();
}
