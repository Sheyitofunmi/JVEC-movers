import React from "react";

const Services = () => {
  const services = [
    {
      title: "HOMEOWNERS",
      description:
        "Whether moving across town or to a new state, we help homeowners transition smoothly.",
      image: "/house.svg",
    },
    {
      title: "RENTERS",
      description:
        "We assist renters with their moves, ensuring they leave their rental properties clean and in good condition.",
      image: "/house-things.svg",
    },
    {
      title: "BUSINESSES",
      description:
        "Our commercial moving services help businesses relocate with minimal disruption.",
      image: "/office.svg",
    },
    {
      title: "PROPERTY MANAGERS",
      description:
        "We partner with property managers to offer seamless moving services for their tenants.",
      image: "/house-things.svg",
    },
  ];

  // Duplicate the services array to create an infinite scroll effect
  const scrollingServices = [...services, ...services, ...services];

  return (
    <section className="bg-gray-50 py-12 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Clients We Serve</h2>
        <p className="text-xl text-gray-600">Our services cater to</p>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-content">
          {scrollingServices.map((service, index) => (
            <div
              key={index}
              className="service-card bg-[#F4F4F4] p-6 m-4 rounded-lg shadow-md text-center flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-lg min-w-[250px]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-semibold text-[#121212] mb-2">
                {service.title}
              </h3>
              <p className="text-[#121212] text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
