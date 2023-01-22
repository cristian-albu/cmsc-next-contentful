import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ResourceCard({ title, slug, image, year }: ResourceCard) {
  return (
    <Link
      href={`/resurse/${slug}`}
      className="w-[100%] md:w-[48%] lg:w-[23%] p-5 bg-[#fff] mb-[2rem] rounded-lg drop-shadow-xl transition-all hover:drop-shadow-2xl hover:scale-[1.02] "
    >
      <div className="w-full overflow-hidden aspect-square rounded-md mb-5">
        <Image src={image} width={300} height={300} alt={title} className="object-cover w-full h-full" />
      </div>
      <p className="text-lg">{title}</p>
      <p>{year}</p>
    </Link>
  );
}
