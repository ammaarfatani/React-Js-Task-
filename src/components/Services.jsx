import React from 'react';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import MemoryIcon from '@mui/icons-material/Memory';
import LanguageIcon from '@mui/icons-material/Language';
import LockIcon from '@mui/icons-material/Lock';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const serviceItems = [
  {
    icon: <SmartphoneIcon fontSize="large" />,
    title: 'Custom Mobile Applications',
    description: 'iOS, Android and Wearable Apps'
  },
  {
    icon: <MemoryIcon fontSize="large" />,
    title: 'Artificial Intelligence',
    description: 'Innovation AI & ML Solutions'
  },
  {
    icon: <LanguageIcon fontSize="large" />,
    title: 'Custom Web Development',
    description: 'Robust Web, Progressive Web Apps'
  },
  {
    icon: <LockIcon fontSize="large" />,
    title: 'Blockchain Development',
    description: 'Custom Blockchain Solutions'
  },
  {
    icon: <ViewInArIcon fontSize="large" />,
    title: 'Augmented Reality',
    description: 'Futuristic AR Apps'
  },
  {
    icon: <RocketLaunchIcon fontSize="large" />,
    title: 'MVP Development',
    description: 'For Startups & Entrepreneurs'
  }
];

const ServiceItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 bg-white/20 border-2 border-white/30 text-white rounded-full p-3">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#E01923] transform -skew-y-3 z-0"></div>

      <div className="relative container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-white/90 mb-12">Get to know about what we're good at.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {serviceItems.map((item) => (
                <ServiceItem key={item.title} {...item} />
              ))}
            </div>
          </div>

          <div className="relative h-64 lg:h-auto">
            <img
              src="/images/vector.png"
              alt="Laptop with code and UI elements"
              className="absolute -top-24 lg:-top-32 right-0  max-w-lg transform lg:scale-125"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
