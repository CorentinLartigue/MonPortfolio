import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link to="/">Mon Portfolio</Link>
          </div>
          <div className="space-x-4">
            <Link to="/" className="hover:text-gray-200">Accueil</Link>
            <Link to="/evenements" className="hover:text-gray-200">Evenements</Link>
            <Link to="/artistes" className="hover:text-gray-200">Artistes</Link>
            <Link to="/boutique" className="hover:text-gray-200">Boutique</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
