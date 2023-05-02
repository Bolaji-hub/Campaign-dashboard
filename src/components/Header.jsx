import React from "react";
import SubHeader from "./SubHeader";

const Header = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <div className="bg-white py-5 sticky top-0 z-10">
      <div className="container flex flex-col">
        <button
          onClick={() => setIsNavOpen((v) => !v)}
          className="md:hidden ml-auto"
        >
          {isNavOpen ? (
            "x"
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2h-20v-2zM0 9h20v2h-20v-2zM0 15h20v2h-20v-2z"></path>
            </svg>
          )}
        </button>
        <div className="flex flex-wrap items-center justify-between mt-4 gap-4 mb-8">
          <div>
            <h1 className=" text-3xl md:text-4xl font-medium">
              New Campaign Run
            </h1>
            <p className="text-[#B8B9BD] text-sm font-light mt-1">
              A new campaign launch work for brand new featur in may month
            </p>
          </div>
          <button className="top-12 bg-black text-white rounded-md py-2 px-5 text-sm font-extralight ">
            ADD MEMBERS
          </button>
        </div>

        <SubHeader />
      </div>
    </div>
  );
};

export default Header;
