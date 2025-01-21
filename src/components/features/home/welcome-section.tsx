import React from "react";
import { AnimationBounce, BounceOnload } from "@/components/ui/animation";
import WelcomeTypography from "@/components/ui/welcome-typography";
import { useGithub } from "@/hooks/use-github";
import personalDataJson from "@/utils/constants/personal-data.json";
import Image from "next/image";

const WelcomeSection = () => {
 const { user } = useGithub();
 const splitUsername =
  personalDataJson.githubUsername.split("") || user?.login.split("");

 return (
  <section>
   <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
   <div className="max-h-fit z-10 animate-title duration-1000 md:overflow-hidden flex flex-row justify-center">
    <h1 className="md:flex items-center hidden text-zinc-100 hover:from-zinc-600 hover:to-zinc-300 text-transparent bg-clip-text cursor-default text-edge-outline font-display text-7xl md:text-9xl whitespace-nowrap">
     {splitUsername.map((word, index) => (
      <AnimationBounce key={index}>
       <BounceOnload>{word === " " ? "\u00A0" : word}</BounceOnload>
      </AnimationBounce>
     ))}
    </h1>
    <AnimationBounce>
     <Image
      alt={user?.login || personalDataJson.githubUsername}
      width={150}
      height={150}
      src={user?.avatar_url || personalDataJson.avatarUrl}
      className="rounded-full w-52 h-52 md:w-40 md:h-40 mb-4 md:mb-12"
     />
    </AnimationBounce>
   </div>

   <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

   <div className="my-16 text-center px-6 md:px-0 animate-fade-in">
    <h1 className="text-sm sm:text-lg text-zinc-300 tracking-tight">
     <WelcomeTypography />
    </h1>
   </div>
  </section>
 );
};

export default WelcomeSection;
