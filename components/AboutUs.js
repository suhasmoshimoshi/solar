// src/components/AboutUs.js

import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-2">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          At Electron Energy, we are dedicated to providing sustainable solar energy solutions for homes, businesses, and industries.
        </p>
        <p className="text-lg md:text-xl text-gray-600">
          Our experienced team of professionals is committed to helping you harness the power of the sun and reduce your carbon footprint.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
