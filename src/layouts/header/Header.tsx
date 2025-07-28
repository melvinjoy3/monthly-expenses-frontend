// @ts-nocheck
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import DefaultSidebar from "../sidePanel/SidePanel";

const Header = () => {
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center shadow-sm">
      <div className="flex items-center">
        {/* Left side */}
        <DefaultSidebar />
        <span className="font-bold px-4 text-lg">
          Monthly Icome and Expenses
        </span>
      </div>

      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="Expenses"
        />
      </div>
    </div>
  );
};

export default Header;
