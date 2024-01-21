import type { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/Homepage.css";
import "../styles/components/ui/Footer.css";
import "../styles/components/ui/Navbar.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
