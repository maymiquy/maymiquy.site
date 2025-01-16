import React, { FC, ReactNode } from "react";
import Head from "next/head";

interface RootLayoutProps {
 children: ReactNode;
 title?: string;
}

const RootLayout: FC<RootLayoutProps> = ({
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

   <>{children}</>
  </>
 );
};

export default RootLayout;
