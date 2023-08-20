// src/components/CallToAction.js

import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-blue-800 py-16 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Contact us today to discuss your solar energy needs and receive a free consultation.
        </p>
        <a
          href="#contact" // Replace with the ID of the Contact section
          className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
