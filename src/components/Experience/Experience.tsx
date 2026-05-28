import React from 'react';
import { Link } from 'react-router-dom';
import { experiences } from '../../data/experiences';

const Experience: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-8">
        Mes Expériences
      </h1>

      {experiences.map((experience, index) => (
        <div
          key={index}
          className="max-w-3xl w-full bg-white p-8 shadow-xl rounded-lg space-y-6 mb-8"
        >
          <div className="flex items-center space-x-4">
            <img
              src={experience.logo}
              alt={experience.entreprise}
              className="w-16 h-16 rounded-md"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {experience.titre}
              </h2>
              <p className="text-sm text-gray-500">{experience.entreprise}</p>
              <p className="text-sm text-gray-500">{experience.periode}</p>
            </div>
          </div>

          <p className="mt-2 text-lg text-gray-600">{experience.description}</p>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Missions</h3>
            <ul className="mt-2 text-gray-600 list-disc pl-6">
              {experience.missions.map((mission, idx) => (
                <li key={idx}>{mission}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Mon Avis
            </h3>
            <p className="mt-2 text-gray-600">{experience.avis}</p>
          </div>

          {experience.lienProjet && (
            <div className="mt-6 text-center">
              <Link to={experience.lienProjet} className="text-blue-600 hover:text-blue-800 text-lg font-semibold">
                Voir le projet
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Experience;
