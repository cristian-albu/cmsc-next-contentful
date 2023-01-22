import Link from "next/link";
import React, { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { AiOutlineCalendar, AiOutlineMenu, AiOutlineTeam } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BsBook } from "react-icons/bs";

import { useMotionValueEvent, useScroll } from "framer-motion";

const styles = {
  nav: `flex items-center justify-between bg-dark text-[#fff] fixed top-0 left-0 w-[100%] z-[100]`,
  logo: `mr-[10rem]`,
  li: `transition-all hover:bg-[#fff] hover:text-dark list-none`,
  link: `flex items-center p-[1rem] `,
  linkText: `ml-1`,
  burger: `w-[3.5rem] h-[3.5rem] flex justify-center items-center cursor-pointer transition-colors hover:bg-[#fff] hover:text-dark lg:hidden`,
  ulLarge: `hidden  lg:flex justify-between drop-shadow-none rounded-bl-none scale-[1]`,
  ulMobile: `flex flex-col absolute top-[3.5rem] right-0 bg-dark transition-all origin-top-right drop-shadow-xl rounded-bl-lg lg:hidden`,
};

const navData: Array<navLink> = [
  { title: "Proiecte si programe", link: "/proiecte-si-programe", icon: <BsBook /> },
  { title: "Resurse", link: "/resurse", icon: <HiOutlineDocumentText /> },
  { title: "Evenimente", link: "/evenimente", icon: <AiOutlineCalendar /> },
  { title: "Despre noi", link: "/despre-noi", icon: <AiOutlineTeam /> },
  { title: "Contact", link: "/contact", icon: <FaRegEnvelope /> },
];

export default function Nav() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [shouldShowActions, setShouldShow] = useState(true);
  const [lasyYPos, setLastYPos] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: any) => {
    setShouldShow(latest < lasyYPos);
    setLastYPos(latest);
  });

  return (
    <>
      {
        <div
          className={`fixed  top-0 right-0  cursor-pointer transition ${
            burgerMenu ? `bg-[#00000021] w-[100vw] h-[100vh] backdrop-blur-sm` : `bg-transparent w-[0vw] h-[0vh] backdrop-blur-none`
          }`}
          style={{ zIndex: "99" }}
          onClick={() => setBurgerMenu(false)}
        />
      }
      <motion.div
        className={`${styles.nav}`}
        animate={{ y: shouldShowActions ? 0 : -100 }}
        initial={{ y: 0 }}
        transition={{ y: { duration: 0.2 }, default: { ease: "linear" } }}
      >
        <div className={styles.logo}>
          <li className={styles.li} onClick={() => setBurgerMenu(false)}>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
        </div>
        <a className={styles.burger} onClick={() => setBurgerMenu(!burgerMenu)}>
          <AiOutlineMenu className="text-xl" />
        </a>
        <ul className={burgerMenu ? `${styles.ulMobile} scale-[1]` : `${styles.ulMobile} scale-[0]`}>
          {navData.map((e: any, i: number) => (
            <li className={styles.li} key={i} onClick={() => setBurgerMenu(false)}>
              <Link href={e.link} className={styles.link}>
                {e.icon}
                <p className={styles.linkText}>{e.title}</p>
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.ulLarge}>
          {navData.map((e: any, i: number) => (
            <li className={styles.li} key={i} onClick={() => setBurgerMenu(false)}>
              <Link href={e.link} className={styles.link}>
                {e.icon}
                <p className={styles.linkText}>{e.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}
