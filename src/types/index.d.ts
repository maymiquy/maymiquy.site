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
