import Link from "next/link";
import React from "react";

const styles = {
  dark: `bg-dark text-[#fff] hover:bg-[#fff] hover:text-dark `,
  color: `bg-darkPurple text-[#fff] hover:bg-pink hover:text-[#fff]`,
};

export default function AButton({ text, icon, type, link }: LinkButton) {
  return (
    <a
      className={`flex justify-center items-center px-[.7rem] py-[.4rem] cursor-pointer rounded-full transition-all ease-in drop-shadow-xl hover:scale-[1.04] ${
        type == "dark" ? styles.dark : ""
      } ${type == "color" ? styles.color : ""} ${type == undefined || type == null ? `bg-[#fff] text-dark hover:bg-dark hover:text-[#fff] ` : ""}`}
      target="_blank"
      href={link}
    >
      {icon ? <div className="mr-[.5rem]">{icon}</div> : <></>}
      <p>{text}</p>
    </a>
  );
}
