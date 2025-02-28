import * as React from "react";
import Link from "next/link";
import { BounceOnload, HeartBeat } from "@/components/ui";

type MenuItem = {
 title: string;
 href: string;
};

type WelcomeNavigationProps = {
 menu: MenuItem[];
};

export default function WelcomeNavigation(props: WelcomeNavigationProps) {
 return (
  <nav className="my-16 animate-fade-in">
   <ul className="flex justify-center items-center gap-4">
    {props &&
     props.menu.map((item, i) => (
      <HeartBeat key={i}>
       <BounceOnload key={i}>
        <Link
         key={i}
         href={item.href}
         className="text-md sm:text-lg font-display duration-500 text-zinc-500 hover:text-zinc-300 border-dashed hover:border-solid p-2 rounded border-2 border-zinc-500 hover:border-zinc-300"
        >
         {item.title}
        </Link>
       </BounceOnload>
      </HeartBeat>
     ))}
   </ul>
  </nav>
 );
}
