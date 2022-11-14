import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { popOut, slideDown } from "../animation/framerMotion";
import Button from "./Button";
import Heading from "./Heading";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center p-5 sm:p-10">
      <div className="customContainer mt-10">
        <Heading text={"Hey There!"} search />
        <div className="relative box w-full h-max p-5 md:p-10 overflow-hidden">
          <span className="text-[calc(1.5rem+1.5vw)] leading-[150%]">
            <Typewriter
              words={["My name is Mithil Hassan."]}
              loop
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={5000}
            />
          </span>
          <motion.div
            initial={{ x: "100%" }}
            exit={{ x: 0 }}
            transition={{ duration: 1 }}
            className="absolute top-0 left-0 bgDark w-full h-full"
          />
        </div>
        <div className="grid grid-cols-9 gap-6">
          <div className="relative square max-h-[420px] md:w-full col-span-5 md:col-span-3 row-span-3">
            <Image
              className="object-cover object-top box"
              fill
              src="/Mithil_Hassan.jpg"
              alt=""
            />
            <motion.div
              variants={popOut}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-0 h-full w-full bg-black"
            />
          </div>
          <div className="relative box h-max p-5 lg:p-10 text-[calc(0.8rem+1.5vw)] leading-[150%] col-span-9 md:col-span-5 -order-1 md:order-none overflow-hidden">
            <p>An Interactive front-end Web Developer.</p>
            <motion.div
              variants={slideDown}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-0 h-full w-full bgDark"
            />
          </div>
          <div className="col-span-9 md:col-span-5 flex flex-col md:flex-row gap-6">
            <Link href="/projects">
              <Button text={"My Projects"} icon={"code"} filled />
            </Link>
            <Button text={"My Resume"} icon={"arrow"} />
          </div>
        </div>
      </div>
    </div>
  );
}
