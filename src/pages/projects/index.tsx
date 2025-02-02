import React from "react";
import { GetStaticProps } from "next";
import customDataJson from "@/utils/constants/personal-data.json";
import { getRecentUserActivity } from "@/services/user-github.service";

import CommonLayout from "@/layouts/common-layout";
import Header from "@/components/features/projects/header";

type Props = {};

const ProjectsPage = (props: Props) => {
 return (
  <CommonLayout title="Projects">
   <section className="mx-auto w-full flex flex-col mt-10 lg:mt-0 justify-center items-center">
    <Header />
   </section>
  </CommonLayout>
 );
};

export default ProjectsPage;

export const getStaticProps = (async () => {
 console.log("Revalidating data...");
 const recentUserActivity: RecentUserActivity =
  (await getRecentUserActivity(customDataJson.githubUsername)) || [];
 return {
  props: {
   recentUserActivity,
  },
  revalidate: 60 * 30,
 };
}) satisfies GetStaticProps<{
 recentUserActivity: RecentUserActivity;
}>;
