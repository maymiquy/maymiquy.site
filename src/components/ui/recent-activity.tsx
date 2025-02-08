import { useGithub } from "@/hooks/use-github";

type RecentActivityProps = {
 className: string;
};

type ActivitySummary = {
 commits?: number;
 reviews?: number;
 commentsCreated?: number;
 commentsEdited?: number;
 prsOpened?: number;
 prsMerged?: number;
 tags?: number;
 branches?: number;
 [key: string]: number | undefined;
};

const RecentActivity = (props: RecentActivityProps) => {
 const { recentUserActivity } = useGithub();

 const activitySummary = recentUserActivity.reduce<ActivitySummary>(
  (acc, activity) => {
   switch (activity?.type) {
    case "PushEvent":
     acc.commits = (acc.commits || 0) + (activity?.payload.size || 0);
     break;
    case "PullRequestReviewEvent":
     acc.reviews = (acc.reviews || 0) + 1;
     break;
    case "IssueCommentEvent":
     acc.commentsCreated =
      (acc.commentsCreated || 0) +
      (activity?.payload.action === "created" ? 1 : 0);
     acc.commentsEdited =
      (acc.commentsEdited || 0) +
      (activity?.payload.action === "edited" ? 1 : 0);
     break;
    case "PullRequestEvent":
     acc.prsOpened =
      (acc.prsOpened || 0) + (activity?.payload.action === "opened" ? 1 : 0);
     acc.prsMerged =
      (acc.prsMerged || 0) +
      (activity?.payload.action === "closed" &&
      activity?.payload.pull_request?.merged
       ? 1
       : 0);
     break;
    case "CreateEvent":
     if (activity?.payload.ref_type === "branch") {
      acc.branches = (acc.branches || 0) + 1;
     } else {
      acc.tags = (acc.tags || 0) + 1;
     }
     break;
   }

   if (activity?.type) {
    acc[activity.type] = (acc[activity.type] || 0) + 1;
   }

   return acc;
  },
  {},
 );

 const activitySummaryString = Object.keys(activitySummary)
  .map((key) => {
   const keyValue = activitySummary[key] || 0;
   switch (key) {
    case "commits":
     return `pushed ${keyValue} commit${keyValue > 1 ? "s" : ""}`;
    case "reviews":
     return `reviewed ${keyValue} pull request${keyValue > 1 ? "s" : ""}`;
    case "prsOpened":
     return `opened ${keyValue} pull request${keyValue > 1 ? "s" : ""}`;
    case "prsMerged":
     return `merged ${keyValue} pull request${keyValue > 1 ? "s" : ""}`;
    case "commentsCreated":
     return `submitted ${keyValue} comment${keyValue > 1 ? "s" : ""}`;
    case "branches":
     return `created ${keyValue} branch${keyValue > 1 ? "es" : ""}`;
    case "tags":
     return `created ${keyValue} tag${keyValue > 1 ? "s" : ""}`;
    default:
     break;
   }
  })
  .filter(Boolean)
  .join(", ");

 return (
  <div className={`${props.className}`}>
   <span className="text-xs md:text-sm font-sans text-zinc-500">
    {activitySummaryString &&
     "In last month on GitHub  I " +
      activitySummaryString +
      " in public repositories."}
   </span>
  </div>
 );
};

export default RecentActivity;
