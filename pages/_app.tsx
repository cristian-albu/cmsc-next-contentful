import Footer from "@/components/Footer";
import Gdpr from "@/components/Gdpr";
import Nav from "@/components/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ maxWidth: "100vw", overflow: "hidden" }}>
      {/* <Nav /> */}
      <Gdpr />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </div>
  );
}
