import Link from "next/link";
import { Logo } from "../Logo";

import { useRouter } from "next/router";
import { motion } from "framer-motion";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";

import SunIcon from "../../../public/svgs/sunny-filled-loop-to-moon-filled-loop-transition.svg";
import MoonIcon from "../../../public/svgs/moon-filled-to-sunny-filled-loop-transition.svg";
import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const { pathname, push } = useRouter();

  const [mode, setMode] = useThemeSwitcher();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  function toggleTheme() {
    setMode(mode === "dark" ? "light" : "dark");
  }

  function handleMobileMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleMobileMenuNavigation(href: string) {
    push(href);
    handleMobileMenu();
  }

  return (
    <header className="w-full relative px-32 py-8 font-medium flex items-center justify-between dark:text-light xl:px-24 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col justify-center items-center transform  -translate-x-1/2 -translate-y-1/2 hidden lg:flex"
        onClick={handleMobileMenu}
      >
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-5 rounded-sm transform transition duration-500 ease-in-out ${
            isMenuOpen ? "rotate-45 " : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-5 rounded-sm transform transition duration-500 ease-in-out ${
            isMenuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-5 rounded-sm transform transition duration-500 ease-in-out ${
            isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <Logo />

      <div className="w-full flex justify-center items-center lg:hidden">
        <nav>
          <Link href="/" className="mr-4 relative group">
            Página Inicial
            <span
              className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                pathname === "/" ? "w-full" : "w-0"
              } dark:bg-light`}
            >
              &nbsp;
            </span>
          </Link>
          <Link href="/articles" className="mx-4 relative group">
            Artigos
            <span
              className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                pathname === "/articles" ? "w-full" : "w-0"
              } dark:bg-light`}
            >
              &nbsp;
            </span>
          </Link>
          <Link href="/about" className="ml-4 relative group">
            Sobre
            <span
              className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                pathname === "/about" ? "w-full" : "w-0"
              } dark:bg-light`}
            >
              &nbsp;
            </span>
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{scale: 0, opacity: 0, x: "-50%", y: "-50%"}}
          animate={{scale: 1, opacity: 1}}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-dark/90 dark:bg-light/75 backdrop-blur-md py-32 rounded-sm"
        >
          <nav className="flex flex-col gap-2">
            <button
              onClick={() => handleMobileMenuNavigation("/")}
              className="relative group text-light dark:text-dark"
            >
              Página Inicial
              <span
                className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                  pathname === "/" ? "w-full" : "w-0"
                } dark:bg-dark`}
              >
                &nbsp;
              </span>
            </button>
            <button
              onClick={() => handleMobileMenuNavigation("/articles")}
              className="relative group text-light dark:text-dark"
            >
              Artigos
              <span
                className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                  pathname === "/articles" ? "w-full" : "w-0"
                } dark:bg-dark`}
              >
                &nbsp;
              </span>
            </button>
            <button
              onClick={() => handleMobileMenuNavigation("/about")}
              className="relative group text-light dark:text-dark"
            >
              Sobre
              <span
                className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                  pathname === "/about" ? "w-full" : "w-0"
                } dark:bg-dark`}
              >
                &nbsp;
              </span>
            </button>
          </nav>
        </motion.div>
      )}

      <nav>
        <motion.button
          whileHover={{ y: -2 }}
          onClick={toggleTheme}
          className="flex items-center justify-center p-1"
        >
          {mode === "dark" || mode === "" ? (
            <Image src={MoonIcon} alt="Light Mode" className="w-6" />
          ) : (
            <Image src={SunIcon} alt="Dark Mode" className="w-6" />
          )}
        </motion.button>
      </nav>
    </header>
  );
}
