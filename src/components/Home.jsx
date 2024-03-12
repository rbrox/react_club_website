import React from "react";
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Big logo cut in a circle */}
      <div className="w-32 h-32 rounded-full overflow-hidden">
        <img
          src="/logo.png" // Replace with the path to your logo image
          alt="Logo"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Centered text */}
      <div className="text-center mt-4">
        <h1 className="text-3xl">Hey, We are</h1>
        <h1 className="py-2 text-5xl font-extrabold">Idea Incubator MGIT</h1>
        <h1 className="">Aspiring Student Entrepreneurs</h1>
      </div>
      {/* Circular buttons with links */}
      <div className="flex mt-8 py-10">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2  text-white p-4 rounded-full flex items-center justify-center"
        >
          <FaGithub className="text-2xl" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2  text-white p-4 rounded-full flex items-center justify-center"
        >
          <FaInstagram className="text-2xl" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2  text-white p-4 rounded-full flex items-center justify-center"
        >
          <FaFacebook className="text-2xl" />
        </a>
      </div>

      <div className="max-w-xs rounded overflow-hidden shadow-lg flex">
        <div className="w-2/5">
          <img
            className="w-full h-full object-cover"
            src="https://source.unsplash.com/random/400x300" // Unsplash random image URL
            alt="Test Image"
          />
        </div>
        <div className="w-3/5 px-6 py-10">
          <div className="font-extrabold text-4xl mb-2">About Us</div>
          <p className="text-white text-base">
            Idea Incubator MGIT, is a student club focused on fostering
            Leadership in innovation and research amongst MGITans.Found on 17th
            April 2019 by the Principal, MGIT as its de facto head. Since then
            it runs with motivation to develop roots of entrepreneurship and
            innovation in students through nurturing skills like finding and
            solving real world problem, creative thinking, networking,
            management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
