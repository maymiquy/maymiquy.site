import React, { FC, ReactNode } from "react";
import Head from "next/head";
import { Figtree } from "next/font/google";

interface HomeLayoutProps {
 children: ReactNode;
 title?: string;
}

const figtree = Figtree({
 subsets: ["latin"],
 weight: ["300", "400", "500", "600", "700", "800", "900"],
 variable: "--font-figtree",
});

const HomeLayout: FC<HomeLayoutProps> = ({
 children,
 title = "My Portfolio",
}) => {
 return (
  <>
   <Head>
    <title>{title}</title>
    <meta name="description" content="My personal portfolio website" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
   </Head>

   <main
    className={`${figtree.className} text-zinc-100 flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/30 to-black`}
   >
    {children}
   </main>
  </>
 );
};

export default HomeLayout;
