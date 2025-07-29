import React, { useState } from "react";
import SidePanel from "../sidePanel/SidePanel";

const Navbar: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <SidePanel />
        <div className="text-xl font-bold text-black-600">
          Monthly income and expenses
        </div>
      </div>
      <div className="relative">
        <button
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <img
            src="https://i.pravatar.cc/40"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="hidden md:inline text-gray-700">Profile</span>
        </button>

        {isProfileOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Settings
            </a>
            <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
