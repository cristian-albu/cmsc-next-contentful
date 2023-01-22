import Image from "next/image";
import React from "react";

export default function TeamCard({ photo, name, position }: TeamCard) {
  return (
    <div className="w-[46%] md:w-[29%] mx-[2%] flex flex-col bg-[#fff] drop-shadow-xl rounded-md px-5 pb-5 items-center mt-[37px] mb-5 lg:w-[21%] xl:w-[16%]">
      <div className="w-[75px] h-[75px] flex justify-center items-center rounded-full overflow-hidden mt-[-37px] mb-3 drop-shadow-xl">
        <Image src={photo} width={150} height={150} alt="decorative" className="w-[75px] aspect-square object-cover h-auto" />
      </div>

      <h3 className="text-lg font-bold text-center">{`${name.slice(0, 1).toUpperCase()}${name.slice(1)}`}</h3>
      <p className="text-center">{`${position?.slice(0, 1).toUpperCase()}${position?.slice(1)}`}</p>
    </div>
  );
}
