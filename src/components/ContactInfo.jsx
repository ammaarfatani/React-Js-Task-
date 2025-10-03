import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactInfo = () => {
  return (
   <div className="bg-white flex flex-col">
  <div className="relative">
    <img 
      src="./assets/contact.png" 
      alt="contact" 
      className="w-full h-[500px] object-cover" 
    />
  </div>

  <div className="bg-gray-900 text-white px-6 py-12 flex flex-col items-center text-center">
    <p className="max-w-md mb-8 text-gray-300 text-sm md:text-base">
      Please submit your inquiry and our App Development Strategist will contact you shortly
    </p>

    <div className="mb-6 flex items-center space-x-3">
      <PhoneIcon className="h-7 w-7 text-red-400" />
      <a 
        href="tel:+18008268018" 
        className="text-2xl md:text-3xl font-bold tracking-tight hover:text-red-400 transition-colors"
      >
        +1-(800) 826 8018
      </a>
    </div>

    <div className="flex items-center space-x-3">
      <EmailIcon className="h-6 w-6 text-red-400" />
      <a 
        href="mailto:info@appicoders.com" 
        className="text-gray-400 hover:text-red-400 transition-colors"
      >
        info@appicoders.com
      </a>
    </div>
  </div>
</div>

  );
};

export default ContactInfo;
