import React from "react";
import style from "./style.module.css";

const Dashboard = () => {
  const contentData = [
    {
      title: "Create new business",
      desc: "",
    },
    {
      title: "Manage current businesses",
      desc: "",
    },
  ];

  return (
    <div className="min-h-dvh w-full px-8 text-gray-50 flex flex-col gap-8 md:gap-14 md:pt-4">
      <div className="w-full text-center text-2xl md:text-4xl font-semibold">
        <p>Greetings!</p>
        <p>Abhishek Bahuguna</p>
      </div>
      <div className="flex justify-center ">
      <div className="flex flex-row flex-wrap justify-between gap-3 w-full sm:w-[70%]">
        {contentData?.map((item) => {
          return (
            <div
              class={`${style.card2} group overflow-hidden  px-6 py-4 rounded-md cursor-pointer w-full md:w-[49%] h-[300px] shadow-lg shadow-[#19142c]`}
            >
              <p
                className="text-5xl text-wrap font-extrabold"
                style={{ wordSpacing: "100vw", lineHeight: "60px" }}
              >
                {" "}
                {item?.title}
              </p>
              <p className="text-lg">{item?.desc}</p>
              <div class="relative z-10 flex flex-col justify-between before:absolute before:-left-4 before:-top-16 before:h-28 before:w-28 before:rounded-full before:border-8 before:bg-transparent before:opacity-10 before:blur-none before:duration-700 group-hover:before:left-48  group-hover:before:scale-125 group-hover:before:blur"></div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
