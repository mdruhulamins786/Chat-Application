import React from "react";
import { FaPhoneAlt, FaVideo, FaAlignRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-slate-700 rounded-tr-md">
      <div className="flex justify-between mx-3 py-6 items-center">
        <p className="text-white font-semibold text-lg">Jon Due</p>
        <div className="flex text-white gap-x-3">
          <p className="p-3 bg-slate-500 cursor-pointer hover:bg-slate-900 duration-500 rounded-full">
            <FaVideo className="" />
          </p>
          <p className="p-3 bg-slate-500 cursor-pointer hover:bg-slate-900 duration-500 rounded-full">
            <FaPhoneAlt />
          </p>
          <p className="p-3 bg-slate-500 cursor-pointer hover:bg-slate-900 duration-500 rounded-full">
            <FaAlignRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
