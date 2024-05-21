import React, { useState } from "react";
import { IoIosThunderstorm } from "react-icons/io";
const Service = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      icon: <IoIosThunderstorm size={25} />,
      title: "Bamboo Toothbrushes",
      description:
        "Biodegradable bamboo toothbrushes with charcoal-infused bristles for sustainable oral hygiene.",
    },
    {
      icon: <IoIosThunderstorm size={25} />,
      title: "Bamboo Toothbrushes",
      description:
        "Biodegradable bamboo toothbrushes with charcoal-infused bristles for sustainable oral hygiene.",
    },
    {
      icon: <IoIosThunderstorm size={25} />,
      title: "Bamboo Toothbrushes",
      description:
        "Biodegradable bamboo toothbrushes with charcoal-infused bristles for sustainable oral hygiene.",
    },
    {
      icon: <IoIosThunderstorm size={25} />,
      title: "Bamboo Toothbrushes",
      description:
        "Biodegradable bamboo toothbrushes with charcoal-infused bristles for sustainable oral hygiene.",
    },
    {
      icon: <IoIosThunderstorm size={25} />,
      title: "Bamboo Toothbrushes",
      description:
        "Biodegradable bamboo toothbrushes with charcoal-infused bristles for sustainable oral hygiene.",
    },
    {
      icon: <IoIosThunderstorm size={25} />,
      title: "Bamboo Toothbrushes",
      description:
        "Biodegradable bamboo toothbrushes with charcoal-infused bristles for sustainable oral hygiene.",
    },
    // Add more services here if needed
  ];

  return (
    <div className="max-w-4xl border mx-auto mt-10 rounded-lg shadow-lg">
      {services.map((service, index) => (
        <div
          key={index}
          className={`relative p-5 cursor-pointer transition-all duration-300 ease-in-out ${
            activeIndex === index
              ? "border-2 border-blue-500 bg-blue-100"
              : "border border-transparent"
          }`}
          onClick={() => setActiveIndex(index)}
          style={{ marginTop: index === 0 ? 0 : "1rem" }} // Add gap between divs
        >
          {/* Placeholder icon */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10  rounded-full ml-4">
            {service.icon}
          </div>

          <div className="ml-16">
            {" "}
            <h1 className="text-xl font-semibold mb-2">{service.title}</h1>
            <p className="text-gray-700">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
