import React from "react";
import { useGithub } from "@/hooks/use-github";

import Image from "next/image";
import { AnimationBounce, BounceOnload, Typewriter } from "@/components/ui";

type HeroProfileProps = {
 gridSystem: string;
};

const HeroProfile = (props: HeroProfileProps) => {
 const sentence = "Hello I'm,".split("");
 const { user } = useGithub();
 const name = user?.name.split("") || "Miqdam Hambali".split("");

 return (
  <div
   className={`
    lg:bg-zinc-900 
    flex flex-col-reverse lg:flex-row 
    gap-8 lg:gap-0 
    justify-center lg:justify-between items-center 
    bg-opacity-40 rounded-xl lg:shadow-md 
    py-12 lg:py-[22px] px-6 
    ${props.gridSystem}
    `}
  >
   <div className="w-full text-center lg:text-start mx-auto lg:mx-0 cursor-pointer">
    <div className="text-xl lg:text-xl xl:text-3xl text-edge-outline font-display">
     <h2>
      {sentence.map((word, index) => (
       <BounceOnload key={`WS1x-${index}`}>
        <AnimationBounce>{word === " " ? "\u00A0" : word}</AnimationBounce>
       </BounceOnload>
      ))}
     </h2>
    </div>

    <div
     className={`inline-block ${
      name.length > 14
       ? "text-lg md:text-2xl xl:text-4xl"
       : "text-2xl md:text-4xl xl:text-6xl"
     } font-bold text-edge-outline font-display whitespace-nowrap`}
    >
     <h2>
      {name.map((word, index) => (
       <BounceOnload key={`WS2x-${index}`}>
        <AnimationBounce>{word === " " ? "\u00A0" : word}</AnimationBounce>
       </BounceOnload>
      ))}
     </h2>
    </div>

    <p className="text-md md:text-lg xl:text-xl text-zinc-300/70 font-medium cursor-default">
     {user?.company === "Sekolah Tinggi Teknologi Terpadu Nurul Fikri" ||
     user?.company === "STT Terpadu Nurul Fikri"
      ? "I'm currently college at "
      : "Software Engineer at "}
     {user?.company}
    </p>

    <Typewriter />
   </div>
   <Image
    alt="image profile"
    width={500}
    height={500}
    src="/image-profile.jpg"
    className="w-56 h-56 md:w-48 md:h-48 lg:w-44 lg:h-44 xl:w-60 xl:h-60 rounded-full object-fill"
   />
  </div>
 );
};

export default HeroProfile;
