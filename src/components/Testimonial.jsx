import React from "react";

const Testimonial = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/bg-office.png" 
          alt="Office background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div
            className="bg-[#E01923] rounded-r-[10px] p-12 text-white
                       shadow-[0px_20px_150px_rgba(0,0,0,0.1)]
                       [box-shadow:inset_0px_20px_50px_rgba(0,0,0,0.1)]"
          >
            <p className="uppercase text-sm tracking-wider mb-2 opacity-90">
              Client Testimonials
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              What our clients <br /> are Saying.
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 relative ml-0 md:ml-8">
            <div className="flex items-center mb-6">
              <img
                src="/assets/client.png" 
                alt="Client"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-900">
                  Scarlett Lawrence
                </h3>
                <div className="w-20 h-[2px] bg-red-600 mt-1"></div>
              </div>
            </div>

            <div className="absolute top-8 left-8 w-7 h-7 flex items-center justify-center rounded-full bg-red-600 text-white font-bold">
              <span className="text-base">“</span>
            </div>

            <p className="text-gray-700 leading-relaxed">
              Thank you Team Appinging you guys have a great understanding of
              what's current, and get things done very quickly compared to
              others. Reliable communication and qualitative suggestions on
              useful functionality during the planning stage made for a final
              product that surpassed initial expectations. Their Project
              management is amazing, Tight deadlines were reliably met without
              issue. Our Strong recommendations if you’re looking for quality
              work.
            </p>

            <div className="flex justify-end mt-6 space-x-2">
              <span className="w-6 h-1 bg-red-600 rounded"></span>
              <span className="w-6 h-1 bg-gray-300 rounded"></span>
              <span className="w-6 h-1 bg-gray-300 rounded"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
