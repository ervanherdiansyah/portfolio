import React from "react";
import { FaEnvelope, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Coloboration = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col h-60 items-center justify-center px-14 md:flex-row md:justify-between md:h-32 rounded bg-gray-800 borde gap-2">
          <div className="text-[22px] md:text-[18px] lg:text-[29px] text-center font-bold">
            Tertarik bekerja dengan saya?
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row gap-3">
            <div className="flex gap-1">
              <div className="bg-blue-400 px-2 py-2">
                <a
                  href="https://www.linkedin.com/in/ervanherdiansyah/"
                  target="_blank"
                >
                  <FaLinkedin className="inline-block text-white w-6 h-6 "></FaLinkedin>
                </a>
              </div>
              <div className="bg-green-500 px-2 py-2">
                <a href="https://wa.me/6285722840518" target="_blank">
                  <FaWhatsapp className="inline-block text-white w-6 h-6"></FaWhatsapp>
                </a>
              </div>
            </div>
            <div className="bg-green-600 px-4 py-2 flex items-center justify-center gap-2">
              <FaEnvelope className="inline-block text-white"></FaEnvelope>
              <a
                href="mailto:ervanherdiansyah10@gmail.com"
                className="font-semibold"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coloboration;
