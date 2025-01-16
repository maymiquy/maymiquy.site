import React, { ReactNode } from "react";
import RootLayout from "./root-layout";

const HomeLayout = ({ children }: { children: ReactNode }) => {
 return (
  <RootLayout title="Welcome to My Portfolio | maymiquy">
   <div className="text-zinc-100 flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/30 to-black">
    {children}
   </div>
  </RootLayout>
 );
};

export default HomeLayout;
