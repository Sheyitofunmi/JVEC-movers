import React from "react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "EXCEPTIONAL CUSTOMER SERVICE",
      description:
        "We prioritize customer satisfaction by offering friendly, professional service. Our team is dedicated to making your moving experience as stress-free as possible.",
      icon: "/globe.svg",
    },
    {
      title: "COMPETITIVE PRICING",
      description:
        "We offer competitive rates for our services without compromising on quality. Get a high-value service at a price that fits your budget.",
      icon: "/price.svg",
    },
    {
      title: "GPS TRACKING",
      description:
        "We provide real-time tracking of your belongings, giving you peace of mind during the moving process.",
      icon: "/gps.svg",
    },
    {
      title: "COMPREHENSIVE SERVICES",
      description:
        "In addition to moving, we provide cleaning services to ensure your new space is spotless and ready for you to move in.",
      icon: "/space.svg",
    },
  ];

  return (
    <section className="relative py-12 lg:py-24">
      <div className="absolute inset-0 bg-[url('/why.svg')] bg-cover bg-center h-full w-full "></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#535558] leading-10 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg sm:text-xl font-bold text-[#121212] mb-4">
              YOUR PERSONALIZED MOVING SOLUTION
            </p>
            <p className="text-[#121212] text-xs font-normal mb-8">
              Our mission is to provide stress-free, efficient, and courteous
              moving and cleaning services, ensuring seamless transitions for
              both residential and commercial clients. Explore our services and
              see how we can make your next move effortless.
            </p>
            <div>
              <button className="bg-[#FF3333] hover:bg-red-400 text-white px-6 font-light text-xs py-2 rounded-xs transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-1 gap-x-5  sm:grid-cols-2 bg-white p-6 rounded md:rounded-xl shadow-lg ">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`p-6 flex gap-4  space-y-4 ${
                  index === 0
                    ? "border-b-[1px] border-r-[1px] border-black pb-3"
                    : index === 1
                    ? "border-b-[1px] border-black mb-6"
                    : index === 2
                    ? "border-r-[1px] p-3 border-black"
                    : ""
                }`}
              >
                <img
                  src={reason.icon}
                  alt={`${reason.title} icon`}
                  className="w-10 h-10"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 text-xs">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
