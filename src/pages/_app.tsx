import { GithubProvider } from "@/context/github-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
 console.log(pageProps);
 return (
  <GithubProvider user={pageProps.user}>
   <Component {...pageProps} />
  </GithubProvider>
 );
}
