import React from 'react';

const CallToAction = () => {
  return (
    <section id="get-quote" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center px-6 lg:px-0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Invest in Reliable, Renewable Energy Solutions
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Guru Techno Inc brings over 20 years of industry expertise to deliver cutting-edge solar energy solutions. Our team of professionals is committed to designing, installing, and maintaining solar projects that are tailored to your specific needs. Let us help you transition to a more sustainable future.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105"
        >
          Request Your Free Quote
        </a>
        <p className="text-sm text-gray-500 mt-8">
          Trusted by hundreds of clients in India for solar water heaters, LED luminaries, solar modules, and more.
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
