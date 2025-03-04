import React from "react";

function Bottom() {
  return (
    <div
      id="bottomDiv"
      className="mt-[20vw] flex justify-between items-start px-[7vw]"
    >
      <div id="part1" className="w-1/2"></div>
      <div id="part2" className="w-[41%]">
        <h1 className="text-[6vw] font-thin tracking-[-4px] whitespace-nowrap leading-none">
          Blue Pottery <br /> Decorative <br />
          Vase
        </h1>
        <div className="flex justify-between w-full mt-10 items-center">
          <button
            id="btn"
            className="relative py-5 px-10 rounded-full border-2 text-[1vw] bg-transparent cursor-pointer transition-all duration-300 hover:bg-[#FF8676] hover:border-[#FF8676] hover:text-white hover:scale-105"
          >
            <span className="inline-block relative z-20">Add to cart</span>
          </button>

          <h2 className="text-7xl">$99.99</h2>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
