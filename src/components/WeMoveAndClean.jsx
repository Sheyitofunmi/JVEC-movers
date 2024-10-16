import React from "react";

const WeMoveAndClean = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row items-center md:justify-between justify-center px-8 py-8">
      <div className="md:w-2/3 md:text-left text-center">
        <h1 className="text-4xl font-bold text-[#535558]">WE MOVE AND CLEAN</h1>
        <p className="text-lg text-black font-semibold mt-2">
          POWERED BY MD ENVIRONMENTAL SERVICES | PROFESSIONAL CLEANING SERVICES
        </p>
        <button className="bg-[#FF3333] mt-6 hover:bg-red-400 text-white px-6 font-light text-xs py-2 rounded-xs  transition duration-300">
          Learn More
        </button>
      </div>

      <div className="mt-6 md:mt-0 md:w-1/3 flex justify-center md:justify-end">
        <img
          src="/service-logo.png"
          alt="Logo"
          className="w-40 h-40 object-contain"
        />
      </div>
    </div>
  );
};

export default WeMoveAndClean;
