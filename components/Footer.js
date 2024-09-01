// src/components/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4 mt-8">
      <div className="container mx-auto text-center text-white">
        <p>&copy; {new Date().getFullYear()} Guru Techno Inc. All rights reserved.</p>
        <p>ISO 9001:2015 Certified</p>
        <p>Guru Techno Inc</p>
        <p>No 40, “TAPOVANA” 34th Main, 7th Block, BHCS Layout, Banagirinagar, BSK 3rd Stage, Bangalore - 560 085</p>
        <p>Contact: 9845130850 / 9449895850</p>
        <p>Email: gurutechnoinc@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
