import React, { useState } from "react";
import { IoIosThunderstorm } from "react-icons/io";
const Service = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      icon: "https://cdn-icons-png.flaticon.com/128/4660/4660815.png",
      title: "Bamboo Toothbrushes",
      description:
        "Biodegradable bamboo toothbrushes with charcoal-infused bristles for sustainable oral hygiene.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/4343/4343265.png",
      title: "Reusable Shopping Bags",
      description:
        "Durable, eco-friendly shopping bags made from materials like jute or recycled plastic to reduce single-use plastic consumption.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/7212/7212568.png",
      title: "Organic Cleaning Supplies",
      description:
        "Non-toxic, organic cleaning products that are safe for the environment and the home.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/3654/3654738.png",
      title: "Eco-Friendly Packaging",
      description:
        "Sustainable packaging solutions for customers to use in their daily lives, reducing plastic waste.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/3993/3993156.png",
      title: "Compostable Tableware",
      description:
        "Biodegradable plates, cups, and utensils made from natural materials like palm leaves or sugarcane.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/3849/3849664.png",
      title: "Sustainable Home Decor",
      description:
        "Home decor items made from recycled or upcycled materials, promoting a circular economy.",
    },
    // Add more services here if needed
  ];

  return (
    <div className="md:max-w-4xl w-full mx-auto px-3 md:p-0">
      <div className="text-2xl md:text-4xl font-sans bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent">Service / Product Ideas</div>
      <div className="md:max-w-4xl w-full border mx-auto mt-10 rounded-lg shadow-lg">

        {services.map((service, index) => (
          <div
            key={index}
            className={`relative p-5 border-2 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${activeIndex === index
              ? "border-2 border-blue-500/70 ring-4 ring-blue-500/30 bg-blue-100"
              : "border border-transparent"
              }`}
            onClick={() => setActiveIndex(index)}
            style={{ marginTop: index === 0 ? 0 : "1rem" }} // Add gap between divs
          >
            {/* Placeholder icon */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 h-10  rounded-full ml-4">
              <img src={service.icon} alt="" />
            </div>

            <div className="ml-16">
              {" "}
              <h1 className="text-lg md:text-xl font-semibold mb-2">{service.title}</h1>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Service;
