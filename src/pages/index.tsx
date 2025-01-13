import React from "react";
import { getUser } from "@/services/user-github.service";
import customDataJson from "@/utils/constants/personal-data.json";
import { GitHubUser } from "@/types";

import HomeLayout from "@/layouts/home-layout";
import WelcomeSection from "@/components/features/home/welcome-section";

const HomePage = () => {
 return (
  <HomeLayout title="Welcome to My Portfolio | maymiquy">
   <WelcomeSection />
  </HomeLayout>
 );
};

export default HomePage;

export async function getStaticProps() {
 const user: GitHubUser = (await getUser(customDataJson.githubUsername)) || [];
 return {
  props: {
   user,
  },
 };
}
