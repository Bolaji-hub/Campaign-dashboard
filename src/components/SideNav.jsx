import React from "react";
import Lightning from "../assets/Lightning.svg";
import Vector from "../assets/Vector.svg";
import settings from "../assets/Setting.svg";
import act from "../assets/Act.svg";
import users from "../assets/Users.svg";
import added from "../assets/Added.svg";
import affliate from "../assets/Affliate.svg";
import plus from "../assets/Plus.svg";

const SideNav = ({ isNavOpen }) => {
  return (
    <nav
      className={`min-h-screen p-4 bg-[#1D1042] w-70 text-white flex fixed z-20 md:sticky top md:left-0 top-0 flex-col transition-all ${
        isNavOpen ? "left-0" : "left-[-100vw]"
      }`}
    >
      <button className="flex gap-2 bg-[#703EFE] text-white items-center p-4 px-6 rounded-md font-thin">
        <img src={Lightning} />
        Welcome Keerthi
      </button>
      <ul>
        <li>
          <a
            href="#"
            className="flex gap-2 mt-4 p-4 hover:text-black duration-500 text-sm "
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
      <button className="flex gap-2 bg-[#703EFE] items-center p-4 px-8 rounded-md mt-auto font-thin">
        <img src={plus} />
        NEW PROJECTS
      </button>
    </nav>
  );
};

export default SideNav;
