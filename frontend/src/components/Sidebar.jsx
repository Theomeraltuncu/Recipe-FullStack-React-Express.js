import React from "react";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegCompass } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoCreateOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen justify-between items-center p-3 max-md:p-2 max-md:justify-normal max-md:gap-20 lg:px-6">
      <img
        className="w-[150px] max-md:w-[90px] "
        width={150}
        src="/recipe_logo.jpg"
        alt=""
      />

      <div className="flex flex-col gap-16">
        <NavLink
          to={"/"}
          className="flex gap-4 items-center text-lg text-gray-600"
        >
          <IoHomeOutline className="max-md:text-4xl" />
          <span className="max-md:hidden">Home</span>
        </NavLink>
        <NavLink
          to={"/add"}
          className="flex gap-4 items-center text-lg text-gray-600"
        >
          <IoCreateOutline className="max-md:text-4xl" />
          <span className="max-md:hidden">Create</span>
        </NavLink>
        <NavLink
          to={"/discover"}
          className="flex gap-4 items-center text-lg text-gray-600"
        >
          <FaRegCompass className="max-md:text-4xl" />
          <span className="max-md:hidden">Discover</span>
        </NavLink>
        <NavLink
          to={"favourites"}
          className="flex gap-4 items-center text-lg text-gray-600"
        >
          <CiHeart className="max-md:text-4xl" />
          <span className="max-md:hidden">Favourites</span>
        </NavLink>
        <NavLink
          to={"help"}
          className="flex gap-4 items-center text-lg text-gray-600"
        >
          <CiSettings className="max-md:text-4xl" />
          <span className="max-md:hidden">Help</span>
        </NavLink>
      </div>

      <div className="flex flex-col">
        {/* <p className='font-semibold'>wanna daily updates??</p> */}
        <button className="bg-red-500 p-2 rounded-lg text-white hover:bg-red-400 px-10 my-10">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
