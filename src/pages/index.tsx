import { getUser } from "@/services/user-github.service";
import customDataJson from "@/utils/constants/personal-data.json";
import { menu } from "@/utils/constants/menu";

import HomeLayout from "@/layouts/home-layout";
import { WelcomeNavigation, WelcomeSection } from "@/components/features/home";
import { GetServerSideProps } from "next";

const HomePage = () => {
 return (
  <HomeLayout>
   <WelcomeNavigation menu={menu} />
   <WelcomeSection />
  </HomeLayout>
 );
};

export default HomePage;

export const getServerSideProps = (async () => {
 const user: GitHubUser = (await getUser(customDataJson.githubUsername)) || [];
 return {
  props: {
   user,
  },
 };
}) satisfies GetServerSideProps<{ user: GitHubUser }>;
