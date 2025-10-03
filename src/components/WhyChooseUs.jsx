import React from "react";

const features = [
  {
    title: "Focused Business Approach",
    description:
      "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    icon: "/assets/focus-icon.png", 
    active: false,
  },
  {
    title: "Professional Team",
    description:
      "Our mobile development company has extremely professional & expert mobile app developers who specialize in 2D, 3D, & Isometric apps for Android, iOS, & webapp platforms.",
    icon: "/assets/team-icon.png", 
    active: true, 
  },
  {
    title: "Flexible Payment Terms",
    description:
      "Get your apps developed with most affordable price and with our flexible payment terms, you pay as your project progresses.",
    icon: "/assets/payment-icon.png",
    active: false,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          With our unique approach and cost-effective solutions, your business
          will prosper because quality is the top priority for us.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {features.map((item, index) => (
            <div
              key={index}
              className={`w-72 h-72 flex flex-col items-center justify-center rounded-full text-center px-6 shadow-md transition duration-300 ${
                item.active
                  ? "bg-white border-4 "
                  : "bg-white border border-gray-200 opacity-70"
              }`}
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-md mb-4 ${
                  item.active ? "bg-red-600" : "bg-gray-300"
                }`}
              >
                <img src={item.icon} alt={item.title} className="w-8 h-8" />
              </div>
              <h3
                className={`font-bold text-lg mb-2 ${
                  item.active ? "text-black" : "text-gray-500"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm ${
                  item.active ? "text-gray-700" : "text-gray-400"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
