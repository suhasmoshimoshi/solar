import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/contact', {
        name,
        email,
        phoneNumber,
        message,
      });

      if (response.status === 200) {
        setSuccessMessage('Message sent successfully!');
        setName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
        setErrorMessage('');
      } else {
        setErrorMessage(response.data.error || 'Something went wrong.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred while sending the message.');
      setSuccessMessage('');
    }
  };

  return (
    <section id="contact" className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-lg text-gray-600 mt-4">
            We’d love to hear from you. Please fill out the form below and we will get in touch with you shortly.
          </p>
        </div>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
          {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="mt-1 block w-full p-3 rounded-md bg-gray-100 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="mt-1 block w-full p-3 rounded-md bg-gray-100 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Your Phone Number"
                className="mt-1 block w-full p-3 rounded-md bg-gray-100 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your Message"
                className="mt-1 block w-full p-3 rounded-md bg-gray-100 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-300"
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
