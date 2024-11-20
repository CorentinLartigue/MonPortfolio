import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 rounded-full shadow-lg object-cover"
          />
          <div className="text-xl font-bold">
            <p>Portfolio Corentin Lartigue</p>
          </div>
        </div>

        {/* Menu Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-white text-3xl focus:outline-none"
        >
          {isOpen ? '×' : '☰'}
        </button>

        {/* Full Menu */}
        <div
          className={`w-full sm:flex sm:items-center sm:w-auto ${
            isOpen ? 'block' : 'hidden'
          } mt-4 sm:mt-0`}
        >
          <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 text-lg">
            <Link
              to="/"
              className="transition transform hover:scale-105 hover:text-gray-300 duration-300"
            >
              Accueil
            </Link>
            <Link
              to="/projects"
              className="transition transform hover:scale-105 hover:text-gray-300 duration-300"
            >
              Projets
            </Link>
            <Link
              to="/experiences"
              className="transition transform hover:scale-105 hover:text-gray-300 duration-300"
            >
              Expériences Professionnelles
            </Link>
            <Link
              to="/formations"
              className="transition transform hover:scale-105 hover:text-gray-300 duration-300"
            >
              Formations
            </Link>
            <Link
              to="/competences"
              className="transition transform hover:scale-105 hover:text-gray-300 duration-300"
            >
              Compétences
            </Link>
            <Link
              to="/contact"
              className="transition transform hover:scale-105 hover:text-gray-300 duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
