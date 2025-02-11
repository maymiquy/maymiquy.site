import { type GetStaticProps } from "next";
import customDataJson from "@/utils/constants/personal-data.json";
import {
 getPinnedRepos,
 getRecentUserActivity,
 getRepos,
} from "@/services/user-github.service";

import CommonLayout from "@/layouts/common-layout";
import Header from "@/components/features/projects/header";
import ProjectList from "@/components/features/projects/project-list";

const ProjectsPage = () => {
 return (
  <CommonLayout title="Projects">
   <section className="mx-auto w-full flex flex-col justify-center items-center mt-10 lg:mt-0">
    <Header />
    <ProjectList />
   </section>
  </CommonLayout>
 );
};

export const getStaticProps = (async () => {
 console.log("Revalidating data...");
 const [recentUserActivity, pinnedRepo, repo] = await Promise.all([
  getRecentUserActivity(customDataJson.githubUsername),
  getPinnedRepos(customDataJson.githubUsername),
  getRepos(customDataJson.githubUsername),
 ]);
 return {
  props: {
   recentUserActivity: recentUserActivity || [],
   pinnedRepo: pinnedRepo || [],
   repo: repo || [],
  },
  revalidate: 60 * 30,
 };
}) satisfies GetStaticProps<{
 recentUserActivity: RecentUserActivity[];
 pinnedRepo: any;
 repo: any;
}>;

export default ProjectsPage;
