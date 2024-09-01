import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Gagan',
      title: 'Client',
      text: 'Electron Energy helped me make the switch to solar energy with their efficient installation and friendly team.',
    },
    {
      name: 'Smaran',
      title: 'Client',
      text: 'The team at Electron Energy exceeded my expectations in delivering a reliable and cost-effective solar solution for my business.',
    },
    {
      name: 'Sumanth',
      title: 'Environmental Advocate',
      text: 'I\'m impressed by the commitment of Electron Energy to promoting sustainable energy solutions and reducing carbon emissions.',
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500"
            >
              <p className="text-lg italic text-gray-700 mb-6">
              &quot;{testimonial.text}&quot;
              </p>
              <div className="text-left">
                <p className="text-xl font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
