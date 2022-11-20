import type { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/Homepage.css";
import "../styles/components/ui/Carousel.css";
import "../styles/components/ui/Footer.css";
import "../styles/components/ui/Navbar.css";
import "../styles/pages/Stock.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
