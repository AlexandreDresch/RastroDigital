import { Logo } from "../Logo";

export default function Footer() {
  return (
    <footer className="w-full border-t-[1px] border-solid border-dark font-medium text-lg mt-14 dark:border-light">
      <div className="w-full h-full flex  z-0 bg-light p-32 py-8 items-center justify-between dark:bg-dark xl:px-24 lg:px-16 md:px-12 sm:px-8">
        <Logo />
        <span className="text-dark dark:text-light sm:text-sm">
          {new Date().getFullYear()} &copy; Todos os Direitos Reservados
        </span>
      </div>
    </footer>
  );
}
