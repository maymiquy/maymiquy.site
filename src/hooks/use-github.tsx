import { GithubContext } from "@/context/github-context";
import React from "react";

export const useGithub = () => {
 const context = React.useContext(GithubContext);
 if (context === undefined) {
  throw new Error("useGithub must be used within a GithubProvider");
 }
 return context;
};
