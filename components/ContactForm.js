import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

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
    <section id="contact" className="bg-gray-100 py-16 px-2l">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
        <div className="max-w-md mx-auto">
          {successMessage && <p className="text-green-500">{successMessage}</p>}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
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
