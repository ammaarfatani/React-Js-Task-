import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Tag = ({ children }) => (
  <span className="bg-white text-black text-xs font-semibold mr-2 px-3 py-1 rounded-md shadow">
    {children}
  </span>
);

const Portfolio = () => {
  return (
    <section className="relative min-h-screen flex items-center  text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="./assets/portfolioBg.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-12 z-10 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl">
          <div className="mb-6 flex space-x-2">
            <Tag>iOS Development</Tag>
            <Tag>Android Development</Tag>
            <Tag>UI/UX Design</Tag>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Caviar - Order Food Delivery
          </h2>

          <p className="text-gray-200 text-lg mb-8 leading-relaxed">
            Get Food delivered from curated lists of local restaurants right at
            your fingertips with Caviar. Enjoy quality dining at home and make
            any night a special occasion.
          </p>

          <div className="flex items-center space-x-4 mb-8">
            <img
              src="./assets/appstore.png"
              alt="App Store"
              className="h-12 cursor-pointer"
            />
            <img
              src="./assets/googleplay.png"
              alt="Google Play"
              className="h-12 cursor-pointer"
            />
          </div>

           <button className="bg-gradient-to-b from-red-700 to-red-900 text-white font-bold py-3 px-8 rounded-md shadow-md hover:from-red-800 hover:to-black transition-all">
            VIEW CASE STUDY
          </button>
        </div>

        <div className="relative flex justify-center pr-20 lg:justify-end items-center">
          <div className="flex-col p-6 rounded-2xl shadow-2xl flex space-x-8">
            <img
              src="./assets/image16.png"
              alt="App Screenshot 1"
              className="rounded-xl w-40 md:w-48 lg:w-56 transform shadow-lg"
            />
            <img
              src="./assets/image17.png"
              alt="App Screenshot 2"
              className="rounded-xl w-40 md:w-48 lg:w-56 transform shadow-lg"
            />
            <img
              src="./assets/image18.png"
              alt="App Screenshot 2"
              className="rounded-xl w-40 md:w-48 lg:w-56 transform shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-20">
        <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition">
          <KeyboardArrowUpIcon />
        </button>
        <button className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center hover:bg-white/10 transition">
          <KeyboardArrowDownIcon />
        </button>
      </div>

      {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-64 md:w-72 lg:w-80 opacity-80">
        <div className="bg-white/10 p-4 rounded-2xl shadow-2xl">
          <img
            src="./assets/image18.png"
            alt="Next Project Preview"
            className="rounded-xl"
          />
        </div>
      </div> */}
    </section>
  );
};

export default Portfolio;
