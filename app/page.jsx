import Cards from "@/Components/Cards";
import Landing from "@/Components/Landing";
import Mid from "@/Components/Mid";
import Mrk from "@/Components/Mrk";
import Navigation from "@/Components/Navigation";
import React from "react";

const page = () => {
  return (
    <div className="w-full min-h-[100vh] bg-zinc-900">
      <div className="circle px-4 py-y mix-blend-difference absolute top-2 left-2 z-50"></div>
      <Navigation />
      <Landing />
      <Mrk />
      <Mid />
      <Cards />
    </div>
  );
};

export default page;
