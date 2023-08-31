import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <div className="w-full h-full inline-block z-0 bg-light p-32 pt-0 dark:bg-dark xl:p-24 xl:pt-0 lg:p-16 md:p-12 sm:p-8">
      {children}
    </div>
  );
}
