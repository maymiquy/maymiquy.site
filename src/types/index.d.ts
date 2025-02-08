declare interface GitHubUser {
 avatar_url: string;
 bio: string;
 blog: string;
 collaborators: number;
 company: string;
 email: string;
 html_url: string;
 login: string;
 location: string;
 name: string;
 twitter_username: string;
 public_repos: number;
 repos_url: string;
}

declare interface CustomePersonalData {
 avatarUrl: string;
 college: string;
 description: string;
 displayName: string;
 email: string;
 githubUsername: string;
 projects: {
  blacklist: string[];
  heroNames: string[];
 };
}

declare interface RecentUserActivity {
 id: string;
 type: string;
 actor: {
  id: number;
  login: string;
  display_login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
 };
 repo: {
  id: number;
  name: string;
  url: string;
 };
 payload: {
  repository_id: number;
  push_id: number;
  size: number;
  distinct_size: number;
  ref: string;
  ref_type: string;
  head: string;
  before: string;
  pull_request: {
   merged: boolean;
  };
  action: string;
  commits: Array<{
   author: {
    email: string;
    name: string;
   };
   distinct: boolean;
   message: string;
   sha: string;
   url: string;
  }>;
 };
 public: boolean;
 created_at: string;
}
