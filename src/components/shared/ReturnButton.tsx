import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

interface ReturnButtonProps {
  fallback?: string;
  label?: string;
}

const ReturnButton: React.FC<ReturnButtonProps> = ({ fallback = '/projects', label = 'Retour aux projets' }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    // Si l'utilisateur a un historique de navigation interne, on retourne en arrière
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      // Sinon, on le redirige vers le fallback de secours
      navigate(fallback);
    }
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors mb-6 group cursor-pointer border-none bg-transparent p-0 focus:outline-none"
    >
      <FaArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
      {label}
    </button>
  );
};

export default ReturnButton;
