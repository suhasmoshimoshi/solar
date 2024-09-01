import React from 'react';
import Slider from 'react-slick';

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      title: "Welcome to Guru Techno Inc",
      subtitle: "Powering the future with clean and renewable solar energy solutions.",
      image: "/1copy.png",
      extraInfo: "ISO 9001:2015 Certified Company",
    },
    {
      title: "Reliable Solar Energy Systems",
      subtitle: "From manufacturing to commissioning, we are committed to delivering cost-effective solutions across India.",
      image: "/12.jpeg",
      extraInfo: "Serving All Over India",
    },
    {
      title: "Join Our Mission",
      subtitle: "Harness the power of the sun and contribute to a greener, brighter future.",
      image: "/2copy.png",
      extraInfo: "Specialized in Solar PV Projects",
    },
  ];

  return (
    <section className="relative text-white bg-no-repeat bg-cover rounded bg-gray-300">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            {/* Background Image */}
            <div 
              style={{ backgroundImage: `url(${slide.image})` }} 
              className="bg-cover bg-center h-screen flex items-center justify-center rounded-lg"
            >
              {/* Overlay with opacity */}
              <div className="absolute inset-0 bg-black opacity-20 rounded"></div>

              {/* Content */}
              <div className="container mx-auto text-center py-[100px] relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6">
                  {slide.extraInfo}
                </p>
                <p className="text-lg md:text-xl mb-10">
                  {slide.subtitle}
                </p>
                <a
                  href="#services"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold transition-transform duration-300 transform hover:scale-110"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
