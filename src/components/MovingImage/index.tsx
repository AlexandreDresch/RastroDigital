import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface MovingImageProps {
  title: string;
  image: string;
  link: string;
}

const FramerImage = motion(Image);

export function MovingImage({ title, image, link }: MovingImageProps) {
  const xValue = useMotionValue(0);
  const yValue = useMotionValue(0);

  const imageRef = useRef<HTMLImageElement | null>(null);

  function handleMouseEnter(event: React.MouseEvent) {
    if (imageRef.current) {
      imageRef.current.style.display = "inline-block";
    }
    xValue.set(event.pageX);
    yValue.set(-10);
  }

  function handleMouseLeave() {
    if (imageRef.current) {
      imageRef.current.style.display = "none";
    }
    xValue.set(0);
    yValue.set(0);
  }

  return (
    <Link
      href={`/post/${link}`}
      prefetch
      onMouseMove={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline text-dark dark:text-light sm:text-xl">
        {title}
      </h2>
      <FramerImage
        style={{ x: xValue, y: yValue }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imageRef}
        src={image}
        alt={title}
        width={300}
        height={300}
        className="w-96 h-auto hidden absolute rounded-md z-50 object-contain"
      />
    </Link>
  );
}
