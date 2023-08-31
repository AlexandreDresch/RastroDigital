import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  image: string;
  title: string;
  date: string;
  description: string;
  link: string;
}

const FramerImage = motion(Image);

export default function ArticleCard({
  image,
  title,
  date,
  description,
  link,
}: ArticleCardProps) {
  return (
    <li className="col-span-1 w-full p-4 bg-light rounded-md shadow-md shadow-dark/20 dark:bg-dark dark:border-[1px] dark:border-gray-400">
      <Link
        href={`/post/${link}`}
        className="w-full inline-block cursor-pointer overflow-hidden rounded-md"
      >
        <FramerImage
          src={image}
          alt={title}
          className="w-full h-96"
          width={1080}
          height={720}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <Link href={`/post/${link}`} prefetch>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline text-dark dark:text-light">
          {title}
        </h2>
      </Link>

      <p className="text-sm mb-2 text-dark dark:text-light line-clamp-2">{description}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {date}
      </span>
    </li>
  );
}
