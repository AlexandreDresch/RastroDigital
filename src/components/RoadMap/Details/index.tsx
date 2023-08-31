import { useRef } from "react";
import { motion } from "framer-motion";
import DetailsIcon from "../DetailsIcon";

interface DetailsProps {
  title: string;
  description: string;
}

export default function Details({ title, description }: DetailsProps) {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-3/5 mx-auto flex flex-col items-left justify-between sm:w-4/5"
    >
      <DetailsIcon />
      <motion.div
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration: .5, type: "spring"}}
      >
        <h3 className="capitaliza font-bold text-2xl text-primary dark:text-primaryDark sm:text-xl sm:pl-1">{title}</h3>
        <p className="font-medium w-full sm:text-sm sm:pl-1">{description}</p>
      </motion.div>
    </li>
  );
}
