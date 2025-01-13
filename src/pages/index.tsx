import HomeLayout from "@/layouts/home-layout";
import { getUser } from "@/services/user-github.service";
import React from "react";
import { GitHubUser } from "@/types";
import WelcomeTypography from "@/components/ui/welcome-typography";
import customDataJson from "@/utils/constants/personal-data.json";

interface HomePageProps {
 user: GitHubUser;
}

const HomePage = ({ user }: HomePageProps) => {
 return (
  <HomeLayout title="Welcome to My Portfolio | maymiquy">
   <div className="flex flex-col items-center justify-center">
    <WelcomeTypography user={user} data={customDataJson} />
   </div>
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
