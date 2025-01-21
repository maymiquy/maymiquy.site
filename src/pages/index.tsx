import React from "react";
import { getUser } from "@/services/user-github.service";
import customDataJson from "@/utils/constants/personal-data.json";
import { menu } from "@/utils/constants/menu";

import HomeLayout from "@/layouts/home-layout";
import { WelcomeNavigation, WelcomeSection } from "@/components/features/home";

const HomePage = () => {
 return (
  <HomeLayout>
   <WelcomeNavigation menu={menu} />
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
