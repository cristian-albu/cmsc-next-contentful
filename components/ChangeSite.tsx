import React from "react";

export default function ChangeSite() {
  return (
    <a
      className="fixed bottom-5 left-0 bg-dark text-[#fff] rounded-br-lg rounded-tr-lg p-3 cursor-pointer flex flex-col justify-start items-start drop-shadow-lg lg:max-w-[12%]"
      href="https://www.e-retete.ro/"
      style={{ zIndex: "99" }}
    >
      <div className="flex flex-col lg:flex-row">
        <p className="lg:text-xl mr-2">Schimbă </p>
        <p className="lg:text-xl">pagina!</p>
      </div>

      <p className="text-[0.8rem] hidden lg:flex">Nu uita să ştergi istoricul (Ctrl + h)</p>
    </a>
  );
}
