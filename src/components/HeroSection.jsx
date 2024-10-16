import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  const content = "Professional and affordable. Fully insured.";

  return (
    <section className="flex flex-col md:flex-row">
      <div className="md:w-[50%] w-full bg-[#282B2E] p-6  md:pl-7 text-white flex flex-col justify-center items-center md:items-start ">
        <h1 className="lg:text-7xl  md:text-6xl text-4xl text-center md:text-start font-bold leading-20  pb-4 ">
          <span className="text-[#FF3333]">Move </span> with Confidence:
        </h1>
        <h3 className="md:text-4xl text-2xl font-normal  mb-2">
          Smooth Moves Start Here
        </h3>
        <p className="text-lg font-light py-5 ">
          <Typewriter
            words={[content]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
        <button className="bg-[#FF3333] mt-6 hover:bg-red-400 text-white px-6 font-light text-xs py-2 rounded-xs  transition duration-300">
          Get Started
        </button>
      </div>

      <div className="md:w-[50%] w-full">
        <img
          src="/hero.svg"
          alt="hero-background"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
