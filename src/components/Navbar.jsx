import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#e9f4f7] shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="w-full flex flex-row justify-start items-center text-start">
          <img src="./1.svg" alt="" className="w-8 h-8" />
          <h1 className="text-xl sm:text-2xl font-bold text-[#0097b2]">
            ebsoft
          </h1>
        </div>
        <ul className="hidden sm:flex gap-6 text-gray-700 font-thin text-lg">
          <Link to="/">
            <li className="hover:text-white hover:bg-green-700 rounded p-2 cursor-pointer">
              Home
            </li>
          </Link>
          <li className="hover:text-white hover:bg-green-700 rounded p-2 cursor-pointer">
            Projects
          </li>
          <Link to="contact">
            <li className="hover:text-white hover:bg-green-700 rounded p-2 cursor-pointer">
              Contact
            </li>{" "}
          </Link>
        </ul>
        <ul className=" md:hidden flex text-gray-700 font-thin text-lg">
          <Link to="contact">
            <li className="hover:text-white hover:bg-green-700 rounded p-2 cursor-pointer">
              Contact
            </li>{" "}
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
