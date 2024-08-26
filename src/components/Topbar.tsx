"use client"
import React from "react";

const Topbar = () => {
  
  return (
    <div className="pl-4 fixed w-[70%] rounded-md text-black bg-slate-300/80 flex justify-between items-center">
      <h3 className="line-clamp-1 font-semibold">Aptitude Test</h3>
      <div className="font-medium">
        Remaining time: <span>{`${2} Hr: ${0} Min: ${0} Sec`}</span>
      </div>
      <div className="font-medium">
        Total Questions: <span>{20}</span>
      </div>

      <button className="p-4 rounded-lg text-white bg-gray-800 font-semibold">
        Finish Test
      </button>
    </div>
  );
};

export default Topbar;
