import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white px-8 md:px-16 lg:px-24 z-50">
      <div className="flex justify-between items-center md:hidden">
        <Link to="/">
          <div className="text-2xl font-bold">Notvann</div>
        </Link>
        <Menu />
      </div>
      <div className="container py-2 hidden md:flex justify-between md:justify-between items-center">
        <Link to="/">
          <div className="text-2xl font-bold">Notvann</div>
        </Link>
        <div className="space-x-6">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#project" className="hover:text-gray-400">
            Projects
          </a>
        </div>
        <a
          href="https://wa.me/6285722840518"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
