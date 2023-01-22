import React from "react";

function getBg(prop: bg) {
  if (prop === "color") {
    return "bg-gradient-to-tr from-darkPurple to-pink text-[#ffffff]";
  } else if (prop === "dark") {
    return "bg-[#1e1527] text-[#ffffff]";
  } else if (prop === "light") {
    return "bg-[#ffffff] text-dark";
  } else {
    return "bg-[#f7f7f7] text-dark";
  }
}

export default function Section({ children, bg, wave }: Section) {
  return (
    <div className={`${getBg(bg)} flex flex-col justify-center items-center w-[100vw] z-10`}>
      {wave == "top" ? <div className="relative top-[-2px] bg-[url('/wave_top.svg')] bg-repeat-x bg-top bg-contain h-[8rem] w-[100vw]" /> : <></>}
      <div className="w-[100vw] p-[2rem] md:p-[4rem] 2xl:p-[5rem] flex flex-col justify-center items-center">{children}</div>
      {wave == "bottom" ? <div className="relative bottom-[-2px] bg-[url('/wave_bottom.svg')] bg-repeat-x bg-bottom bg-contain h-[8rem] w-[100vw]" /> : <></>}
    </div>
  );
}
