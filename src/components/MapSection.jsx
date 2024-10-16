import React from "react";

const MapSection = () => {
  return (
    <section className="flex flex-col justify-center items-center text- px-4 py-12 mx-auto">
      <div>
        <h2 className="text-3xl font-extrabold py-4 text-black mb-5">
          Geographic Coverage
        </h2>
      </div>
      <div className="px-2">
        <img src="/map.png" alt="map" className="w-full" />
      </div>
    </section>
  );
};

export default MapSection;
