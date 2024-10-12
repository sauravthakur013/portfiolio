"use client";
import Image from "next/image";
import React from "react";
import logo from "@/assets/portfolioLogo.png";
import { motion } from "framer-motion";



function Navbar({ setSection }: any) {
  return (
    <motion.div className="fixed top-0 w-full h-20 backdrop-blur-md flex justify-between px-4 sm:px-10 items-center z-30 "
    initial={{ y: -100 }} 
    animate={{ y: 0 }} 
    transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.7, duration: 0.5 }} 
    >
      <div
        id="logoContainer"
        className=" cursor-pointer"
        onClick={() => setSection("home")}
      >
        <Image src={logo.src} alt="logo" height={100} width={100} />
      </div>
      <div className="gap-10 hidden sm:flex">
        <ul
          onClick={() => setSection("home")}
          className="cursor-pointer hover:scale-105 duration-150 hover:text-white "
        >
          Home
        </ul>
        <ul
          onClick={() => setSection("experience")}
          className="cursor-pointer hover:scale-105 duration-150  hover:text-white "
        >
          Experience
        </ul>
        <ul
          onClick={() => setSection("project")}
          className="cursor-pointer hover:scale-105 duration-150  hover:text-white "
        >
          Projects
        </ul>
        <ul
          onClick={() => setSection("contact")}
          className="cursor-pointer hover:scale-105 duration-150  hover:text-white "
        >
          Contact
        </ul>
      </div>
    </motion.div>
  );
}

export default Navbar;
