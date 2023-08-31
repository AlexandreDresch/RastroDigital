import { ReactNode, useRef } from "react";
import { useScroll, motion } from "framer-motion";

interface RoadMapProps {
  title: string;
  children: ReactNode;
}

export function RoadMap({title, children} : RoadMapProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mb-64">
      <h2 className="font-bold text-4xl mb-16 w-full text-center">
        {title}
      </h2>

      <div ref={ref} className="w-3/4 mx-auto relative md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-1 h-full bg-dark origin-top dark:bg-light"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {children}
        </ul>
      </div>
    </div>
  );
}
