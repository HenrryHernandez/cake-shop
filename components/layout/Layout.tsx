import { FC, ReactNode } from "react";
import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

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
        <link rel="icon" href="/images/logo.png"></link>
      </Head>

      <Script src="https://kit.fontawesome.com/bfe5530393.js" />
      <Script
        src="https://kit.fontawesome.com/bfe5530393.js"
        crossOrigin="anonymous"
      />
      <Link href="/dist/output.css" rel="stylesheet" />

      <Navbar />

      <main>{children}</main>
    </>
  );
};
