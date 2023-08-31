import { motion } from "framer-motion";

import { MovingImage } from "../MovingImage";

interface ArticleCardProps {
  image: string;
  title: string;
  date: string;
  link: string;
}

export function ArticleListCard({
  image,
  title,
  date,
  link,
}: ArticleCardProps) {
  return (
    <motion.li
      initial={{ y: 100 }}
      whileInView={{ y: 0, transition:{duration: .5, ease: "easeInOut"} }}
      viewport={{once: true}}
      className="relative w-full p-4 py-6 my-4 rounded-md flex items-center justify-between shadow-md shadow-dark/20 bg-light text-dark first:mt-0 dark:bg-dark dark:border-[1px] dark:border-gray-400"
    >
      <MovingImage image={image} link={link} title={title} />
      <span className="text-primary font-semibold dark:text-primaryDark">{date}</span>
    </motion.li>
  );
}
