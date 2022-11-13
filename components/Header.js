import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BsGithub, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { popIn, popOut, slideUp } from "../animation/framerMotion";

export default function Header() {
  return (
    <motion.header
      variants={popIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed top-0 w-full flex items-center justify-between px-5 sm:px-10 py-1 bgDark text-sm sm:text-base z-50"
    >
      <nav className="flex gap-3 sm:gap-5">
        <Link
          className="hover:tracking-widest transition-all ease-linear"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hover:tracking-widest transition-all ease-linear"
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className="hover:tracking-widest transition-all ease-linear"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
      <div className="flex gap-5">
        <Link href="https://github.com/MithilHassan">
          <BsGithub className="hover:scale-125 transition-transform ease-linear" />
        </Link>
        <Link href="https://wa.me/01730609558">
          <BsWhatsapp className="hover:scale-125 transition-transform ease-linear" />
        </Link>
        <Link href="https://www.instagram.com/mithil.hassan/">
          <BsInstagram className="hover:scale-125 transition-transform ease-linear" />
        </Link>
        <Link href="https://www.linkedin.com/in/mithil-hassan/">
          <FaLinkedinIn className="hover:scale-125 transition-transform ease-linear" />
        </Link>
      </div>
    </motion.header>
  );
}
