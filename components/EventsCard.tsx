import formatDate from "@/lib/fortmatDate";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function EventsCard({ title, image, date, description, slug, location }: EventCard) {
  const [newDate, setNewDate] = useState(date);

  useEffect(() => {
    setNewDate(formatDate(newDate));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Link href={`/evenimente/${slug}`} className="flex w-[100%] items-start mb-10 transition-transform hover:-translate-y-2 lg:w-[48%] ">
      <div className="border-r-[1px] border-grey pr-3 w-[40%] flex flex-col justify-start">
        <Image src={image} width={400} height={400} alt={title} className="object-cover h-auto rounded-lg mb-2" />
        <p className="text-pink font-bold">{location != "undefined" && location}</p>
      </div>

      <div className="flex flex-col pl-3 w-[60%] justify-start">
        <h3 className="text-2xl mb-2">{title}</h3>
        <p className="text-pink font-bold mb-2">{newDate}</p>
        <p>{description}</p>
      </div>
    </Link>
  );
}
