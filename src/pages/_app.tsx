import Footer from "@/components/Footer";
import { Navbar } from "@/components/NavBar";
import "@/styles/globals.css";
import Head from "next/head";

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-manRope bg-light w-full min-h-screen dark:bg-dark">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
};

export default App;
