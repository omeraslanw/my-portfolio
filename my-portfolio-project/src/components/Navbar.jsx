import React from "react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="font-extrabold text-2xl tracking-tight">
        <a href="/" aria-label="Ana Sayfa">
          <img 
            src={logo} 
            alt="Site Logosu" 
            className="h-17 w-auto hover:opacity-80 transition-opacity duration-300" 
          />
        </a>
        </div>
        {/* Menü */}
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projelerim</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Yeteneklerim</a>
          </li>
          <li>
            <a href="#about" className="hover:text-teal-400 transition-colors">Hakkımda</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;