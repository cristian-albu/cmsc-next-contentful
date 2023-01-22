import Link from "next/link";
import React from "react";

const styles = {
  dark: `bg-dark text-[#fff] hover:bg-[#fff] hover:text-dark `,
  color: `bg-darkPurple text-[#fff] hover:bg-pink hover:text-[#fff]`,
};

export default function LinkButton({ text, link, icon, type }: LinkButton) {
  return (
    <Link
      href={`${link}`}
      className={`flex justify-center items-center px-[.7rem] py-[.4rem] cursor-pointer rounded-full transition-all ease-in drop-shadow-xl hover:scale-[1.04] ${
        type == "dark" ? styles.dark : ""
      } ${type == "color" ? styles.color : ""} ${type == undefined || type == null ? `bg-[#fff] text-dark hover:bg-dark hover:text-[#fff] ` : ""}`}
    >
      {icon ? <div className="mr-[.5rem]">{icon}</div> : <></>}
      <p>{text}</p>
    </Link>
  );
}
