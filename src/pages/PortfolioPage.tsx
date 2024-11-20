import React from 'react';

const PortfolioPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-xl rounded-lg space-y-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center">Mon Portfolio Interactif</h1>
        <p className="text-gray-600 text-center">
          Une vitrine professionnelle pour présenter mes compétences, mes projets, et mon expérience, développée avec des technologies modernes.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Objectif du Projet</h2>
          <p className="mt-2 text-gray-600">
            Ce projet avait pour but de créer un portfolio personnalisé qui reflète mes compétences techniques et mon sens du design. J'ai souhaité concevoir une plateforme élégante, fluide et responsive pour mettre en valeur mes travaux de manière professionnelle.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Fonctionnalités Clés</h2>
          <ul className="mt-2 text-gray-600 list-disc pl-6">
            <li><strong>Exploration des projets :</strong> Parcourez une série de projets et découvrez en détail chaque réalisation que j'ai accomplie. Chaque projet est accompagné de descriptions, de visuels et des technologies utilisées.</li>
            <li><strong>Navigation fluide :</strong> Utilisez une navigation simple et intuitive grâce à un système de menus clair. Accédez facilement à toutes les sections du portfolio.</li>
            <li><strong>Vitrine interactive :</strong> Profitez d'une interface interactive avec des animations au survol des éléments pour rendre l'expérience encore plus immersive.</li>
            <li><strong>Section de contact :</strong> Prenez facilement contact avec moi grâce à la page de contact et téléchargez mon cv</li>
            <li><strong>Responsive Design :</strong> Le site est entièrement adapté aux mobiles et tablettes, garantissant une expérience fluide peu importe l'appareil utilisé.</li>
        </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Technologies Utilisées</h2>
          <ul className="mt-2 text-gray-600 list-disc pl-6">
            <li><strong>HTML/CSS : </strong>Structure et design de base.</li>
            <li><strong>React.js : </strong>Framework pour créer une interface utilisateur dynamique.</li>
            <li><strong>React Router DOM : </strong>Bibliothèque pour créer une application monopage sans nécessiter de rechargement de la page dans le navigateur.</li>
            <li><strong>Tailwind CSS : </strong>Pour des styles modernes et adaptables.</li>
            <li><strong>Github : </strong>Hébergement et déploiement continu.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Défis Relevés</h2>
          <ul className="mt-2 text-gray-600 list-disc pl-6">
            <li>
              <strong>Optimisation des performances :</strong> Réduction des temps de chargement grâce à des techniques comme le lazy-loading et la compression des fichiers.
            </li>
            <li>
              <strong>Navigation intuitive :</strong> Prototypage sur Figma et tests utilisateurs pour concevoir une expérience utilisateur fluide.
            </li>
            <li>
              <strong>Design fidèle :</strong> Respect rigoureux de la maquette initiale, tout en apportant des améliorations visuelles.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Ce que j'ai appris</h2>
          <p className="mt-2 text-gray-600">
            Ce projet m'a permis de renforcer mes compétences en front-end, d'explorer des outils comme Tailwind CSS, et de mieux comprendre les attentes des utilisateurs. J'ai également appris à maintenir un code clair et modulaire pour faciliter la maintenance et l'évolution du site.
          </p>
        </section>

        <section className="text-center">
          <a
            href="https://github.com/CorentinLartigue/MonPortfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition"
          >
            Voir le projet sur GitHub
          </a>
        </section>
      </div>
    </div>
  );
};

export default PortfolioPage;
