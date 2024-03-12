import React from "react";

const Navbar = () => {
  return (
    <nav className=" mt-6 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-semibold">Your Brand</div>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-white px-4 py-2 border border-gray-500 rounded-lg hover:border-white transition duration-500 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-white px-4 py-2 border border-gray-500 rounded-lg hover:border-white transition duration-500 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-white px-4 py-2 border border-gray-500 rounded-lg hover:border-white transition duration-500 ease-in-out"
              >
                Our Vision
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-white px-4 py-2 border border-gray-500 rounded-lg hover:border-white transition duration-500 ease-in-out"
              >
                Activity
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-white px-4 py-2 border border-gray-500 rounded-lg hover:border-white transition duration-500 ease-in-out"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-500 hover:text-white px-4 py-2 border border-gray-500 rounded-lg hover:border-white transition duration-500 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
