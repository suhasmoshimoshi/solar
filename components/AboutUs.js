import React from 'react';
import { FaSolarPanel, FaTools, FaProjectDiagram, FaLeaf } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center animate-fadeInUp">
          About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Section 1 */}
          <div className="flex flex-col items-center text-center bg-gray-100 p-8 rounded-lg shadow-lg animate-fadeInUp">
            <FaSolarPanel className="text-6xl text-yellow-500 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Expertise in Renewable Energy</h3>
            <p className="text-lg text-gray-600">
              At Guru Techno Inc, we are a Bangalore-based energy solution provider, specializing in renewable energy and power solutions. With over 20 years of experience in the solar and power industry, we are committed to delivering high-quality, sustainable energy solutions.
            </p>
          </div>
          {/* Section 2 */}
          <div className="flex flex-col items-center text-center bg-gray-100 p-8 rounded-lg shadow-lg animate-fadeInUp animation-delay-500">
            <FaTools className="text-6xl text-blue-500 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Comprehensive Services</h3>
            <p className="text-lg text-gray-600">
              Our expertise spans the design, supply, installation, and commissioning of a wide range of solar products, including solar water heaters, LED luminaires, solar modules, and rooftop systems. We aim to meet the energy needs of domestic, commercial, and industrial clients with innovative and cost-effective solutions.
            </p>
          </div>
          {/* Section 3 */}
          <div className="flex flex-col items-center text-center bg-gray-100 p-8 rounded-lg shadow-lg animate-fadeInUp animation-delay-1000">
            <FaProjectDiagram className="text-6xl text-green-500 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Experienced Team</h3>
            <p className="text-lg text-gray-600">
              Our team has a cumulative experience of over 20 years in the solar photovoltaic life cycle, ensuring reliable and efficient energy output for our customers. We also provide owner’s engineering and project management support for large-scale solar projects, both on-grid and off-grid.
            </p>
          </div>
          {/* Section 4 */}
          <div className="flex flex-col items-center text-center bg-gray-100 p-8 rounded-lg shadow-lg animate-fadeInUp animation-delay-1500">
            <FaLeaf className="text-6xl text-green-500 mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Commitment to Sustainability</h3>
            <p className="text-lg text-gray-600">
              At Guru Techno Inc, our mission is to support the transition to green energy by offering cutting-edge solutions that not only meet but exceed the expectations of our clients. Join us in powering the future with clean, renewable energy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
