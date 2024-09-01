import React from 'react';

const Services = () => {
  return (
    <section id="services" className="bg-gray-300 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
          Our Solar Energy Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 hover:text-yellow-600">
              Residential Solar
            </h3>
            <p className="text-gray-600 hover:text-gray-800">
              Power your home with clean and sustainable solar energy solutions.
            </p>
            <div className="mt-4">
              <span className="inline-block w-12 h-1 bg-yellow-600"></span>
            </div>
          </div>
          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 hover:text-blue-600">
              Commercial Solar
            </h3>
            <p className="text-gray-600 hover:text-gray-800">
              Reduce your business&apos;s energy costs and carbon footprint with our solar solutions.
            </p>
            <div className="mt-4">
              <span className="inline-block w-12 h-1 bg-blue-600"></span>
            </div>
          </div>
          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 hover:text-green-600">
              Industrial Solar
            </h3>
            <p className="text-gray-600 hover:text-gray-800">
              Implement large-scale industrial solar solutions for maximum efficiency.
            </p>
            <div className="mt-4">
              <span className="inline-block w-12 h-1 bg-green-600"></span>
            </div>
          </div>
          {/* Service 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 hover:text-red-600">
              Solar Water Heaters
            </h3>
            <p className="text-gray-600 hover:text-gray-800">
              Efficient solar water heaters for residential, commercial, and industrial use.
            </p>
            <div className="mt-4">
              <span className="inline-block w-12 h-1 bg-red-600"></span>
            </div>
          </div>
          {/* Service 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 hover:text-indigo-600">
              LED Luminaires
            </h3>
            <p className="text-gray-600 hover:text-gray-800">
              Energy-efficient LED lighting solutions for various applications.
            </p>
            <div className="mt-4">
              <span className="inline-block w-12 h-1 bg-indigo-600"></span>
            </div>
          </div>
          {/* Service 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-2 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 hover:text-purple-600">
              Diesel Generators
            </h3>
            <p className="text-gray-600 hover:text-gray-800">
              Reliable diesel generator solutions for backup power needs.
            </p>
            <div className="mt-4">
              <span className="inline-block w-12 h-1 bg-purple-600"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
