import Footer from "@/components/Footer";
import Gdpr from "@/components/Gdpr";
import Nav from "@/components/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div style={{ maxWidth: "100vw", overflow: "hidden" }}>
      <Nav />
      <Gdpr showPrivacy={showPrivacy} setShowPrivacy={setShowPrivacy} />
      <Component {...pageProps} setShowPrivacy={setShowPrivacy} />
      <Footer setShowPrivacy={setShowPrivacy} />
    </div>
  );
}
