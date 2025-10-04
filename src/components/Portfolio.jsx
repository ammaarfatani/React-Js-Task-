import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Tag = ({ children }) => (
  <span className="bg-white/90 text-black text-xs font-semibold mr-2 px-3 py-1 rounded-md shadow">
    {children}
  </span>
);

const Portfolio = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden text-white">
      {/* Blurred Background */}
      <div className="absolute inset-0">
        <img
          src="./images/portfolioBg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="max-w-xl">
          <div className="mb-6 flex flex-wrap gap-2">
            <Tag >iOS Development</Tag>
            <Tag>Android Development</Tag>
            <Tag>UI/UX Design</Tag>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Caviar - Order Food Delivery
          </h2>

          <p className="text-gray-200 text-lg mb-8 leading-relaxed">
            Get Food delivered from curated lists of local restaurants right at
            your fingertips with Caviar. Enjoy quality dining at home and make
            any night a special occasion.
          </p>

          <div className="flex items-center space-x-4 mb-8">
            <img
              src="./images/appstore.png"
              alt="App Store"
              className="h-12 cursor-pointer"
            />
            <img
              src="./images/googleplay.png"
              alt="Google Play"
              className="h-12 cursor-pointer"
            />
          </div>

          <button className="bg-gradient-to-b from-red-700 to-red-900 text-white font-bold py-3 px-8 rounded-md shadow-md hover:from-red-800 hover:to-black transition-all">
            VIEW CASE STUDY
          </button>
        </div>

        {/* Right Side - Phone Mockups */}
        <div className="relative flex justify-center pr-20 lg:justify-end items-center">
          <div className=" flex-col p-6 rounded-2xl shadow-2xl flex space-x-0">
            <img
              src="./images/image16.png"
              alt="App Screenshot 1"
              className=" rounded-xl w-40 md:w-48 lg:w-56 transform shadow-lg"
            />
            <img
              src="./images/image17.png"
              alt="App Screenshot 2"
              className="rounded-xl w-40 md:w-48 lg:w-56 transform shadow-lg"
            />
            <img
              src="./images/image18.png"
              alt="App Screenshot 2"
              className="rounded-xl w-40 md:w-48 lg:w-56 transform shadow-lg"
               style={{
                transform: "perspective(1000px) rotateY(25deg) rotateX(10deg)",
                boxShadow:
                  "0px 20px 40px rgba(0,0,0,0.3), inset 0px 0px 8px rgba(255,255,255,0.1)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-20">
        <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition">
          <KeyboardArrowUpIcon />
        </button>
        <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition">
          <KeyboardArrowDownIcon />
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
