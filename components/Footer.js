// src/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 py-4 mt-8">
      <div className="container mx-auto text-center text-white">
        <p>&copy; {new Date().getFullYear()} Electron Energy. All rights reserved.</p>
        <p>Contact us at: info@solarservices.com</p>
      </div>
    </footer>
  );
};

export default Footer;
