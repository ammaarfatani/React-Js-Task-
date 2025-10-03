import React from 'react';

const About = () => {
  return (
    <section className="container mx-auto px-6 py-20 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-xl">
          <p className="text-red-600 font-bold text-lg mb-2">Appicoders</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            #1. Mobile App & Web Development Company in USA
          </h1>
        </div>
        <div>
          <p className="text-gray-600 leading-relaxed mb-8">
            Welcome to Appicoders, your trusted partner for expert mobile app and web development. With over 10+ years of experience, we specialize in designing, developing, and marketing cutting-edge solutions for all major mobile platforms, including Android, iOS, and Windows.
          </p>
          <button className="bg-gradient-to-b from-red-700 to-red-900 text-white font-bold py-3 px-8 rounded-md shadow-md hover:from-red-800 hover:to-black transition-all">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
