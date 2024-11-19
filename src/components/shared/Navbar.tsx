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
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center space-x-4">
          <img 
            src={logo}
            alt="Logo" 
            className="w-16 h-16 rounded-full shadow-lg object-cover"
          />
          <div className="text-2xl font-bold ml-2">
            <p>Portfolio Corentin Lartigue</p>
          </div>
        </div>

        {/* Menu desktop */}
        <div className="hidden sm:flex space-x-8 text-lg">
          <Link to="/" className="transition transform hover:scale-105 hover:text-gray-300 duration-300">Accueil</Link>
          <Link to="/projects" className="transition transform hover:scale-105 hover:text-gray-300 duration-300">Projets</Link>
          <Link to="/experiences" className="transition transform hover:scale-105 hover:text-gray-300 duration-300">Expériences Professionnelles</Link>
          <Link to="/formations" className="transition transform hover:scale-105 hover:text-gray-300 duration-300">Formations</Link>
          <Link to="/competences" className="transition transform hover:scale-105 hover:text-gray-300 duration-300">Compétences</Link>
          <Link to="/contact" className="transition transform hover:scale-105 hover:text-gray-300 duration-300">Contact</Link>
        </div>

        {/* Menu hamburger pour mobile */}
        <div className="sm:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="text-white text-3xl focus:outline-none"
          >
            {isOpen ? '×' : '☰'}
          </button>
        </div>
      </div>

      {/* Menu mobile, affichage conditionnel */}
      <div 
        className={`sm:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800 p-4 mt-4 rounded-lg`}
      >
        <div className="flex flex-col items-center space-y-4">
          <Link to="/" className="text-white text-lg hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Accueil</Link>
          <Link to="/projects" className="text-white text-lg hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Projets</Link>
          <Link to="/experiences" className="text-white text-lg hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Expériences Professionnelles</Link>
          <Link to="/formations" className="text-white text-lg hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Formation</Link>
          <Link to="/competences" className="text-white text-lg hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Compétences</Link>
          <Link to="/contact" className="text-white text-lg hover:text-gray-300 transition duration-300" onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
