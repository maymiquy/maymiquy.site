import { Card } from "@/components/ui";
import { useGithub } from "@/hooks/use-github";
import React from "react";
import GitHubCalendar from "react-github-calendar";

type GithubStatsProps = {
 gridSystem: string;
};

const GithubStats = (props: GithubStatsProps) => {
 const { user } = useGithub();
 return (
  <div
   className={`lg:bg-zinc-900 bg-opacity-40 lg:rounded-xl lg:shadow-md py-4 px-6 w-full lg:max-w-full max-w-md ${props.gridSystem}`}
  >
   <h3 className="text-center text-md lg:text-start lg:text-lg font-bold text-zinc-100 font-display mb-2">
    Github Stats
   </h3>
   <Card className="py-6 px-2 lg:px-4 duration-700">
    <div className="flex items-center justify-center font-sans py-4 px-6 text-zinc-300/70">
     <GitHubCalendar
      username={user.login}
      labels={{
       totalCount: "{{count}} contributions in last year",
      }}
      colorScheme={"dark"}
      showWeekdayLabels
      weekStart={1}
      year={"last"}
     />
    </div>
   </Card>
  </div>
 );
};

export default GithubStats;
