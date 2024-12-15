import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import M2L_dynamique from '/M2L_dynamique.webp';
import M2L_statique from '/M2L_statique.webp';
import portfolio from '/portfolio.webp';
import berroyer from '/berroyer.webp';
import amphitryon from '/amphitryon.webp';
import biorelai from '/biorelai.webp';
import echecs from '/echecs.webp';
import ysport from '/ysport.webp';
import Sneaky from '/sneaky.webp';
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
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);

  const imagesToPreload = projets.map((projet) => projet.image);

  useEffect(() => {
    let loadedImages = 0;
    const totalImages = imagesToPreload.length;

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImages += 1;
        if (loadedImages === totalImages) {
          setIsImagesLoaded(true);
        }
      };
    });
  }, [imagesToPreload]);

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
    <div className="min-h-screen flex items-center justify-center py-8 px-4 bg-gray-100">
      <div className="flex flex-col items-center justify-center w-full max-w-md sm:max-w-2xl md:max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-8">
          Mes projets
        </h1>
        <p className="text-base sm:text-lg font-medium text-center text-gray-700 mb-6 px-4">
          Voici mes projets les plus importants que j'ai réalisés depuis mes débuts. N'hésitez pas à faire défiler les projets ou à cliquer pour voir le détail de chaque projet.
        </p>
        <div className="relative bg-white p-6 sm:p-10 shadow-lg rounded-lg w-full">
          <div className="relative w-full">
            {!isImagesLoaded ? (
              <div className="w-full h-64 sm:h-80 bg-gray-300 rounded-lg animate-pulse"></div>
            ) : (
              <img
                src={projets[currentIndex].image}
                alt={projets[currentIndex].titre}
                className="w-full h-64 sm:h-80 object-cover rounded-lg"
              />
            )}
            <div className="p-4 sm:p-6 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                {projets[currentIndex].titre}
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                {projets[currentIndex].description}
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-4 mt-6">
                {projets[currentIndex].technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="w-12 h-12 sm:w-16 sm:h-16 p-1 sm:p-2 bg-gradient-to-br from-blue-500 to-purple-600 shadow-md rounded-lg flex items-center justify-center"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      title={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              <Link
                to={projets[currentIndex].lien}
                className="block mt-6 sm:mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-600 transition-transform transform hover:scale-105"
              >
                Voir le projet
              </Link>
            </div>
          </div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center space-x-4">
            <button
              onClick={handlePrevious}
              className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform border border-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-6 h-6 sm:w-8 sm:h-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center space-x-4">
            <button
              onClick={handleNext}
              className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform border border-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-6 h-6 sm:w-8 sm:h-8"
              >
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