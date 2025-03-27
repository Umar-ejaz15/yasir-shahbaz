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
    <nav className="bg-zinc-950 px-4 md:px-10 py-4 flex items-center justify-between shadow-md w-full fixed top-0 z-50 text-white">
      <div className="left flex items-center">
        <img src="/logo.jpg" alt="Logo" className="h-12 w-12 rounded-full" />
      </div>
      
      <button
        className="md:hidden block text-2xl focus:outline-none"
        onClick={toggleMenu}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      <div
        className={`absolute md:static top-full left-0 w-full md:w-auto bg-zinc-900/95 md:bg-transparent
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible md:opacity-100 md:visible"} 
        transition-all duration-300 ease-in-out md:flex md:items-center md:gap-8 p-6 md:p-0 backdrop-blur-sm`}
      >
        <ul className="flex flex-col md:flex-row md:items-center md:gap-8">
          <li>
            <a
              href="#home"
              className="hover:text-green-500 transition duration-300 block py-2 md:py-0 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full hidden md:block"></div>
            <a
              href="#projects"
              className="hover:text-green-500 transition duration-300 block py-2 md:py-0 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
          </li>
        </ul>

        <div className="mt-6 md:mt-0 md:ml-8">
          <button
            onClick={opencv}
            className="px-8 cursor-pointer md:px-10 py-2.5 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition duration-300 w-full md:w-auto hover:shadow-lg hover:shadow-green-500/20"
          >
            Download CV
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;