import Link from "next/link";
import { motion } from "framer-motion";
import { Fingerprint } from "@phosphor-icons/react";

const MotionLink = motion(Link);

export function Logo() {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2xl font-bold transition-transform dark:bg-light dark:text-dark"
        whileHover={{
          scale: 1.1,
        }}
      >
        <Fingerprint />
      </MotionLink>
    </div>
  );
}
