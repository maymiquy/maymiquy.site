import React from "react";
import { CardSlider } from "@/components/ui";
import { experiences } from "@/utils/constants/experiences";

type WorkExperienceProps = {
 gridSystem: string;
};

const WorkExperience = (props: WorkExperienceProps) => {
 return (
  <div
   className={`
    lg:bg-zinc-900 
    space-y-4 bg-opacity-40 rounded-xl 
    lg:shadow-md py-4 px-6 relative
    w-full lg:max-w-full max-w-md
     ${props.gridSystem}
    `}
  >
   <h3 className="text-center text-md lg:text-start lg:text-lg font-bold text-zinc-100 font-display">
    Experience
   </h3>
   <div className="whitespace-nowrap overflow-x-auto [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] rounded-lg">
    <CardSlider exp={experiences} />
   </div>
   <span className="text-[11px] font-sans text-muted-foreground/60 absolute h-fit w-fit bottom-0 right-[calc(50%-135px)] lg:top-2 lg:right-6">
    Sep 2022 - {new Date().toLocaleString("default", { month: "short" })}{" "}
    {new Date().getFullYear()},{" "}
    {Math.floor(
     (new Date().getTime() - new Date("2022-09-01").getTime()) /
      (1000 * 60 * 60 * 24 * 365),
    )}{" "}
    years{" "}
    {Math.floor(
     ((new Date().getTime() - new Date("2022-09-01").getTime()) %
      (1000 * 60 * 60 * 24 * 365)) /
      (1000 * 60 * 60 * 24 * 30),
    )}{" "}
    months experience
   </span>
  </div>
 );
};

export default WorkExperience;
