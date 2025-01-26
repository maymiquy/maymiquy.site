import React from "react";

import { icons } from "@/utils/constants/icons";
import {
 Card,
 Tabs,
 TabsContent,
 TabsList,
 TabsTrigger,
} from "@/components/ui";

type TechStackProps = {
 gridSystem: string;
};

const TechStack = (props: TechStackProps) => {
 return (
  <div
   className={`
      mt-6 lg:mt-0 px-6 md:px-8 py-6 lg:py-[35px] xl:py-[45px] 
      lg:bg-zinc-900 bg-opacity-40 
      rounded-xl lg:shadow-md 
      flex flex-col space-y-4 lg:space-y-8 xl:space-y-10 
      ${props.gridSystem}
      overflow-hidden
      `}
  >
   <div>
    <h3 className="text-md xl:text-lg text-center text-zinc-100 font-display">
     Technologies Use
    </h3>
    <p className="text-center font-sans text-xs xl:text-sm text-zinc-300/70">
     Here are some of the technologies that I have used in my projects.
    </p>
   </div>
   <div className="w-full flex justify-center items-center">
    <div className="relative max-w-fit flex flex-col items-center">
     <Tabs defaultValue="Language">
      <div className="flex justify-center">
       <TabsList className="bg-zinc-800/50 rounded-lg border border-zinc-700/50 backdrop-blur-sm">
        {icons.map((item, index) => (
         <TabsTrigger
          key={index}
          value={item.category}
          className="
         rounded-md text-xs md:text-sm lg:text-xs xl:text-sm font-medium 
         transition-all duration-300 ease-linear
         hover:text-zinc-100 hover:bg-zinc-700/50
     data-[state=active]:bg-zinc-700 
     data-[state=active]:text-white 
     data-[state=active]:scale-105
     data-[state=inactive]:text-zinc-400
     "
         >
          {item.category}
         </TabsTrigger>
        ))}
       </TabsList>
      </div>

      {icons.map((item, index) => (
       <TabsContent
        key={index}
        value={item.category}
        className="mt-6 animate-in fade-in-50 slide-in-from-bottom-3"
       >
        <Card className="p-6 max-w-xs md:max-w-md lg:max-w-xs xl:max-w-md mx-auto">
         <div className="flex flex-col items-center gap-y-2 mb-8">
          <h1 className="text-sm md:text-lg font-semibold text-zinc-200">
           {item.category}
          </h1>
          <div className="w-28 h-[2px] rounded-full bg-gradient-to-r from-zinc-500 to-zinc-700" />
         </div>

         <div
          className={`grid grid-cols-4 md:grid-cols-5 ${
           item.props.length > 9 ? "lg:grid-cols-4" : "lg:grid-cols-3"
          } gap-6 lg:gap-8`}
         >
          {item.props.map((value, index) => (
           <div
            key={index}
            className="group flex flex-col items-center gap-2 transition-all hover:-translate-y-1"
           >
            <span className="flex flex-col justify-center items-center w-12 h-12 md:w-16 md:h-16 py-1.5 gap-2 rounded-lg bg-zinc-800/50 group-hover:bg-zinc-700/50">
             <value.icon color={value.color} />
             <p className="text-zinc-400 text-[8px] md:text-[11px] text-nowrap -tracking-widest font-medium group-hover:text-zinc-200">
              {value.name}
             </p>
            </span>
           </div>
          ))}
         </div>
        </Card>
       </TabsContent>
      ))}
     </Tabs>
    </div>
   </div>
  </div>
 );
};

export default TechStack;
