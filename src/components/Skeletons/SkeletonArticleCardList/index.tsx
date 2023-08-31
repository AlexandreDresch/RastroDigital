import { motion } from "framer-motion";

export function SkeletonArticleCardList() {
  return (
    <motion.li
      initial={{ y: 100 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      role="status"
      className="flex items-center justify-between animate-pulse mb-20"
    >
      <div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32 mb-2.5 sm:w-16"></div>
        <div className="w-60 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2 sm:w-28"></div>
        <div className="w-60 h-2 bg-gray-200 rounded-full dark:bg-gray-700 sm:w-28"></div>
      </div>
      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
    </motion.li>
  );
}
