import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-semibold">Your Brand</div>
        {/* Hamburger menu icon */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Full navbar on large screens */}
        <div className="hidden lg:flex lg:items-center lg:space-x-4">
          <a
            href="/home"
            className="text-gray-500 hover:text-pink px-4 py-2 border border-gray-500 rounded-lg hover:border-white transition duration-500 ease-in-out"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-gray-500 hover:text-pink px-4 py-2 border border-gray-500 rounded-lg hover:border-white transition duration-500 ease-in-out"
          >
            About
          </a>
          <a
            href="/services"
            className="text-gray-500 hover:text-pink px-4 py-2 border border-gray-500 rounded-lg hover:border-white transition duration-500 ease-in-out"
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-gray-500 hover:text-pink px-4 py-2 border border-gray-500 rounded-lg hover:border-white transition duration-500 ease-in-out"
          >
            Contact
          </a>
        </div>
      </div>
      {/* Hamburger menu on small screens */}
      {isMenuOpen && (
        <div className="block lg:hidden">
          <div className="flex flex-col items-center mt-4">
            <a href="/home" className="text-white">
              Home
            </a>
            <a href="/about" className="text-white">
              About
            </a>
            <a href="/services" className="text-white">
              Services
            </a>
            <a href="/contact" className="text-white">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
