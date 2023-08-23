// src/components/EducationalContent.js
import Link from 'next/link'

import React from 'react';

const EducationalContent = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 px-2">
          Learn About Solar Energy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Article 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              The Benefits of Solar Power
            </h3>
            <p className="text-gray-600">
              Discover how solar energy can lower your energy bills and reduce your carbon footprint.
            </p>
            <Link
              href="/benefits-of-solar-power" // Replace with actual article URL
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              Read More
            </Link>
          </div>
          {/* Article 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Solar Panel Installation Guide
            </h3>
            <p className="text-gray-600">
              Get step-by-step instructions on how to install solar panels for your home or business.
            </p>
            <Link
              href="/solar-panel-installation-guide" // Replace with actual article URL
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              Read More
            </Link>
          </div>
          {/* Add more articles here */}
        </div>
      </div>
    </section>
  );
};

export default EducationalContent;
