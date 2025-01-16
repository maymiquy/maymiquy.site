import React from "react";
import { BounceOnload } from "@/components/ui/animation";
import { useGithub } from "@/hooks/use-github";
import personalDataJson from "@/utils/constants/personal-data.json";

const WelcomeTypography = () => {
 const { user } = useGithub();

 return (
  <>
   <p className="block md:hidden text-sm font-bold cursor-default">
    Hello, I'm{" "}
   </p>
   <p className="hidden md:block text-md font-display cursor-default">A.K.A</p>
   <p className="font-display text-xl sm:text-3xl cursor-default">
    <BounceOnload>{user?.name || personalDataJson.displayName}</BounceOnload>
   </p>
   <p className="text-sm sm:text-md md:text-lg text-zinc-300 font-sans mt-2 cursor-default">
    {user?.bio}
   </p>
   <p className="text-sm hidden md:block text-zinc-500 font-sans mt-2 cursor-default">
    Passionate and driven software development with a strong foundation in web
    development.{" "}
   </p>
   <p className="text-xs md:text-sm text-center text-zinc-500 font-sans font-normal mt-2 md:mt-0 cursor-default">
    Dedicated to contribute my expertise to a forward-thinking team, while
    continuously learning and growing in the ever-evolving world of technology.
   </p>
  </>
 );
};

export default WelcomeTypography;
