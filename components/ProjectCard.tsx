import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkButton from "./LinkButton";

export default function ProjectCard({ photo, title, slug, style, description, startDate, endDate }: ProjectCard) {
  if (style == "fullW") {
    return (
      <div className="w-[100%] flex justify-between items-start mb-12 flex-wrap">
        <div className="w-[100%] md:w-[30%] flex overflow-hidden rounded-md drop-shadow-lg">
          <Image src={photo} width={700} height={500} alt="decorative" className="object-cover" />
        </div>
        <div className="w-[100%] md:w-[66%] flex flex-col items-start">
          <h3 className="text-2xl font-bold mb-5">{title}</h3>
          <p className="mb-2">{startDate}</p>
          <p className="mb-5">{description}</p>
          <LinkButton text="Vezi mai multe" type="dark" link={`/proiecte-si-programe/${slug}`} />
        </div>
      </div>
    );
  } else {
    return (
      <Link
        href={`/proiecte-si-programe/${slug}`}
        className="w-[46%] mx-[2%] flex flex-col bg-[#fff] drop-shadow-xl rounded-md px-5 pb-5 items-center mt-[37px] mb-8 transition-all hover:scale-105 hover:drop-shadow-2xl"
      >
        <div className="w-[80%] h-[125px] flex justify-center items-center rounded-md overflow-hidden mt-[-37px] mb-3 drop-shadow-xl">
          <Image src={photo} width={300} height={300} alt="decorative" className="object-cover h-[125px]" />
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </Link>
    );
  }
}
