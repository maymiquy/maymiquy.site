import React from "react";

type GithubContextType = {
 user: GitHubUser;
 recentUserActivity: RecentUserActivity[];
 pinnedRepo: string[];
 repo: GitHubRepository[];
};

export const GithubContext = React.createContext<GithubContextType | undefined>(
 undefined
);

export const GithubProvider: React.FC<
 GithubContextType & { children: React.ReactNode }
> = ({ children, user, recentUserActivity, pinnedRepo, repo }) => {
 return (
  <GithubContext.Provider
   value={{ user, recentUserActivity, pinnedRepo, repo }}
  >
   {children}
  </GithubContext.Provider>
 );
};
