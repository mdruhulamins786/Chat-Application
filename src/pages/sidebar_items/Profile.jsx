import React from "react";

const Profile = () => {
  return (
    <div className="flex items-center p-5 rounded-tl-lg justify-between bg-slate-800">
      <div className="flex items-center">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
          alt=""
          className="rounded-full w-12 me-3 h-12 ring-2 ring-white"
        />
        <p className="text-white font-semibold text-xl">Ruhul Amin</p>
      </div>
      <div>
        <button className="bg-slate-400 px-3 py-1 rounded font-medium hover:bg-slate-600  hover:text-white duration-300">
          Log out
        </button>
      </div>
    </div>
  );
};

export default Profile;
