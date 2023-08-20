// src/components/Layout.js

import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-800">
      <Header />
      <main className="p-4   flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
