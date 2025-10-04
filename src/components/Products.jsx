import React from "react";

const Products = () => {
  const products = [
    { id: 1, title: "Health Supreme", img: "/images/product1.png" },
    { id: 2, title: "E-Commerce", img: "/images/product2.png" },
    { id: 3, title: "CRM 365", img: "/images/product3.png" },
    { id: 4, title: "Training App", img: "/images/product4.png" },
    { id: 5, title: "OSDA", img: "/images/product3.png" },
    { id: 6, title: "Fitness", img: "/images/product6.png" },
  ];

  return (
    <div className="relative w-full py-16 px-6 overflow-hidden">
      <img
        src="/images/vectorBg.png"
        alt="Background Vector"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <img
        src="/images/vectorBg1.png"
        alt="Red Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[#E01923]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-center text-white text-4xl font-bold mb-8">
          Products
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-white font-medium mb-12">
          <button className="text-lg font-bold border-b-4 border-white">
            ALL
          </button>
          <button className="hover:text-gray-200">Health Supreme</button>
          <button className="hover:text-gray-200">CRM 365</button>
          <button className="hover:text-gray-200">OSDA</button>
          <button className="hover:text-gray-200">
            Marketplace E-Commerce Platform
          </button>
          <button className="hover:text-gray-200">Sports Training App</button>
          <button className="hover:text-gray-200">Fitness</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group rounded-lg overflow-hidden shadow-lg bg-white"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-contain"
              />

              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity duration-300">
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="text-sm mt-2 px-4 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas et mi condimentum
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
