import React from "react";
import { getUser } from "@/services/user-github.service";
import customDataJson from "@/utils/constants/personal-data.json";

import { GetServerSideProps } from "next";

import CommonLayout from "@/layouts/common-layout";
import {
 GithubStats,
 HeroProfile,
 TechStack,
 WorkExperience,
} from "@/components/features/profile";

const ProfilePage = () => {
 return (
  <CommonLayout title="Profile">
   <section className="lg:grid lg:grid-cols-3 gap-y-20 lg:gap-6 mx-auto w-full flex flex-col mt-10 lg:mt-0 justify-center items-center">
    <HeroProfile gridSystem="lg:col-span-2 lg:row-span-1" />
    <TechStack gridSystem="lg:col-span-1 lg:row-span-2" />
    <WorkExperience gridSystem="lg:col-span-2 lg:row-span-1" />
    <GithubStats gridSystem="lg:col-span-3 lg:row-span-1" />
   </section>
  </CommonLayout>
 );
};

export const getServerSideProps = (async () => {
 const user: GitHubUser = (await getUser(customDataJson.githubUsername)) || [];
 return {
  props: {
   user,
  },
 };
}) satisfies GetServerSideProps<{ user: GitHubUser }>;

export default ProfilePage;
