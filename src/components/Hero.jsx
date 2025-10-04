import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "./Icons.jsx";

const Hero = () => {
  return (
    <main className="relative overflow-hidden text-white">

       <div
        className="absolute -z-10"
        style={{
          width: "200vw",
          height: "120vh",
          left: "-55vw",
          top: "-50vh",
          background: "#E81626",
          boxShadow: "0px 20px 105px rgba(0,0,0,0.1)",
          borderRadius: "0 0 250px 0",
          transform: "rotate(11.82deg)",
        }}
      ></div>

<div
  className="absolute -z-10"
  style={{
    width: "3572.18px",
    height: "2096.3px",
    left: "-1319px",
    top: "-1888px",
    background: "#E81626",
    boxShadow: "0px 20px 105px rgba(0,0,0,0.1)",
    borderRadius: "0 0 250px 0",
    transform: "rotate(-11.82deg)",
  }}
></div>


      <div className="absolute inset-0 bg-[#20222D] -z-30"></div>

    
     

      <div className="relative container mx-auto px-6 lg:px-16 pt-20 pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <img
              src="./src/assets/mockups.png"
              alt="Mobile Mockup"
              className="max-w-[400px] md:max-w-[480px] lg:max-w-[500px] drop-shadow-2xl relative z-10"
            />
          </div>

          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Leading the Way in{" "}
              <span className="text-[#fff]">App Development Innovation</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200">
              We build Android & iOS Mobile Apps that cater all your business
              needs and take it on the next level.
            </p>

            <div className="mt-10 flex justify-center lg:justify-start">
              <button className="relative bg-gradient-to-b from-red-700 to-red-900 text-white font-semibold py-3 px-8 rounded-md shadow-lg hover:from-red-800 hover:to-black transition transform hover:scale-105">
  <span className="relative">GET A FREE QUOTE</span>
</button>

            </div>
          </div>
        </div>

        <div className="flex justify-end items-center gap-4 mt-12 lg:-mt-16 lg:mr-16 relative z-10">
          <button className="bg-white text-gray-800 rounded-full h-10 w-10 flex items-center justify-center shadow-lg hover:bg-gray-200 transition">
            <ArrowLeftIcon />
          </button>
          <button className="bg-white text-gray-800 rounded-full h-10 w-10 flex items-center justify-center shadow-lg hover:bg-gray-200 transition">
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
