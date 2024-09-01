import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Solar Roof Top Installation',
            image: '/project1.jpeg', // Replace with actual image URL
            description: 'Installation of solar rooftop systems for residential and commercial buildings.',
        },
        {
            title: 'Solar Water Heater Deployment',
            image: '/project2.jpeg', // Replace with actual image URL
            description: 'Deployment of solar water heaters across various residential complexes.',
        },
        {
            title: 'LED Luminaire Project',
            image: '/street.jpeg', // Replace with actual image URL
            description: 'Energy-efficient LED lighting solutions implemented in multiple facilities.',
        },
        {
            title: 'Diesel Generator Management',
            image: '/project4.jpeg', // Replace with actual image URL
            description: 'Managed the installation and maintenance of diesel generators across several districts.',
        },
        {
            title: 'Large-Scale Solar PV Plants',
            image: '/largescale.jpeg', // Replace with actual image URL
            description: 'Handled large-scale solar PV plants in remote and challenging locations.',
        },
        {
            title: 'Solar Pumping Systems',
            image: 'https://t3.ftcdn.net/jpg/06/85/31/40/360_F_685314008_OT3Qw0XCACuGrYHEs78t1bmZBrXmKcVR.jpg', // Replace with actual image URL
            description: 'Installed solar pumping systems for agricultural and industrial use.',
        },
    ];

    return (
        <section className="bg-gray-100 py-16 px-3">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Our Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[28rem] object-conatin mb-4 rounded-md"
                            />
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">
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
