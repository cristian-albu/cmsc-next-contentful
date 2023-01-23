import Footer from "@/components/Footer";
import Gdpr from "@/components/Gdpr";
import Nav from "@/components/Nav";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <div style={{ maxWidth: "100vw", overflow: "hidden" }} lang="ro">
      <Head>
        <meta property="og:site_name" content="Centrul de Mediere si Securitate Comunitara" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Nav />

      <Gdpr showPrivacy={showPrivacy} setShowPrivacy={setShowPrivacy} />

      <Component {...pageProps} setShowPrivacy={setShowPrivacy} />
      <Footer setShowPrivacy={setShowPrivacy} />
    </div>
  );
}
