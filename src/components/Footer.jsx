import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
   <footer className="bg-[#1c1e26] text-gray-300 border-t-2 border-white-600">

      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left border-b border-gray-700">
        
        <div>
          <img src="./assets/Finallogo.png" alt="Appicoders Logo" className="h-12 mx-auto md:mx-0 mb-4" />
          <h2 className="text-white text-lg font-semibold mb-3">Contact Us</h2>
          <p className="text-sm">Tel: +1 (800) 826-8018</p>
          <p className="text-sm mb-4">Email: info@appicoders.com</p>
          <div className="flex justify-center md:justify-start space-x-4 text-xl text-gray-400">
            <a href="#" className="hover:text-blue-600"><FaFacebookF /></a>
            <a href="#" className="hover:text-sky-500"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
          </div>
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-3">About</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-red-500">HOME</a></li>
            <li><a href="#" className="hover:text-red-500">ABOUT US</a></li>
            <li><a href="#" className="hover:text-red-500">CONTACT US</a></li>
          </ul> 
        </div>

        <div>
          <h2 className="text-white text-lg font-semibold mb-3">Appicoders Services</h2>
          <ul className="space-y-2 text-sm">
            <li><span className="mr-2 text-red-500">»</span> iPhone Application Development</li>
            <li><span className="mr-2 text-red-500">»</span> Android Application Development</li>
            <li><span className="mr-2 text-red-500">»</span> Enterprise App Development</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 py-4 border-t border-gray-700">
        © 2025 APPICODERS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
