import React from "react";
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Home = () => {
  return (
    <section class="bg-black text-white">
      <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="bg-gradient-to-r from-yellow-300 via-red-500 to-red-900 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Hey we are
            <span class="sm:block">Idea Incubator Mgit </span>
          </h1>

          <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Aspiring student Enterpreneaurs
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <a
              class="block w-full rounded border border-red-600 bg-red-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="#"
            >
              Join Us
            </a>

            <a
              class="block w-full rounded border border-transparent px-12 py-3 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Idea Validate
            </a>
        
          </div>
          <div class = "w-40 grid grid-cols-3 gap-2">
          <a href = "https://www.instagram.com/idea.mgit/">
          <p class="mx-40 ml-40 mt-7  w-40 sm:text-xl/relaxed">
        <RiInstagramFill className="insta-icon"/>
          </p>
          </a>
          <a href = "https://www.linkedin.com/company/idea-incubator-mgit-r-d/?originalSubdomain=in">
          <p class="mx-40  mt-7 w-40 sm:text-xl/relaxed">
          <FaLinkedin />
          </p>
          </a>
          <p class="mx-40  mt-7 w-40 sm:text-xl/relaxed">
          <FaFacebookSquare />
          </p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Home;
