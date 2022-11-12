import { motion } from "framer-motion";
import React from "react";
import { BsCodeSlash, BsArrowRight } from "react-icons/bs";
import { slideUp } from "../animation/framerMotion";

export default function Button({ text, icon, filled }) {
  return (
    <div
      className={` box-sm w-44 lg:w-64 h-max p-3 flex items-center sm-text-xl lg:text-2xl hover:bg-black hover:text-white hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all ease-linear overflow-hidden`}
    >
      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex items-center justify-center w-full gap-5"
      >
        {icon == "code" && <BsCodeSlash />}
        <h1>{text}</h1>
        {icon == "arrow" && <BsArrowRight />}
      </motion.div>
    </div>
  );
}
