// src/components/Layout.js

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      <Header />
      <main className="p-4   flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
