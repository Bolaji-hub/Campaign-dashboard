import React from "react";

const Header = () => {
  return (
    <div className="p-8 min-h-screen py-4">
      <div className="flex justify-space-between items-center mt-4">
        <h1 className="text-4xl font-medium">New Campaign Run</h1>
        <button className="top-12 bg-black ml-auto text-white rounded-md py-2 px-5 text-sm font-extralight ">
          ADD MEMBERS
        </button>
      </div>
      <p className="text-[#B8B9BD] text-sm font-light m-2">
        A new campaign launch work for brand new featur in may month
      </p>
    </div>
  );
};

export default Header;
