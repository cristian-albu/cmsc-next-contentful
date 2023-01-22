import Image from "next/image";
import React from "react";

export default function PartnerCard({ logo, name, url }: PartnerCard) {
  return (
    <a href={url} target="_blank" className="w-[46%] md:w-[29%] mx-[2%] flex flex-col justify-center items-center mb-10 lg:w-[20%] 2xl:w-[12%]">
      <Image src={logo} width={100} height={100} alt="" className="object-contain h-[3rem] mb-3 w-auto" />
      <h3 className="text-lg text-center">{name}</h3>
    </a>
  );
}
