import React from "react";

const MovingServiceCard = () => {
  return (
    <div className="flex  w-full pt-14  md:py-10 justify-center mx-auto items-center px-6 bg-[#EAEAEA] ">
      <div className="flex flex-col md:flex-row ml-0 md:ml-12 lg:ml-16 items-center justify-center mx-auto px-auto">
        <div className=" w-full ">
          <img
            src="/movers.png"
            alt="Movers"
            className="object-cover h-full w-full"
          />
        </div>

        <div className=" md:w-full w-[80%] max-w-4xl -top-16 md:-top-0  px-3 py-8 relative bg-opacity-95  md:right-16 my-2 md:my-10 lg-my-10 xl:my-6 bg-[#3B3B3B] text-white xl:p-7 md:p-4 flex text-center items-center justify-center">
          <div>
            <h1 className="lg:text-3xl text-2xl font-bold mb-2 lg:mb-4">
              WHAT WE REPRESENT
            </h1>
            <h2 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">
              STRESS-FREE MOVES, PERFECT CLEAN
            </h2>
            <p className="text-xs lg:text-sm lg:mb-6 mb-4 leading-relaxed">
              JVEC MOVERS is dedicated to providing top-notch moving and
              cleaning services. Based in Johnson City, Tennessee, we cater to
              both local and long-distance relocations, including moves to
              Virginia, North Carolina, South Carolina, Atlanta, Kentucky, and
              Washington DC. We specialize in making your moving experience as
              smooth and stress-free as possible, from packing and
              transportation to cleaning your new home or office.
            </p>
            <a
              href="#learn-more"
              className="bg-[#FF3333] hover:bg-red-400 text-white px-6 font-light text-xs py-2 rounded-xs  transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingServiceCard;
