"use client"
import React,{useEffect} from "react";
import { motion } from "framer-motion";

const mrk = () => {
 
  return (
    <motion.div className="w-full  z-10 bg-[#004D43] h-[70vh] mt-10  rounded-tl-3xl rounded-tr-3xl flex relative ">
      <div className="bor flex h-[50vh] w-full items-centre mt-[12.5vh] border-b-2 border-t-2 border-zinc-700 absolute whitespace-nowrap overflow-hidden">
        <motion.h1 initial={{x:'0'}} animate={{x:'-100%'}}transition={{ease:"linear", repeat:Infinity, duration:5}} className="text-[30vh] gap-10  items-center flex uppercase px-10 font-extrabold ">
          we are ochi
        </motion.h1>
        <motion.h1 initial={{x:'0'}} animate={{x:'-100%'}}transition={{ease:"linear", repeat:Infinity, duration:5,}} className="text-[30vh] gap-10 items-center flex uppercase px-10 font-extrabold ">
          we are ochi
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default mrk;
