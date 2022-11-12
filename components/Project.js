import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  popOut,
  slideDown,
  slideLeft,
  slideRight,
  slideUp,
} from "../animation/framerMotion";
export default function Project() {
  const projects = [
    { projectName: "Modern Portfolio" },
    { projectName: "Uy Lab" },
    { projectName: "Uy Lab" },
  ];
  return (
    <>
      {projects.map((project, i) => (
        <motion.div
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          exit="exit"
          key={i}
          className="min-h-screen grid grid-cols-5 gap-10 place-content-center"
        >
          <h4
            className={`col-span-5 text-black text-2xl md:text-4xl ${
              (i + 1) % 2 == 0 && "text-right"
            }`}
          >
            0{i + 1}.
          </h4>
          <div
            className={`grid grid-cols-8 col-span-5 sm:col-span-4 md:col-span-3 gap-10 lg:mr-10 ${
              (i + 1) % 2 == 0 && "lg:order-2 mr-0 lg:ml-10"
            }`}
          >
            <div className={`relative mobile col-span-2`}>
              <Image
                className="object-cover box"
                fill
                src="/project1.jpg"
                alt=""
              />
              <motion.div
                variants={popOut}
                className="absolute top-0 h-full w-full bg-black"
              />
            </div>
            <div className={`relative tab col-span-3`}>
              <Image
                className="object-cover box"
                fill
                src="/project1.jpg"
                alt=""
              />
              <motion.div
                variants={popOut}
                className="absolute top-0 h-full w-full bg-black"
              />
            </div>
            <div className={`relative aspect-video col-span-8`}>
              <Image
                className="object-cover box"
                fill
                src="/project1.jpg"
                alt=""
              />
              <motion.div
                variants={popOut}
                className="absolute top-0 h-full w-full bg-black"
              />
            </div>
          </div>
          <div className="box h-[450px] lg:h-[500px] 2xl:h-[600px] col-span-5 lg:col-span-2">
            <div className="p-8 sm:p-10 h-full flex flex-col gap-10 justify-start">
              <div className="relative overflow-hidden w-max">
                <h2 className=" text-2xl md:text-3xl font-bold w-max">
                  Modern Portfolio
                </h2>
                <motion.div
                  variants={i % 2 == 0 ? slideRight : slideLeft}
                  className="absolute top-0 h-full w-full bg-black"
                />
              </div>
              <div className="relative overflow-hidden">
                <p className="text-xl md:text-2xl ">
                  Personal Portfolio website using Next js and tailwind css.
                </p>
                <motion.div
                  variants={slideDown}
                  className="absolute top-0 h-full w-full bgDark"
                />
              </div>
              <div className="mt-auto">
                <div className="text-lg md:text-xl border-2 border-white w-max py-2 px-5 hover:bg-white hover:text-black transition-colors ease-linear overflow-hidden">
                  <motion.div
                    initial={{ y: 30 }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1, type: "spring" }}
                    exit={{ y: 30, transition: { duration: 0.5, delay: 0 } }}
                  >
                    <Link href="#">Live Demo</Link>
                  </motion.div>
                </div>
                <hr className="border-dashed bg-black my-5" />
                <div className="flex text-lg gap-5">
                  <p>#NextJs</p>
                  <p>#TailwindCss</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}
