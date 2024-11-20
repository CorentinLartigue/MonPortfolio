import React from 'react';
import echecs_regles from '/echecs_regles.png';
import echecs_jeux from '/echecs_jeux.png';


const EchecsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-xl rounded-lg space-y-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center">Jeu d'Échecs - Mode Local</h1>
        <p className="text-gray-600 text-center">
          Découvrez un jeu d'échecs interactif avec une interface épurée, conçu pour une expérience en local fidèle aux règles classiques du jeu.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800">À propos du projet</h2>
          <p className="mt-2 text-gray-600">
            Ce projet propose un jeu d'échecs 100% jouable localement, respectant les règles traditionnelles et permettant une interaction fluide et agréable. Il inclut également des pages supplémentaires pour les règles et statistiques du jeu, vous offrant une expérience complète.
          </p>
          <img
                    src= {echecs_jeux}
                    alt="echecs_regles"
                    className="rounded-lg shadow-md"
                />
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Fonctionnalités principales</h2>
            <ul className="mt-2 text-gray-600 list-disc pl-6">
                <li><strong>Jouez en local :</strong> Affrontez un autre joueur sur le même appareil, sans nécessité d'une connexion internet.</li>
                <li><strong>Respect des règles des échecs :</strong> Tous les mouvements des pièces, l'échec et mat, ainsi que la promotion des pions sont intégrés.</li>
                <li><strong>Interface conviviale :</strong> Un design simple et réactif conçu avec Tailwind CSS pour une navigation intuitive.</li>
                <li><strong>Pages d'infos supplémentaires :</strong> Consultez des informations détaillées sur les règles du jeu et des statistiques pertinentes sur les parties jouées.</li>
                <img
                    src= {echecs_regles}
                    alt="echecs_regles"
                    className="rounded-lg shadow-md"
                />
            </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Technologies utilisées</h2>
          <ul className="mt-2 text-gray-600 list-disc pl-6">
            <li><strong>React.js : </strong>Permet de créer une interface dynamique et réactive, idéale pour une application de jeu.</li>
            <li><strong>TypeScript : </strong>Améliore la robustesse du code avec un système de types statiques.</li>
            <li><strong>Vite : </strong>Un bundler rapide pour un développement optimal et une exécution fluide.</li>
            <li><strong>Tailwind CSS : </strong>Un framework CSS utilitaire qui offre une personnalisation rapide et des designs modernes.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Défis rencontrés</h2>
          <ul className="mt-2 text-gray-600 list-disc pl-6">
            <li>
              <strong>Application des règles des échecs :</strong> Intégration des règles complexes du jeu, telles que les conditions de victoire et les mouvements spéciaux des pièces.
            </li>
            <li>
              <strong>Création d'une interface fluide :</strong> Conception d'une interface facile à utiliser tout en respectant les contraintes de jouabilité et d'accessibilité.
            </li>
            <li>
              <strong>Optimisation des performances :</strong> Assurer que le jeu soit rapide et réactif, même avec une logique de jeu complexe.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Ce que j'ai appris</h2>
          <p className="mt-2 text-gray-600">
            Ce projet m'a permis de perfectionner mes compétences en React et TypeScript, ainsi que de mieux comprendre la logique derrière les jeux de stratégie comme les échecs. La gestion des règles et des interactions entre les pièces a constitué un défi enrichissant, tout comme la création d'une interface à la fois simple et fonctionnelle.
          </p>
        </section>

        <section className="text-center">
          <a
            href="https://github.com/CorentinLartigue/Echecs_react"
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

export default EchecsPage;
