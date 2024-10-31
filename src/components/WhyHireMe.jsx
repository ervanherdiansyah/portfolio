import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { HiOutlineChatAlt, HiUserGroup } from "react-icons/hi";

const WhyHireMe = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Why Hire Me?</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-4">
              <HiOutlineChatAlt className="w-16 h-16 text-green-600"></HiOutlineChatAlt>
              <div className="text-white font-bold text-lg">Komunikatif</div>
              <div className="text-gray-300 text-md">
                Saya mengkomunikasikan semuanya, termasuk dapat
                mengkomunikasikan ide dengan baik.
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <HiUserGroup className="w-16 h-16 text-green-600"></HiUserGroup>
              <div className="text-white font-bold  text-lg">Kolaboratif</div>
              <div className="text-gray-300 text-md">
                Saya dapat bekerja dalam tim, berkolaborasi dengan baik dengan
                developer, UI/UX, SEO Specialist, dan saya menyukai feedback.
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <GoGraph className="w-16 h-16 text-green-600"></GoGraph>
              <div className="text-white font-bold  text-lg">Kreatif</div>
              <div className="text-gray-300 text-md">
                Saya dapat melahirkan inovasi baru termasuk mengkombinasikan
                sesuatu yang ada menjadi berbeda dan menarik.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe;
