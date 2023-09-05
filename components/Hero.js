// src/components/Hero.js

import React from 'react';

const Hero = () => {
  const sectionStyle = {
    backgroundImage: `url(${'./solarbanner.png'})`,
  };
  return (
    <section className=" text-white py-20  bg-no-repeat bg-cover rounded   "  style={sectionStyle}>
      <div className="container mx-auto text-center py-[100px]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Electron Energy
        </h1>
        <p className="text-lg md:text-xl mb-10">
          Powering the future with clean and renewable solar energy solutions.
        </p>
        <a
          href="#services" // Replace with the ID of the Services section
          className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
