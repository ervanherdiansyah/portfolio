import React from "react";
import HeroImage from "../assets/hero1-image.png";
import cv from "../assets/CV-Ervan-Herdiansyah-English.pdf";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={HeroImage}
        alt=""
        className="mx-auto mb-8 w-68 h-60 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105 mt-12"
      />
      <h1 className="text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Ervan Herdiansyah
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        {/* <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact With Me
        </button> */}
        <div className="flex items-center justify-center">
          <a
            href={cv}
            download="CV-Ervan-Herdiansyah.pdf"
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            <div className="flex items-center justify-center gap-2">
              <FaCloudDownloadAlt className="w-6 h-6"></FaCloudDownloadAlt>
              Download Resume
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
