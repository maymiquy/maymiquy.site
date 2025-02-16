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

interface GitHubPermissions {
 admin: boolean;
 maintain: boolean;
 push: boolean;
 triage: boolean;
 pull: boolean;
}

interface GitHubRepository {
 id: number;
 node_id: string;
 name: string;
 full_name: string;
 private: boolean;
 owner: GitHubUser;
 html_url: string;
 description: string | null;
 fork: boolean;
 url: string;
 forks_url: string;
 keys_url: string;
 collaborators_url: string;
 teams_url: string;
 hooks_url: string;
 issue_events_url: string;
 events_url: string;
 assignees_url: string;
 branches_url: string;
 tags_url: string;
 blobs_url: string;
 git_tags_url: string;
 git_refs_url: string;
 trees_url: string;
 statuses_url: string;
 languages_url: string;
 stargazers_url: string;
 contributors_url: string;
 subscribers_url: string;
 subscription_url: string;
 commits_url: string;
 git_commits_url: string;
 comments_url: string;
 issue_comment_url: string;
 contents_url: string;
 compare_url: string;
 merges_url: string;
 archive_url: string;
 downloads_url: string;
 issues_url: string;
 pulls_url: string;
 milestones_url: string;
 notifications_url: string;
 labels_url: string;
 releases_url: string;
 deployments_url: string;
 created_at: string;
 updated_at: string;
 pushed_at: string;
 git_url: string;
 ssh_url: string;
 clone_url: string;
 svn_url: string;
 homepage: string | null;
 size: number;
 stargazers_count: number;
 watchers_count: number;
 language: string | null;
 has_issues: boolean;
 has_projects: boolean;
 has_downloads: boolean;
 has_wiki: boolean;
 has_pages: boolean;
 has_discussions: boolean;
 forks_count: number;
 mirror_url: string | null;
 archived: boolean;
 disabled: boolean;
 open_issues_count: number;
 license: string | null;
 allow_forking: boolean;
 is_template: boolean;
 web_commit_signoff_required: boolean;
 topics: string[];
 visibility: string;
 forks: number;
 open_issues: number;
 watchers: number;
 default_branch: string;
 permissions: GitHubPermissions;
}

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

interface RepoLanguage {
 size: number;
 node: {
  name: string;
  color: string;
 };
}
