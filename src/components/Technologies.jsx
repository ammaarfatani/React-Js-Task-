import React from "react";

const Technologies = () => {
  return (
    <div
      className="w-full relative py-16 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/backgroundCloud.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/90"></div>

      <div className="relative z-10">
        <h2 className="text-center text-white text-4xl font-bold mb-12">
          Technologies
        </h2>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 flex-1">
            <h3 className="text-2xl font-bold text-black mb-4">
              Cloud Solutions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              nisl libero, sollicitudin vel tempor sed, ullamcorper quis diam. Ut
              eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis sapien,
              rutrum ut tempus quis, elementum eu du.
            </p>

            <div className="flex items-center gap-2">
              <span className="w-10 h-1 bg-red-600 rounded-full"></span>
              <span className="w-6 h-1 bg-red-300 rounded-full"></span>
              <span className="w-6 h-1 bg-red-200 rounded-full"></span>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg flex-1">
            <img
              src="/images/cloud.png"
              alt="Cloud Solutions"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
