import React from 'react';
import { FaSun, FaTools, FaProjectDiagram } from 'react-icons/fa'; // Import React Icons

const WhySolar = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
          Why Choose Solar Energy?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Reason 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-yellow-500 text-white w-16 h-16 flex items-center justify-center rounded-full mr-6">
              <FaSun className="text-3xl" /> {/* Use FaSun icon */}
            </div>
            <div className="text-center mt-3">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expertise in Solar Energy</h3>
              <p className="text-gray-600">
                With over 20 years of experience, our team specializes in delivering sustainable and reliable solar energy solutions.
              </p>
            </div>
          </div>
          {/* Reason 2 */}
          <div className="flex  flex-col items-center">
            <div className="bg-green-500 text-white w-16 h-16 flex items-center justify-center rounded-full mr-6">
              <FaTools className="text-3xl" /> {/* Use FaTools icon */}
            </div>
            <div className="text-center  mt-3">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive Services</h3>
              <p className="text-gray-600">
                We provide end-to-end services from design to installation, ensuring seamless integration of solar systems.
              </p>
            </div>
          </div>
          {/* Reason 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-500 text-white w-16 h-16 flex items-center justify-center rounded-full mr-6">
              <FaProjectDiagram className="text-3xl" /> {/* Use FaProjectDiagram icon */}
            </div>
            <div className="text-center mt-3">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Management</h3>
              <p className="text-gray-600">
                Our team has over 200 years of combined experience in managing large-scale solar projects across diverse environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySolar;
