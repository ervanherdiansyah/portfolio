import React from "react";
import AboutImage from "../assets/hero1-image.png";
import htmlCSSImage from "../assets/html-css.png";
import js from "../assets/js.svg";
import laravel from "../assets/laravel.svg";
import reactjs from "../assets/reactjs.svg";
import vuejs from "../assets/vuejs.svg";
import nodejs from "../assets/nodejs.svg";
import php from "../assets/php.svg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-10">About Me</h2>
        <p className="text-lg mb-8">
          Hi, I'm Ervan, a graduate of UIN SGD Bandung in Informatics
          Engineering. I am a highly motivated person and believe in my quick
          learning abilities and sense of responsibility at work. I can work
          individually or as part of a team.
        </p>
        <div className="flex flex-col items-center md:flex-col md:space-x-12 lg:flex-row xl:flex-row">
          <img
            src={AboutImage}
            alt=""
            className="w-72 h-85 rounded object-cover mb-8 md:mb-0 hidden md:inline hover:scale-105"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>
            <div>
              <p className="font-bold text-2xl">Skills</p>
              <p>
                All skills are perfected through the process of failure. Embrace
                loss as a necessary part of improvement.
              </p>
            </div>
            <div className="space-y-4 pt-6">
              <div className="grid grid-cols-2 gap-6 md:flex md:gap-6 lg:flex lg:gap-8 xl:flex xl:gap-10">
                <div className="flex flex-col items-center justify-center gap-1 hover:scale-105">
                  <img src={htmlCSSImage} alt="" className="w-10 " />
                  <label htmlFor="htmlandcss" className="inline-block">
                    HTML & CSS
                  </label>
                  {/* <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div> */}
                </div>
                <div className="flex flex-col items-center justify-center gap-1 hover:scale-105">
                  <img src={php} alt="" className="w-10" />
                  <label htmlFor="htmlandcss" className="inline-block">
                    PHP
                  </label>
                  {/* <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div> */}
                </div>
                <div className="flex flex-col items-center justify-center gap-1 hover:scale-105">
                  <img src={js} alt="" className="w-10" />
                  <label htmlFor="htmlandcss" className="inline-block">
                    JS
                  </label>
                  {/* <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div> */}
                </div>
                <div className="flex flex-col items-center justify-center gap-1 hover:scale-105">
                  <img src={laravel} alt="" className="w-10" />
                  <label htmlFor="htmlandcss" className="inline-block">
                    Laravel
                  </label>
                  {/* <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div> */}
                </div>
                <div className="flex flex-col items-center justify-center gap-1 hover:scale-105">
                  <img src={nodejs} alt="" className="w-10" />
                  <label htmlFor="htmlandcss" className="inline-block">
                    Node JS
                  </label>
                  {/* <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-7/12"
                  ></div>
                </div> */}
                </div>
                <div className="flex flex-col items-center justify-center gap-1 hover:scale-105">
                  <img src={reactjs} alt="" className="w-10" />
                  <label htmlFor="htmlandcss" className="inline-block">
                    React JS
                  </label>
                  {/* <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-7/12"
                  ></div>
                </div> */}
                </div>
                <div className="flex flex-col items-center justify-center gap-1 hover:scale-105">
                  <img src={vuejs} alt="" className="w-10" />
                  <label htmlFor="htmlandcss" className="inline-block">
                    Vue JS
                  </label>
                  {/* <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-7/12"
                  ></div>
                </div> */}
                </div>
              </div>
            </div>
            <div className="mt-12 flex gap-5 justify-center md:justify-start text-center">
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  2+
                </h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  15+
                </h3>
                <p>Projects Completed</p>
              </div>
              <div>
                {/* <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  10+
                </h3>
                <p>Happy Clients</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
