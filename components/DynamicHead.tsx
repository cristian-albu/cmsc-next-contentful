import Head from "next/head";
import React from "react";

export default function DynamicHead({ title, description, image }: SEO) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description ? `${description}` : `Centrul de Mediere si Securitate Comunitara`} />
        <meta property="og:description" content={description ? `${description}` : `Centrul de Mediere si Securitate Comunitara`} />

        <meta property="og:image" content={image ? image : "/assets/hero_img_1.jpg"} />
      </Head>
    </>
  );
}
