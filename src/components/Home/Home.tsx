import React from 'react';
import { Link } from 'react-router-dom';
import photoProfil from 'src/assets/photo_profil.jpg';

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
          Je suis <span className="text-blue-500 font-semibold">ravi de vous voir ici</span>. 
          Depuis mes débuts dans le domaine du développement, mon 
          <span className="text-green-500 font-semibold"> implication </span> et ma 
          <span className="text-purple-500 font-semibold"> motivation </span> 
          m'ont permis de prendre part à des projets donnant lieu à des expériences 
          <span className="italic"> exceptionnelles</span>.
        </p>
        <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
          Tout ceci m'a permis de comprendre que je souhaitais me spécialiser dans le 
          <span className="text-blue-500 font-semibold"> développement web</span>, notamment côté 
          <span className="text-green-500 font-semibold"> Front-end</span>, tout en gardant une porte ouverte pour le 
          <span className="text-purple-500 font-semibold"> Back-end en PHP</span>. 
          Mon profil s’oriente naturellement vers des aspects comme le <span className="underline decoration-green-500 decoration-2">design</span> et le <span className="underline decoration-purple-500 decoration-2">maquettage de projets</span>, 
          où je prends plaisir à transformer des idées en solutions visuelles et fonctionnelles.
        </p>
        <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
          Prenez le temps de découvrir mon portfolio. Vous y trouverez une <span className="underline decoration-blue-500 decoration-2">
          collection de mes travaux</span>. 
          N'hésitez pas à me <Link to="/contact" className="text-blue-500 hover:underline">contacter</Link> pour plus d'informations.
        </p>
      </div>
    </div>
  );
};

export default Home;
