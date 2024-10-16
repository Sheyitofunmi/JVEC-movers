import React from "react";

const FreeQuoteSection = () => {
  return (
    <section className="bg-black md:gap-x-20 text-white p-8 md:p-16 flex items-center md:justify-between flex-col md:flex-row justify-center ">
      <div className="md:w-2/3">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
          READY FOR A STRESSLESS MOVE? GET YOUR FREE QUOTE
        </h2>
        <p className="text-sm md:text-base lg:text-lg">
          Fill out our online booking form to schedule your move with JVEC
          MOVERS. Provide details about your move, and we’ll get back to you
          with a customized plan and quote.
        </p>
      </div>
      <div className="md:w-1/3 md:flex justify-between items-center mt-6 lg:mt-0 border-b-2 border-[#FF3333]">
        <a
          href="#"
          className="inline-flex mb-5 items-center text-red-500 font-semibold text-2lg md:text-4xl lg:text-6xl hover:none  "
        >
          Free Quote
        </a>

        <span className="ml-2 mb-5 text-3xl md:text-5xl text-red-500">
          &rarr;
        </span>
      </div>
    </section>
  );
};

export default FreeQuoteSection;
