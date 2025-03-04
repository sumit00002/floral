import React from "react";
import "remixicon/fonts/remixicon.css";

function Navbar() {
  return (
    <div className="flex w-full top-0 items-center justify-between py-8 px-10">
      <h2 className="text-2xl">F</h2>
      <div className="flex items-center gap-30">
        <div className="flex gap-10">
          <a href="#">Shop</a>
          <a href="#">New</a>
          <a href="#">About</a>
          <a href="#">Store</a>
          <a href="#">Search</a>
        </div>
        <div className="flex gap-10 items-center">
          <i className="ri-handbag-fill text-xl"></i>
          <i className="ri-menu-2-fill text-xl"></i>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
