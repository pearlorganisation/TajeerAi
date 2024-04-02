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
    <div className={`${style.gradientBg} min-h-dvh w-full px-2 font-sans`}>
      <div className="container mx-auto py-10 px-2 text-gray-50 flex flex-col gap-2 md:gap-6">
        <div className="text-2xl font-medium">
          <p>Hello</p>
          <p>Abhishek Bahuguna</p>
        </div>
        <div className="flex flex-row flex-wrap gap-3 justify-between">
          {contentData?.map((item) => {
            return (
              <div
                class={`${style.card2} group overflow-hidden  px-6 py-4 rounded-md cursor-pointer w-full md:w-[47%] h-[300px]`}
              >
                <p className="text-3xl md:text-4xl lg:text-5xl text-wrap font-extrabold" style={{wordSpacing: "100vw", lineHeight: "60px"}}>
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
