import React from "react";

const industries = [
  {
    icon: "/assets/medical.png",
    title: "Medical & Pharma Services",
    desc: "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
  },
  {
    icon: "/assets/training.png",
    title: "Training & Fitness",
    desc: "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
    active: true, 
  },
  {
    icon: "/assets/fintech.png",
    title: "Fintech",
    desc: "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
  },
  {
    icon: "/assets/health.png",
    title: "Health & Fitness",
    desc: "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
  },
  {
    icon: "/assets/business.png",
    title: "Business & Services",
    desc: "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
  },
  {
    icon: "/assets/cleaning.png",
    title: "Cleaning Services",
    desc: "We research, plan, and execute - and these qualities make Appicoders stand out from the crowd. We put the needs of our clients ahead of us.",
  },
];

const Industries = () => {
  return (
    <section className="py-16 bg-[#F5F7FA]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Industries
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 ${
                item.active
                  ? "border-b-4 border-[#E01923]" 
                  : "hover:border-b-4 hover:border-[#E01923]"
              }`}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
