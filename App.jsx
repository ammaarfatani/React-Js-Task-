
import React from 'react';
import Header from './src/components/Header.jsx';
import Hero from './src/components/Hero.jsx';
import About from './src/components/About.jsx';
import Services from './src/components/Services.jsx';
import Portfolio from './src/components/Portfolio.jsx';
import WhyChooseUs from './src/components/WhyChooseUs.jsx';
import Testimonial from './src/components/Testimonial.jsx';
import Industries from './src/components/Industries.jsx';
import Technologies from './src/components/Technologies.jsx';
import Products from './src/components/Products.jsx';
import Awards from './src/components/Awards.jsx';
import Contact from './src/components/Contact.jsx';
import Footer from './src/components/Footer.jsx';
import './index.css';



function App() {
  return (
    <div className="">
      <div 
        className="absolute top-0 left-0 w-full h-full clip-path-polygon"
      ></div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <About className="bg-[#ffffff] " />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Testimonial />
        <Industries />
        <Technologies />
        <Products />
        <Awards />
        <Contact />
        <Footer />
      </div>
      <style>{`
        .clip-path-polygon {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        @media (max-width: 1024px) {
            .clip-path-polygon {
                clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
            }
        }
        @media (max-width: 768px) {
            .clip-path-polygon {
                clip-path: polygon(0 0, 100% 0, 100% 95%, 0 100%);
            }
        }
      `}</style>
    </div>
  );
}

export default App;
