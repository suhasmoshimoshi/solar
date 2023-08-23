import React, { useState } from 'react';
 // Update the path to your firebase.js file

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Push the form data to Firebase
    firebase.database().ref('contacts').push({
      name,
      email,
      message,
    });

    // Clear form inputs after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="bg-gray-100 py-16 px-2l">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h2>
        <div className="max-w-md mx-auto">
          <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="p-3 rounded-md bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
