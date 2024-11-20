import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import M2L_dynamique from '/M2L_dynamique.png';
import M2L_statique from '/M2L_statique.png';
import portfolio from '/portfolio.png';
import berroyer from '/berroyer.png';
import amphitryon from '/amphitryon.png';
import biorelai from '/biorelai.png';
import echecs from '/echecs.png';
import ysport from '/ysport.png';
import Sneaky from '/sneaky.png';
import github from '/github.png';
import figma from '/figma.png';
import trello from '/trello.png';
import html from '/html.png';
import css from '/css.png';
import javaScript from '/javascript.png';
import php from '/php.png';
import react from '/react.png';
import typeScript from '/typeScript.png';
import tailwind from '/tailwind.png';
import twig from '/twig.png';
import ajax from '/ajax.png';
import jquery from '/jquery.png';
import symfony from '/symfony.png';
import android from '/android.png';
import java from '/java.png';
import boostrap from '/boostrap.png';
import springBoot from '/spring_boot.png';
import leaflet from '/leaflet.png';
import xml from '/xml.png';

interface Projet {
  titre: string;
  description: string;
  image: string;
  lien: string;
  technologies: { name: string; logo: string }[];
}

const Project: React.FC = () => {
  const projets: Projet[] = [
    {
        titre: 'Portfolio',
        description:
          'Un portfolio incluant une présentation personnelle et des sections projets, expériences, compétences, formations et contact. Il est déployé sur GitHub Pages.',
        image: portfolio,
        lien: '/projects/portfolio',
        technologies: [
            { name: 'React', logo: react },
            { name: 'TypeScript', logo: typeScript },
            { name: 'HTML', logo: html },
            { name: 'Tailwind', logo: tailwind },
            { name: 'Figma', logo: figma },
            { name: 'Github', logo: github },
        ],
    },
    {
        titre: 'Jeux d\'échecs',
        description:
        'Un jeu d\'échecs jouable en local, respectant la plupart des règles du véritable jeu. 2 pages d\'informations supplémentaires sont incluses, offrant un aperçu des règles du jeu ainsi que des statistiques.',
        image: echecs,
        lien: '/projects/echecs',
        technologies: [
            { name: 'React', logo: react },
            { name: 'TypeScript', logo: typeScript },
            { name: 'HTML', logo: html },
            { name: 'Tailwind', logo: tailwind },
            { name: 'Figma', logo: figma },
        ],
    },
    {
        titre: 'Ysport site dynamique',
        description:
        'Un site ayant pour but de rendre plus accessible la liste des complexes sportif (API gouvernementale) en Nouvelle Aquitaine à l\'aide d\'une carte interactive (Leaflet) et de filtres.',
        image: ysport,
        lien: '/projects/ysport',
        technologies: [
            { name: 'React', logo: react },
            { name: 'JavaScript', logo: javaScript },
            { name: 'HTML', logo: html },
            { name: 'Boostrap', logo: boostrap },
            { name: 'Java', logo: java },
            { name: 'SpringBoot', logo: springBoot },
            { name: 'Leaflet', logo: leaflet },
            { name: 'Figma', logo: figma },
        ],
    },
    {
        titre: 'Extranet Berroyer',
        description:
          'Un extranet permettant la création d\'offres à destination des commerciaux de l\'entité Berroyer. Agrémenté par un stepper (Smart Wizard) et un dispositif de génération PDF pour un devis.',
        image: berroyer,
        lien: '/projects/berroyer',
        technologies: [
          { name: 'JavaScript', logo: javaScript },
          { name: 'PHP', logo: php },
          { name: 'HTML', logo: html },
          { name: 'Twig', logo: twig },
          { name: 'Ajax', logo: ajax },
          { name: 'Jquery', logo: jquery },
          { name: 'Symfony', logo: symfony },
        ],
    },
    {
        titre: 'Amphitryon application mobile',
        description:
          'Une application android pour la gestion des restaurants de l\'organisation Amphitryon (chaîne de restauration fictive). Le projet se sépare en trois parties représentant chacune un rôle au sein du restaurant (serveurs, chef cuisinier, chef de salle).',
        image: amphitryon,
        lien: '/projects/amphitryon',
        technologies: [
          { name: 'Android', logo: android },
          { name: 'PHP', logo: php },
          { name: 'Java', logo: java },
          { name: 'Xml', logo: xml },
        ],
    },
    {
        titre: 'BioRelai site dynamique',
        description:
          'Un site dynamique pour une entreprise sociale et collaborative fictive qui a pour objectif la vente en circuit court de produits issus de l\'agriculture biologique. Le projet se sépare en quatre parties représentant chacune un rôle au sein du site (visiteur, producteur, client et responsable ).',
        image: biorelai,
        lien: '/projects/biorelai',
        technologies: [
          { name: 'PHP', logo: php },
          { name: 'HTML', logo: html },
          { name: 'CSS', logo: css },
          { name: 'Trello', logo: trello },
        ],
    },
    {
        titre: 'M2L site statique',
        description:
          'Un site web statique à partir de maquettes Figma mises en place pour l\'entité fictive Maison des Ligues de Lorraine.',
        image: M2L_statique,
        lien: '/projects/m2l',
        technologies: [
          { name: 'HTML', logo: html },
          { name: 'CSS', logo: css },
          { name: 'Figma', logo: figma },
          { name: 'Trello', logo: trello },
        ],
    },
    {
        titre: 'M2L site dynamique',
        description:
          'Une migration du site vitrine M2L vers un site dynamique à partir de maquettes Figma créées ultérieurement pour l\'entité fictive Maison des Ligues de Lorraine.',
        image: M2L_dynamique,
        lien: '/projects/m2l',
        technologies: [
          { name: 'PHP', logo: php },
          { name: 'HTML', logo: html },
          { name: 'CSS', logo: css },
          { name: 'Figma', logo: figma },
          { name: 'Trello', logo: trello },
        ],
    },
    {
      titre: 'Sneaky site statique',
      description:
        'Un site web statique à partir d\'une maquette Figma autour de la mode et du design',
      image: Sneaky,
      lien: '/projects/sneaky',
      technologies: [
        { name: 'HTML', logo: html },
        { name: 'CSS', logo: css },
        { name: 'JavaScript', logo: javaScript },
        { name: 'Figma', logo: figma },
        { name: 'Trello', logo: trello },
      ],
  },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projets.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projets.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-8">
        <div className="flex flex-col items-center justify-center w-full max-w-5xl">

        <h1 className="text-6xl font-extrabold text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-12">
            Mes projets
        </h1>        
        <p className="text-xl font-medium text-center text-gray-700 mb-6">
            Voici mes projets les plus importants que j'ai réalisés depuis mes débuts. N'hésitez pas à faire défiler les projets ou à cliquer pour voir le détail de chaque projet.        
        </p>        
        <div className="flex items-center justify-center max-w-5xl w-full bg-white p-16 shadow-xl rounded-lg space-y-8 mb-12 relative">
            {/* Projet */}
            <div className="relative w-full md:w-[85%] lg:w-[85%] bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-gray-700 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
              {/* Contenu du projet */}
              <div className="overflow-hidden">
                  <img
                      src={projets[currentIndex].image}
                      alt={projets[currentIndex].titre}
                      className="w-full h-auto object-cover rounded-lg"
                  />
                  <div className="p-8 text-white">
                      <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">{projets[currentIndex].titre}</h2>
                      <p className="text-gray-300 text-lg flex align-center justify-center">{projets[currentIndex].description}</p>
                      <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
                          {projets[currentIndex].technologies.map((tech, idx) => (
                              <div key={idx} className="w-20 h-20 p-2 bg-gradient-to-br from-blue-500 to-purple-600 shadow-md rounded-lg flex items-center justify-center mb-4">
                                  <img
                                      src={tech.logo}
                                      alt={tech.name}
                                      title={tech.name}
                                      className="w-full h-full object-contain"
                                  />
                              </div>
                          ))}
                      </div>
                      <Link to={projets[currentIndex].lien} className="block mt-10 bg-gradient-to-r from-blue-600 to-purple-600 text-center text-white py-3 px-6 rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-600 transition-transform transform hover:scale-105">
                          Voir le projet
                      </Link>
                  </div>
              </div>
          </div>

          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between w-full px-6">
              {/* Bouton gauche */}
              <button
                  onClick={handlePrevious}
                  className="w-16 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:from-purple-600 hover:to-blue-500 transition-transform border border-blue-500"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
              </button>

              {/* Bouton droit */}
              <button
                  onClick={handleNext}
                  className="w-16 h-16 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:from-purple-600 hover:to-blue-500 transition-transform border border-blue-500"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
              </button>
          </div>
      </div>
    </div>
</div>
  );
};

export default Project;
