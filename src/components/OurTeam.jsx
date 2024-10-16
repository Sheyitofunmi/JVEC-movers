import React from "react";

const teamSkills = [
  {
    name: "Moving Techniques",
    image: "/moving-techniques.svg",
  },
  {
    name: "Safety Protocols",
    image: "/safety-protocols.svg",
  },
  {
    name: "Customer Service Standards",
    image: "/customer-service.svg",
  },
];

const OurTeam = () => {
  return (
    <section
      id="team"
      className="bg-cover bg-center text-white "
      style={{
        backgroundImage: "url('/teamBg.png')",
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-black bg-opacity-90 p-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-red-600">OUR TEAM</h2>
          <p className="mt-4 text-lg text-white">
            HIGHLY TRAINED PROFESSIONALS IN
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamSkills.map((skill, index) => (
            <div key={index} className=" text-black  p-6 text-center">
              <img
                src={skill.image}
                alt={skill.name}
                className="mx-auto mb-4"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 mx-auto max-w-4xl text-white">
          <p className="text-md">
            Our team comprises highly trained professionals who can handle moves
            of all sizes, from small apartments to large commercial relocations.
            Led by our founder and CEO,{" "}
            <span className="text-[#FF3333]">Joshua</span>, we are committed to
            excellence in every move. Our staff undergoes rigorous training in
            moving techniques, safety protocols, and customer service standards
            to ensure your belongings are handled with the utmost care and
            professionalism.
          </p>

          <button className="bg-[#FF3333] mt-6 hover:bg-red-400 text-white px-6 font-light text-xs py-2 rounded-xs  transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
