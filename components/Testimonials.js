// src/components/Testimonials.js

import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
          name: 'John Doe',
          title: 'Homeowner',
          text: 'Electron Energy helped me make the switch to solar energy with their efficient installation and friendly team.',
        },
        {
          name: 'Jane Smith',
          title: 'Business Owner',
          text: 'The team at Electron Energy exceeded my expectations in delivering a reliable and cost-effective solar solution for my business.',
        },
        {
          name: 'Michael Johnson',
          title: 'Environmental Advocate',
          text: 'Im impressed by the commitment of Electron Energy to promoting sustainable energy solutions and reducing carbon emissions.',
        },
      ];
      
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-600 mb-4">
                {testimonial.text}
              </p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-600">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
