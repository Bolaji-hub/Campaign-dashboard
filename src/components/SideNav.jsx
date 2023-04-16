import React from "react";
import Lightning from "../assets/Lightning.svg";
import Vector from "../assets/Vector.svg";
import settings from "../assets/Setting.svg";
import act from "../assets/Act.svg";
import users from "../assets/Users.svg";
import added from "../assets/Added.svg";
import affliate from "../assets/Affliate.svg";
import plus from "../assets/Plus.svg";

const SideNav = () => {
  return (
    <nav className="min-h-screen p-4 bg-[#1D1042] w-80 text-white sticky left-0 top-0 flex flex-col ">
      <button className="flex gap-2 bg-purple-1 text-white items-center text-lg p-4 rounded-md font-thin">
        <img src={Lightning} />
        Welcome Keerthi
      </button>
      <ul>
        <li>
          <a
            href="#"
            className="flex gap-2 p-4 hover:text-black duration-500 text-sm "
          >
            <img src={Vector} />
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex gap-2 p-4 hover:text-black duration-500 text-sm"
          >
            <img src={settings} />
            Settings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex gap-2 text-sm p-4 hover:text-black duration-500"
          >
            <img src={act} />
            Activities
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex gap-2 text-sm hover:text-black duration-500 p-4"
          >
            <img src={users} />
            Users
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex gap-2 text-sm hover:text-black duration-500 p-4"
          >
            <img src={added} />
            Added users
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex gap-2 text-sm hover:text-black duration-500 p-4"
          >
            <img src={affliate} />
            Affliate
          </a>
        </li>
        <hr className="my-4 mx-4" />
        <li>
          <a
            href="#"
            className="flex gap-2 text-sm p-4 hover:text-black duration-500"
          >
            <img src={act} />
            Profile
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex gap-2 text-sm hover:text-black duration-500 p-4"
          >
            <img src={users} />
            Logout
          </a>
        </li>
      </ul>
      <button className="flex gap-2 bg-purple-1 items-center text-lg p-4 rounded-md mt-auto font-thin">
        <img src={plus} />
        NEW PROJECTS
      </button>
    </nav>
  );
};

export default SideNav;
