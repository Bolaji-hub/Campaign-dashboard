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
      <ul className="hidden md:flex ml-auto gap-4 text-[#7D8088] font-light text-sm">
        <li className="hover:text-black duration-500">
          <a href="#" className="flex gap-1 items-center">
            <View />
            Participants View
          </a>
        </li>
        <li className="hover:text-black duration-500">
          <a href="#" className="flex gap-1 items-center">
            <Board />
            Board View
          </a>
        </li>
        <li className="hover:text-black duration-500">
          <a href="#" className="flex gap-1 items-center">
            <List /> List View
          </a>
        </li>
        <li className="hover:text-black duration-500">
          <a href="#" className="flex gap-1 items-center">
            <Power /> Power View
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
