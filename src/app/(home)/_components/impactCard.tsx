import Image from "next/image";
import React from "react";

const ImpactCard = ({ image, description }) => {
  return (
    <div  className="group relative cursor-pointer overflow-hidden bg-blue-950 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10 h-full">
      <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
      <div className="relative z-10 mx-auto max-w-md">
        <div className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">

        </div>
        <div className="space-y-6 pt-5 text-base leading-7 text-gray-300 transition-all duration-300 group-hover:text-white/90">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactCard;