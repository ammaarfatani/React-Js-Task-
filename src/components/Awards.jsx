import React from "react";

const Awards = () => {
  const awards = [
    {
      id: 1,
      img: "/images/award1.png",
      alt: "ITFirms Award",
      title: "Top Mobile App Development Company",
      desc: "Recognized by ITFirms in 2019",
      shape: "circle", 
    },
    {
      id: 2,
      img: "/images/award2.png",
      alt: "Top Mobile App Developers 2020",
      title: "Top Mobile App Developers 2020",
      desc: "Top Developers mentioned us in their top app companies in the USA list.",
      shape: "circle", 
    },
    {
      id: 3,
      img: "/images/award3.png",
      alt: "Clutch Alberta 2019",
      title: "Clutch Alberta 2019",
      desc: "Top React Native Developers in Alberta, 2019",
      shape: "circle", 
    },
    {
      id: 4,
      img: "/images/award4.png",
      alt: "Appfutura Award",
      title: "AppFutura",
      desc: "Listed among the top mobile app development companies",
      shape: "circle", 
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Awards and Recognitions
        </h2>

      
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          {awards.map((award) => (
            <div
              key={award.id}
              className={`relative group flex justify-center items-center overflow-hidden w-80 h-40 mx-auto transition-all duration-500 ${
                award.shape === "circle" ? "rounded-full" : "rounded-lg"
              }`}
            >
           
              <img
                src={award.img}
                alt={award.alt}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />

              <div
                className={`absolute inset-0 ${
                  award.shape === "circle" ? "rounded-full" : "rounded-lg"
                } bg-black/80 text-white opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-110 flex flex-col items-center justify-center text-center px-4 transition-all duration-500`}
              >
                <h3 className="text-sm font-bold">{award.title}</h3>
                <p className="text-xs mt-1">{award.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
