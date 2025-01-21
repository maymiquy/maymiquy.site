import React from "react";
import RootLayout from "@/layouts/root-layout";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
 return (
  <RootLayout title="Miqdam Hambali | Portfolio">
   <div className="text-zinc-100 flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/30 to-black">
    {children}
   </div>
  </RootLayout>
 );
};

export default HomeLayout;
