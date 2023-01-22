import React from "react";
import { motion, useScroll } from "framer-motion";

export default function Wrapper({ children }: any) {
  return (
    <motion.div
      className="relative flex flex-col max-w-[900px] items-stretch w-[100%] 2xl:max-w-[1200px]"
      initial={{ opacity: 0, x: "-100px" }}
      whileInView={{ opacity: 1, x: "0px" }}
      transition={{ type: "spring", damping: 15 }}
    >
      <div>{children}</div>
    </motion.div>
  );
}
