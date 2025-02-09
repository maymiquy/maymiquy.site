import React from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { cn } from "@/utils";

interface CardProps {
 children: React.ReactNode;
 className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
 const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
 const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

 const onMouseMove = ({
  currentTarget,
  clientX,
  clientY,
 }: React.MouseEvent<HTMLDivElement>) => {
  const { left, top } = currentTarget.getBoundingClientRect();
  mouseX.set(clientX - left);
  mouseY.set(clientY - top);
 };

 const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
 const style = { maskImage, WebkitMaskImage: maskImage };

 return (
  <div
   onMouseMove={onMouseMove}
   className={cn(
    "overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-700/50",
    className
   )}
  >
   <div className="pointer-events-none">
    <div className="absolute inset-0 z-0 transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
    <motion.div
     className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-zinc-100/10 transition duration-1000 group-hover:opacity-50"
     style={style}
    />
    <motion.div
     className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
     style={style}
    />
   </div>
   {children}
  </div>
 );
};
