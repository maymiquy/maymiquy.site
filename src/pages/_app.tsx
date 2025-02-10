import type { AppProps } from "next/app";

import "@/styles/globals.css";
import NextTopLoader from "nextjs-toploader";

import { GithubProvider } from "@/context/github-context";

export default function App({ Component, pageProps }: AppProps) {
 return (
  <GithubProvider
   user={pageProps.user}
   recentUserActivity={pageProps.recentUserActivity}
   pinnedRepo={pageProps.pinnedRepo}
   repo={pageProps.repo}
  >
   <NextTopLoader
    color="#ffff"
    initialPosition={0.08}
    crawlSpeed={50}
    height={5}
    crawl={true}
    showSpinner={true}
    easing="ease"
    speed={50}
    shadow="0 0 10px #ffff,0 0 5px #ffff"
   />
   <Component {...pageProps} />
  </GithubProvider>
 );
}
