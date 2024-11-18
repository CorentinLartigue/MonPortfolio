import React from 'react';
import { Link } from 'react-router-dom';

const ReturnButton: React.FC = () => {
  return (
    <div className="absolute top-4 left-4 z-10">
      <Link to="/" className="flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:scale-105 transition duration-300">
        <span className="mr-2">←</span> Retour
      </Link>
    </div>
  );
};

export default ReturnButton;
