"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="w-full h-[100vh]  relative">
      <div className="capitalize w-full px-10 text-[10vh] font-mono font-light border-zinc-800 border-b-2">
        featured projects
      </div>
      <motion.div className="flex  items-center justify-center gap-20 mt-20">
        <div className="car1 w-[40%] h-[60vh]  flex bg-[#004D43] rounded-lg ">
          <img className="m-40" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt=""  />
        </div>
        <div className="car1 w-[40%] h-[60vh]  flex bg-[#004D43] rounded-lg items-center justify-center">
          <img className="m-40 bg-transparent" src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default Cards;
