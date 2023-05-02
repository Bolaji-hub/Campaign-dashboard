import React from "react";
import image from "../assets/Image.png";
import { ReactComponent as View } from "../assets/View.svg";
import { ReactComponent as Board } from "../assets/Board.svg";
import { ReactComponent as List } from "../assets/List.svg";
import { ReactComponent as Power } from "../assets/Power.svg";
import cross from "../assets/Cross.svg";

const SubHeader = () => {
  return (
    <nav className="flex items-center">
      <img src={image} className="rounded-full" />
      <img
        src={image}
        className="rounded-full border border-solid border-white -ml-2 "
      />
      <img
        src={image}
        className="rounded-full border border-solid border-white -ml-2 "
      />
      <p className="text-[#B8B9BD] font-light text-sm ml-2 ">8 member</p>
      <ul className="flex ml-auto gap-4 text-[#7D8088] font-light text-sm">
        <li className="hover:text-black duration-500">
          <a href="#" className="flex gap-1 items-center">
            <View />
            <span className=" hidden md:inline">Participants View</span>
          </a>
        </li>
        <li className="hover:text-black duration-500">
          <a href="#" className="flex gap-1 items-center">
            <Board />
            <span className="hidden md:inline">Board View</span>
          </a>
        </li>
        <li className="hover:text-black duration-500">
          <a href="#" className="flex gap-1 items-center">
            <List />
            <span className="hidden md:inline">List View</span>
          </a>
        </li>
        <li className="hover:text-black duration-500">
          <a href="#" className="flex gap-1 items-center">
            <Power />
            <span className="hidden md:inline">Power View</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={cross} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SubHeader;
