import React from 'react';

const CallToAction = () => {
  return (
    <>
    <section id="get-quote" className="bg-blue-800 py-16 text-white">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Get a Quote
      </h2>
      <p className="text-lg md:text-xl mb-8">
        Interested in solar energy? Contact us today to receive a free quote tailored to your needs.
      </p>
      <a
        href="#contact" // Replace with the ID of the Contact section
        className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
      >
        Contact Us for a Quote
      </a>
    </div>
  </section>
    </>
  );
};

export default CallToAction;
