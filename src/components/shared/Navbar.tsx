import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/public/logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo et Titre */}
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
        
        {/* Menu */}
        <div className="hidden sm:flex space-x-8 text-lg">
          <Link to="/" className="hover:text-gray-200">Accueil</Link>
          <Link to="/projects" className="hover:text-gray-200">Projets</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </div>

        {/* Menu hamburger pour mobile */}
        <div className="sm:hidden flex items-center">
          <button className="text-white">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
