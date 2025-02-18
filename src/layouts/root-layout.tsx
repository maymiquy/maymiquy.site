import React from "react";
import Head from "next/head";

import localFont from "next/font/local";
import { Inter } from "next/font/google";
import SEO from "@/components/common/seo";
import { env } from "@/config/env";

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
 title: string;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, title }) => {
 return (
  <>
   <Head>
    <title>{title}</title>
    <SEO
     title={title}
     description="Welcome to my portfolio site, I'm Miqdam Hambali an Software Engineer. Passionate and driven software development with a strong foundation in web development. Dedicated to contribute my expertise to a forward-thinking team, while continuously learning and growing in the ever-evolving world of technology."
     image={`${env.PUBLIC_URL}/maymiquy.png`}
     keywords="
     Miqdam,
     Miqdam Ferdiansyah, 
     Miqdam Ferdiansyah Hambali,
     Miqdam Hambali,
     Ferdiansyah,
     Hambali,
     Miqdam Hambali | Portfolio,
     Miqdam Hambali Portfolio,
     Miqdam Portfolio,
     maymiquy,
     Maymiquy,
     maymiquy - portfolio,
     portfolio,
     website portfolio,
     miqdam website
     "
    />
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
