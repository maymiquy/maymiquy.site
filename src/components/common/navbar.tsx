import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { ArrowLeftIcon } from "@primer/octicons-react";

type MenuItems = {
 title: string;
 href: string;
};

type NavbarProps = {
 menu: MenuItems[];
};

const Navbar = (props: NavbarProps) => {
 const ref = React.useRef<HTMLElement | null>(null);
 const [isIntersecting, setIsIntersecting] = React.useState<boolean>(true);
 const path = usePathname();

 React.useEffect(() => {
  if (!ref.current) return;

  const observer = new IntersectionObserver(([entry]) =>
   setIsIntersecting(entry.isIntersecting),
  );

  observer.observe(ref.current);
  return () => observer.disconnect();
 }, []);

 return (
  <header ref={ref}>
   <nav
    className={`fixed inset-x-0 top-0 z-20 backdrop-blur duration-200 border-b  ${
     isIntersecting ? "bg-zinc-900/0 border-transparent" : "border-zinc-800"
    }`}
   >
    <div className="container flex flex-row-reverse items-center justify-between py-6 px-8 mx-auto">
     <div className="flex justify-between gap-8 text-base font-display">
      {props.menu.map((item, index) => (
       <Link
        key={index}
        href={item.href}
        className={`duration-200 ${
         path === item.href
          ? "text-zinc-600 font-bold pointer-events-none"
          : "text-zinc-300 hover:text-zinc-100 hover:scale-110 duration-700"
        }`}
       >
        {item.title}
       </Link>
      ))}
     </div>
     <Link
      href="/"
      className="text-zinc-200 hover:text-zinc-100 hover:scale-110 duration-700"
      children={<ArrowLeftIcon className="w-6 h-6" />}
     />
    </div>
   </nav>
  </header>
 );
};

export default Navbar;
