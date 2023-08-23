import React from 'react';
import { LocalFlorist, AttachMoney, FlashOn } from '@mui/icons-material'; // Import Material-UI icons

const WhySolar = () => {
  return (
    <section className="bg-white py-16 px-2">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Why Choose Solar Energy?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Reason 1 */}
          <div className="flex items-center">
            <div className="bg-yellow-500 text-white w-12 h-12 flex items-center justify-center rounded-full mr-4">
              <LocalFlorist fontSize="inherit" /> {/* Use LocalFlorist icon */}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Clean Energy</h3>
              <p className="text-gray-600">
                Solar energy is renewable and produces no greenhouse gas emissions.
              </p>
            </div>
          </div>
          {/* Reason 2 */}
          <div className="flex items-center">
            <div className="bg-yellow-500 text-white w-12 h-12 flex items-center justify-center rounded-full mr-4">
              <AttachMoney fontSize="inherit" /> {/* Use AttachMoney icon */}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Cost Savings</h3>
              <p className="text-gray-600">
                Solar panels can significantly lower your electricity bills over time.
              </p>
            </div>
          </div>
          {/* Reason 3 */}
          <div className="flex items-center">
            <div className="bg-yellow-500 text-white w-12 h-12 flex items-center justify-center rounded-full mr-4">
              <FlashOn fontSize="inherit" /> {/* Use FlashOn icon */}
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Energy Independence</h3>
              <p className="text-gray-600">
                Generate your own power and reduce dependence on external sources.
              </p>
            </div>
          </div>
          {/* Add more reasons here */}
        </div>
      </div>
    </section>
  );
};

export default WhySolar;
