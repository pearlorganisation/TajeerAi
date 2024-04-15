import React, { useEffect, useRef } from "react";
import style from "./style.module.css";
import creativityAnimation from "../../../public/lottie/creativityAnimation.json";
import manageAnimation from "../../../public/lottie/manageAnimation.json";

import Lottie from "lottie-web";

const Dashboard = () => {
  const animation1Ref = useRef(null);
  const animation2Ref = useRef(null);

  const contentData = [
    {
      title: "Create a new business",
      desc: "",
      lottie: (
        <>
          <div ref={animation1Ref} className="absolute w-[170px] -bottom-10 -right-2 opacity-90"></div>
        </>
      ),
    },
    {
      title: "Manage your current businesses",
      desc: "",
      lottie: (
        <>
          <div ref={animation2Ref} className="absolute w-[150px] -bottom-12 -right-4 opacity-90"></div>
        </>
      ),
    },
  ];

  useEffect(() => {
    if (animation1Ref.current && contentData.length > 0) {
      Lottie.loadAnimation({
        container: animation1Ref.current,
        animationData: creativityAnimation,
      });

      Lottie.loadAnimation({
        container: animation2Ref.current,
        animationData: manageAnimation,
      });
    }
  }, []);

  return (
    <div className={`w-full px-8 h-screen ${style.scatteredForcefieldsBg}`}>
      <div className="flex flex-col gap-4 md:gap-8 md:pt-4">
        <div className="w-full text-center text-2xl md:text-4xl font-semibold">
          <p className="bg-gradient-to-r from-blue-600 via-blue-800 to-purple-800 inline-block text-transparent bg-clip-text py-2">
            Greetings Abhishek!
          </p>
        </div>
        <div className="w-full text-center font-medium text-xl text-blue-800">
          How can we help today?
        </div>
        <div className="flex justify-center ">
          <div className="flex flex-row flex-wrap justify-center gap-4 w-full sm:w-[70%]">
            {contentData?.map((item) => {
              return (
                <>
                  <div
                    className={`relative odd:text-blue-500 even:text-purple-500  bg-transparent border-[2px] odd:border-blue-500 even:border-purple-500 odd:hover:bg-blue-500 even:hover:bg-purple-500  hover:text-white  px-6 py-4 rounded-md cursor-pointer w-full md:w-[40%] h-[300px] shadow-sm odd:shadow-blue-600 even:shadow-[#4b2453] transition duration-300 text-left hover:scale-105`}
                  >
                  
                    <div className=" w-full h-full">
                      <p
                        className=" text-5xl text-wrap font-extrabold"
                        style={{ wordSpacing: "100vw", lineHeight: "60px" }}
                      >
                        {" "}
                        {item?.title}
                      </p>

                      <p className="text-lg">{item?.desc}</p>
                    
                    </div>
                      {item?.lottie}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
