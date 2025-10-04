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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Awards and Recognitions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {awards.map((award) => (
            <div
              key={award.id}
              className={`relative group flex justify-center items-center overflow-hidden mx-auto transition-all duration-500 w-full aspect-square sm:aspect-[4/3] ${
                award.shape === "circle" ? "rounded-full" : "rounded-lg"
              }`}
            >
              <img
                src={award.img}
                alt={award.alt}
                className="w-3/4 h-3/4 object-contain transition-transform duration-500 group-hover:scale-110"
              />

              <div
                className={`absolute inset-0 ${
                  award.shape === "circle" ? "rounded-full" : "rounded-lg"
                } bg-black/80 text-white opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 flex flex-col items-center justify-center text-center px-3 transition-all duration-500`}
              >
                 <img
                src="/images/awardBg.png"
                alt={award.alt}
                className="w-20 h-20 object-contain mb-4 transition-all duration-500 group-hover:scale-110"
              />
                <h3 className="text-sm font-bold text-lg ">{award.title}</h3>
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
