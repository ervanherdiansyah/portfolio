import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <FiMenu
        src="/menu.png"
        alt=""
        className="cursor-pointer w-8 h-8"
        onClick={() => setOpen((prev) => !prev)}
      ></FiMenu>
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <a href="#home" onClick={() => setOpen((prev) => !prev)} className="">
            Home
          </a>
          <a
            href="#about"
            onClick={() => setOpen((prev) => !prev)}
            className=""
          >
            About Me
          </a>
          <a
            href="#project"
            onClick={() => setOpen((prev) => !prev)}
            className=""
          >
            Projects
          </a>
        </div>
      )}
    </div>
  );
};

export default Menu;
