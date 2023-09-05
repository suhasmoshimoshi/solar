// src/components/Projects.js

import React from 'react';

const Projects = () => {
    const projects = [
        {
          title: 'Residential Installation',
          image: '/3.png', // Replace with actual image URL
          description: 'Solar installation for a family home, providing sustainable energy.',
        },
        {
          title: 'Commercial Retrofit',
          image: '/1.png', // Replace with actual image URL
          description: 'Upgrading a commercial building with solar panels for energy savings.',
        },
        {
          title: 'Industrial Complex',
          image: '/2.png', // Replace with actual image URL
          description: 'Implementing solar solutions for a large-scale industrial operation.',
        },
      ];
      

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-50 object-cover mb-4 rounded-md"
              />
              <h3 className="text-lg font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
