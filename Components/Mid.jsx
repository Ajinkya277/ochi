"use client"
import { motion } from "framer-motion";
import React from "react";
import { ScrollMotionValues } from "framer-motion";

const Mid = () => {
  return (
    <motion.div  className="first z-20 w-full bg-[#CDEA68] min-h-[40vh] rounded-tl-3xl rounded-tr-3xl">
      <div className=" text-black h-[50vh] text-[7vh] font-sarif ml-5 mr-5  font-regular capitalize px-10 py-[16vh] border-b-[1px] border-black">
        <motion.h1 initial={{opacity:'0'}} animate={{opacity:'100%'}}transition={{ease:"backInOut", duration:6}} className="">
          Ochi is a strategic partner for fast-grow­ing tech businesses that
          need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire
          great peo­ple.
        </motion.h1>
      </div>
      <div className=" second flex text-xl font-light text-black py-8">
        <div className="left w-1/2 h-[70vh] px-10 text-xl font-light text-black py-4">
          What you can expect:
        </div>
        <div className="right w-1/2 h-[70vh] px-[15vh] text-xl font-light text-black py-4 ">
          We create tailored presentations to help you persuade your colleagues,
          clients, or investors. Whether it’s live or digital, delivered for one
          or a hundred people. <br />
          <p className="mt-5">
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>
        <div className="links py-[10vh] px-[15vh] ">
          <ul>s:</ul> <br />
          <ul>Behance</ul>
          <ul>Linkdin</ul>
          <ul>Instagram</ul>
        </div>
      </div>

      <div className="third border-t-[1px] border-black h-[50vh] px-10 ml-5 mr-5 py-8  ">
        <h1 className="text-4xl font-semibold capitalize text-black">
          our approach:
        </h1>
        
        
        <div className="flex text-white w-1/2 px-1 py-5 mt-4">
          <div className="flex gap-3 ">
            <button className="text-regular font-regular gap-3 rounded-full items-centre flex capitalize px-9 py-2 bg-[#212121]">
              read more
              <div className="cicle h-5 w-5 justify-center flex rounded-full items-center bg-white"></div>
            </button>
          </div>
        </div>
      </div>
          
            
          
        
    </motion.div>
  );
};

export default Mid;
