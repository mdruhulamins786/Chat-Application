import React from "react";

import { FaImage, FaFolderPlus } from "react-icons/fa";

const Messages = () => {
  return (
    <div className="bg-slate-800 h-[61px] rounded-e-md flex justify-between items-center px-6">
      <div>
        <input
          type="text"
          className="bg-inherit outline-none text-lg text-white w-96 py-6"
          placeholder="type something...."
        />
      </div>
      <div className="flex gap-x-4 items-center">
        <FaImage className="text-white text-2xl" />
        <FaFolderPlus className="text-white text-2xl" />
        <button className="text-white bg-slate-500 px-4 py-1 rounded-sm hover:bg-slate-600 duration-300">
          Send
        </button>
      </div>
    </div>
  );
};

export default Messages;
