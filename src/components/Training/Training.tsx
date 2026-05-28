import React from 'react';
import { formations } from '../../data/formations';

const FormationPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-8">Mes Formations</h1>

        {formations.map((formation, index) => (
        <div key={index} className="max-w-3xl w-full bg-white p-8 shadow-xl rounded-lg space-y-6 mb-8">
            <div className="flex items-center space-x-4">
            <img src={formation.logo} alt="Logo" className="w-16 h-16 rounded-md" />
            <div>
                <h2 className="text-2xl font-semibold text-gray-800">{formation.titre}</h2>
                <p className="text-sm text-gray-500">{formation.periode}</p>
                <p className="text-sm text-gray-500 italic">{formation.ecole}</p> 
            </div>
            </div>

            <p className="mt-2 text-lg text-gray-600">{formation.description}</p>

            <div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Points Positifs</h3>
            <ul className="mt-2 text-gray-600 list-disc pl-6">
                {formation.pointsPositifs.map((point, idx) => (
                <li key={idx}>{point}</li>
                ))}
            </ul>
            </div>

            <div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Points Négatifs</h3>
            <ul className="mt-2 text-gray-600 list-disc pl-6">
                {formation.pointsNegatifs.map((point, idx) => (
                <li key={idx}>{point}</li>
                ))}
            </ul>
            </div>

            <div className="mt-6 text-center">
            <a
                href={formation.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-lg font-semibold"
            >
                Voir la formation
            </a>
            </div>
        </div>
        ))}
    </div>
    );
};

export default FormationPage;