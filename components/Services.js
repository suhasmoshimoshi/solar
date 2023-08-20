// src/components/Services.js

import React from 'react';

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Our Electron Energy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Residential Solar</h3>
            <p className="text-gray-600">
              Power your home with clean and sustainable solar energy solutions.
            </p>
          </div>
          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Commercial Solar</h3>
            <p className="text-gray-600">
              Reduce your business&apos;s energy costs and carbon footprint.
            </p>
          </div>
          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Industrial Solar</h3>
            <p className="text-gray-600">
              Implement solar solutions for large-scale industrial operations.
            </p>
          </div>
          {/* Add more services here */}
        </div>
      </div>
    </section>
  );
};

export default Services;
