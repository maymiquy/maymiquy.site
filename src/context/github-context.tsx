import React from "react";

type GithubContextType = {
 user: GitHubUser;
 recentUserActivity: RecentUserActivity;
};

export const GithubContext = React.createContext<GithubContextType | undefined>(
 undefined,
);

export const GithubProvider: React.FC<
 GithubContextType & { children: React.ReactNode }
> = ({ children, user, recentUserActivity }) => {
 return (
  <GithubContext.Provider value={{ user, recentUserActivity }}>
   {children}
  </GithubContext.Provider>
 );
};
