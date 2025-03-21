import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const opencv = () => {
    window.open("/My_Resume.pdf", "_blank");
  };

  return (
    <nav className="px-4 md:px-10 py-4 flex items-center justify-between shadow-md w-full fixed top-0 z-50 text-white">
          <div className="left">
            <img src="/logo.jpg" alt="Logo" className="h-20 w-20 rounded-full" />
          </div>
      {/* Hamburger Menu */}
      <button
        className="md:hidden block text-2xl focus:outline-none"
        onClick={toggleMenu}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Navigation Links */}
      <div
        className={`absolute md:static top-full left-0 w-full md:w-auto transition-all duration-300 ease-in-out 
        ${
          isOpen
            ? "bg-zinc-900 opacity-100 visible"
            : "opacity-0 invisible md:opacity-100 md:visible"
        } 
        md:bg-transparent md:flex md:items-center md:gap-6 p-4 md:p-0`}
      >
        <ul className="flex flex-col md:flex-row md:items-center md:gap-6">
          <li>
            <a
              href="#home"
              className="hover:text-green-600 transition duration-300 block py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            <a
              href="#projects"
              className="hover:text-green-600 transition duration-300 block py-2 md:py-0"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
        </ul>

        {/* CV Button */}
        <div className="mt-4 md:mt-0">
          <button
            onClick={opencv}
            className="px-8 cursor-pointer md:px-12 py-3 rounded-xl bg-green-500 text-white font-bold hover:bg-green-600 transition duration-300 w-full md:w-auto"
          >
            CV
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;