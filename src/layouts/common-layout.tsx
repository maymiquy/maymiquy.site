import React from "react";
import RootLayout from "@/layouts/root-layout";
import { menu } from "@/utils/constants/menu";
import { Footer, Navbar } from "@/components/common";

const CommonLayout: React.FC<{ children: React.ReactNode; title: string }> = ({
 children,
 title,
}) => {
 return (
  <RootLayout title={`Miqdam Hambali | ${title}`}>
   <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 text-zinc-100">
    <Navbar menu={menu} />
    <div className="h-fit w-full flex justify-center items-center mx-auto md:px-8 max-w-7xl py-16 md:py-24 px-6">
     {children}
    </div>
    <Footer />
   </div>
  </RootLayout>
 );
};

export default CommonLayout;
