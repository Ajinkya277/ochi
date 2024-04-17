"use client";
import React, { useEffect } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div data-scroll data-scroll-speed="-.9">
      <div className="flex items-center h-[70vh] w-full border-b-[1px] leading-tight border-zinc-800 py-[20vh] px-10 text-[15vh] ">
        <div className="text uppercase font-bold font-sans w-full leading-none">
          <h1>we create</h1>
          <div  className="flex gap-3  ">
            <div className="box  items-center rounded-3xl m-3 object-cover bg-red-500 w-[170px] ">
              <img className='object-cover' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" />
            </div>
            <h1 className="">eye opning</h1>
          </div>
          <h1>presentation</h1>
        </div>
      </div>

      <div className="w-full h-[20vh]  py-20 flex capitalize justify-between items-center">
        <div className="text-lighter px-10">
          for the public and private companies
        </div>
        <div className="text-lighter px-4">from the first pitch to ipo</div>
        <div className="flex mr-4">
          <button className="text-lighter px-4 py-2 border-zinc-500 border-[0.5px] mr-4 rounded-full ">
            start the project
          </button>
          <div className="cirleo h-10 w-10 rounded-full items-center flex justify-center border-zinc-500 border-[0.5px] ">
            {" "}
            <MdOutlineArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
