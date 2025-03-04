import React from "react";
import "remixicon/fonts/remixicon.css";

function Navbar() {
  return (
    <div className="flex w-full top-0 items-center justify-between py-8 px-10">
      <h2 className="text-2xl">F</h2>
      <div className="flex items-center gap-30">
        <div className="flex gap-10">
          <a
            href="#"
            className="transition-all duration-300 hover:text-gray-300 hover:scale-105"
          >
            Shop
          </a>
          <a
            href="#"
            className="transition-all duration-300 hover:text-gray-300 hover:scale-105"
          >
            New
          </a>
          <a
            href="#"
            className="transition-all duration-300 hover:text-gray-300 hover:scale-105"
          >
            About
          </a>
          <a
            href="#"
            className="transition-all duration-300 hover:text-gray-300 hover:scale-105"
          >
            Store
          </a>
          <a
            href="#"
            className="transition-all duration-300 hover:text-gray-300 hover:scale-105"
          >
            Search
          </a>
        </div>
        <div className="flex gap-10 items-center">
          <i className="ri-handbag-fill text-xl transition-all duration-300 hover:scale-105 hover:text-gray-300"></i>
          <i className="ri-menu-2-fill text-xl transition-all duration-300 hover:scale-105 hover:text-gray-300"></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
