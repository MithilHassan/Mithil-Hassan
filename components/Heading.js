import React from "react";
import { BsSearch } from "react-icons/bs";
import { motion } from "framer-motion";
import { slideLeft } from "../animation/framerMotion";
export default function Heading({ text }) {
  return (
    <div className="min-w-[280px] w-3/5 h-max p-2 px-5 md:py-5 md:px-10 box flex items-center justify-between text-2xl md:text-4xl">
      <h2 className="relative overflow-hidden">
        {text}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute top-0 w-full h-full bg-black"
        />
      </h2>
      <BsSearch />
    </div>
  );
}
