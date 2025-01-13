import { GitHubUser } from "@/types";
import React from "react";

type GithubContextType = {
 user: GitHubUser;
};

export const GithubContext = React.createContext<GithubContextType | undefined>(
 undefined,
);

export const GithubProvider: React.FC<
 GithubContextType & { children: React.ReactNode }
> = ({ children, user }) => {
 return (
  <GithubContext.Provider value={{ user }}>{children}</GithubContext.Provider>
 );
};
