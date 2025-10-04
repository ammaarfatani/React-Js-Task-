import React, { useState } from 'react';
import { PhoneIcon, Bars3Icon, XMarkIcon } from './Icons.jsx';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    "HOME", "About", "Services", "Why Choose Us", "Portfolio",
    "Products", "Testimonial", "Technologies", "Contact"
  ];

  return (
    <header className="absolute top-0 left-0 w-full py-6 px-4 sm:px-8 lg:px-16 text-white z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex items-center space-x-2">
          <img 
            src="./images/logo.png"
            alt="Appicoders Logo" 
            className="h-10 w-auto object-contain"
          />
        </div>

        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href="#" 
              className={`hover:text-gray-300 transition-colors ${link === "HOME" ? "font-bold" : ""}`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <a 
            href="tel:+18008268018" 
            className="flex items-center space-x-2 border border-white rounded-full px-4 py-2 text-sm font-medium hover:bg-white hover:text-red-600 transition-colors"
          >
            <PhoneIcon />
            <span>+1 (800) 826-8018</span>
          </a>
        </div>

        <div className="lg:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <nav className="flex flex-col space-y-4 text-sm font-medium">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href="#" 
                className={`hover:text-gray-300 transition-colors ${link === "HOME" ? "font-bold" : ""}`}
              >
                {link}
              </a>
            ))}
            <a 
              href="tel:+18008268018" 
              className="flex items-center justify-center space-x-2 border border-white rounded-full px-4 py-2 text-sm font-medium hover:bg-white hover:text-red-600 transition-colors mt-4"
            >
              <PhoneIcon />
              <span>+1 (800) 826-8018</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
