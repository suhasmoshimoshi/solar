// src/components/Header.js

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-500 py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <p className="text-white text-2xl font-bold">Electron Energy</p>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <p className="text-white">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/services">
              {/* <p className="text-white">Services</p> */}
            </Link>
          </li>
          {/* Add more navigation links here */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
