import React from "react";

import RecentActivity from "@/components/ui/recent-activity";

const Header = () => {
 return (
  <div className="w-full">
   <h2 className="text-xl font-bold text-zinc-100 md:text-2xl lg:text-3xl">
    Projects
   </h2>
   <RecentActivity className={"mt-4"} />
   <div className="w-full h-px bg-zinc-800 mt-2" />
  </div>
 );
};

export default Header;
