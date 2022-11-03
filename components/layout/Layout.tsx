import { FC, ReactNode } from "react";
import Head from "next/head";
import Script from "next/script";

import { Footer, Navbar } from "../ui";

type Props = {
  children: ReactNode;
  title?: string;
};

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Cake Shop"}</title>
        <meta name="author" content="Henrry Hernandez" />
        <meta name="description" content="Información sobre el pokemon XXXXX" />
        <meta name="keywords" content={`${title}, XXXXX, pokemon, pokedex`} />
        <meta property="og:title" content="Info sobre el poke" />
        <meta property="og:description" content={`Pagina sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Script src="https://kit.fontawesome.com/bfe5530393.js" />

      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
};
