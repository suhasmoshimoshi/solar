import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 p-4 shadow-lg">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <img
              src="/logo.jpeg" // Replace with your logo path
              alt="Guru Techno Logo"
              className="h-12 mr-3 rounded-lg"
            />
            <div>
              <span className="text-white text-2xl font-bold">GURU TECHNO INC</span>
              <br />
              <span className="text-white text-sm">ISO Certified Company</span>
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/">
              <p className="text-white hover:text-yellow-500 transition-colors duration-300">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <p className="text-white hover:text-yellow-500 transition-colors duration-300">Services</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p className="text-white hover:text-yellow-500 transition-colors duration-300">About Us</p>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <p className="text-white hover:text-yellow-500 transition-colors duration-300">Projects</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="text-white hover:text-yellow-500 transition-colors duration-300">Contact</p>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon (Optional) */}
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
