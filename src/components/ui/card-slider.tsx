import React from "react";
import {
 motion,
 useScroll,
 useTransform,
 useAnimationFrame,
 useMotionValue,
 useVelocity,
 useSpring,
} from "framer-motion";
import { Card } from "./card";

type ExpItems = {
 title: string;
 agency: string;
 duration: string;
 description: string;
};

type CardSliderProps = {
 exp: ExpItems[];
};

const CardSlider = (props: CardSliderProps) => {
 const containerRef = React.useRef<HTMLDivElement>(null);
 const baseVelocity = -0.5;
 const baseX = useMotionValue(0);
 const { scrollXProgress } = useScroll({ container: containerRef });
 const scrollVelocity = useVelocity(scrollXProgress);
 const smoothVelocity = useSpring(scrollVelocity, {
  damping: 50,
  stiffness: 400,
 });
 const x = useTransform(baseX, (v) => `${v}%`);

 const directionFactor = React.useRef<number>(1);
 useAnimationFrame((t, delta) => {
  let moveBy = directionFactor.current * baseVelocity * (delta / 500);

  if (containerRef.current) {
   moveBy += directionFactor.current * moveBy * smoothVelocity.get();
  }

  baseX.set(baseX.get() + moveBy);

  if (baseX.get() <= -66.666) {
   baseX.set(0);
  }
 });

 React.useEffect(() => {
  return scrollXProgress.onChange((latest) => {
   if (latest > 0.5) {
    directionFactor.current = -1;
   } else {
    directionFactor.current = 1;
   }
  });
 }, [scrollXProgress]);

 return (
  <div ref={containerRef} className="overflow-x-auto">
   <motion.ul style={{ x }} className="flex gap-4 mb-3 w-[300%]">
    {[...props.exp, ...props.exp, ...props.exp].map((item, index) => (
     <motion.li
      key={`experience-${index}`}
      className="relative w-[290px] h-[290px] md:w-[450px] md:h-auto flex-none"
     >
      <Card className="h-full w-full p-6">
       <h3 className="relative z-20 text-sm font-normal font-display md:text-base text-zinc-100 leading-[1.6]">
        {item.title}
       </h3>
       <h4 className="relative z-20 text-sm md:text-md font-sans text-wrap md:text-nowrap font-semibold md:tracking-wider text-zinc-300">
        {item.agency}
       </h4>
       <div className="relative z-20 mt-2 flex flex-row items-center">
        <span className="flex flex-col gap-1">
         <span className="text-xs font-semibold leading-[1.6] text-zinc-300/70">
          {item.duration}
         </span>
         <p className="text-xs font-normal leading-[1.6] text-wrap text-justify font-sans text-zinc-300/70">
          {item.description}
         </p>
        </span>
       </div>
      </Card>
     </motion.li>
    ))}
   </motion.ul>
  </div>
 );
};

export default CardSlider;
