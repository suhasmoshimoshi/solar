// src/components/ContactForm.js

import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-2">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Contact Us
        </h2>
        <div className="max-w-md mx-auto">
          <form className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
