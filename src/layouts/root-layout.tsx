import React from "react";
import Head from "next/head";

import localFont from "next/font/local";
import { Inter } from "next/font/google";

const calSans = localFont({
 src: "../../public/fonts/CalSans-SemiBold.ttf",
 variable: "--font-calsans",
});

const inter = Inter({
 subsets: ["latin"],
 variable: "--font-inter",
});

interface RootLayoutProps {
 children: React.ReactNode;
 title?: string;
}

const RootLayout: React.FC<RootLayoutProps> = ({
 children,
 title = "My Portfolio",
}) => {
 return (
  <>
   <Head>
    <title>{title}</title>
    <meta name="description" content="My personal portfolio website" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.png" />
   </Head>

   <main
    className={[
     calSans.className,
     inter.className,
     calSans.variable,
     inter.variable,
    ].join(" ")}
   >
    {children}
   </main>
  </>
 );
};

export default RootLayout;
