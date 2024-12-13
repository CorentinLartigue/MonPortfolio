import React from 'react';
import { Link } from 'react-router-dom';
import photoProfil from '/photo_profil.jpg';

const Home: React.FC = () => {
  return (
    <div className="Home flex-grow flex items-center justify-center bg-gray-100 min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="text-center p-4">
        <img 
          src={photoProfil}
          alt="Photo de profil" 
          className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full mx-auto shadow-lg object-cover transform transition duration-300 hover:scale-105"
          />
        
        <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold text-gray-800">
            Bienvenue sur mon portfolio !
        </h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
          Je suis ravi de vous voir ici. Depuis mes débuts dans le domaine du développement, mon implication et ma 
          <span className="font-semibold"> motivation </span> 
          m'ont permis de prendre part à des projets donnant lieu à des expériences exceptionnelles.
        </p>
        <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
          Tout ceci m'a permis de comprendre que je souhaitais me spécialiser dans le 
          <span className="font-semibold"> développement web</span>, notamment côté 
          <span className="font-bold"> Front-end </span>, avec des technologies comme React et Angular tout en gardant une porte ouverte pour le 
          <span className="font-semibold"> Back-end </span>avec Nest JS ou Java SpringBoot ou Symfony. 
          Mon profil s’oriente naturellement vers des aspects comme le design et le maquettage de projets, 
          où je prends plaisir à transformer des idées en solutions visuelles et fonctionnelles.
        </p>
        <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
          Prenez le temps de découvrir mon portfolio. Vous y trouverez une collection de mes travaux. 
          N'hésitez pas à me <Link to="/contact" className="text-blue-500 hover:underline">contacter</Link> pour plus d'informations.
        </p>
      </div>
    </div>
  );
};

export default Home;
