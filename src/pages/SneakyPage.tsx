import React from 'react';
import maquette_sneaky from '/maquette_sneaky.png';


const SneakyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white p-8 shadow-xl rounded-lg space-y-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center">
          Sneaky
        </h1>

        <section className="space-y-4">
          <p className="text-gray-600">
            Sneaky est un site statique dédié aux tendances de la mode et du design. Il met en avant des collections inspirantes et offre une expérience utilisateur enrichie grâce à des animations dynamiques.
          </p>
          <p className="text-gray-600">
            Ce projet est une vitrine moderne
             qui reflète les dernières tendances de mode et de design tout en offrant une interface fluide et élégante.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Fonctionnalités</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <strong>Affichage des tendances actuelles :</strong> Une présentation visuelle attrayante des dernières tendances en mode et design.
            </li>
            <li>
              <strong>Section Inspirations :</strong> Une galerie d'images permettant d'explorer des idées de designs et styles uniques.
            </li>
            <li>
              <strong>Interactivité dynamique :</strong> Des animations et interactions ajoutées avec JavaScript pour captiver les visiteurs.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Technologies Utilisées</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              <strong>HTML :</strong> Pour structurer le contenu du site.
            </li>
            <li>
              <strong>CSS :</strong> Pour la mise en page et les styles visuels.
            </li>
            <li>
              <strong>JavaScript :</strong> Pour ajouter des animations et de l'interactivité.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Mission Réalisée</h2>
          <img
            src= {maquette_sneaky}
            alt="maquette_sneaky"
            className="rounded-lg shadow-md"
          />
          <p className="text-gray-600">
            Dans le cadre de ce projet, ma mission consistait à coder le site vitrine en HTML, CSS, et JavaScript, en respectant fidèlement une maquette créée sous Figma. J'ai dû m'auto-former sur l'utilisation de cet outil et proposer des améliorations à la maquette originale.
          </p>
          <p className="text-gray-600">
            Le site devait permettre aux utilisateurs de :
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Consulter les produits vestimentaires à la mode proposés par l'entreprise.</li>
            <li>Découvrir l'histoire et les valeurs de l'entreprise.</li>
            <li>Visualiser des publicités et inspirations pour développer l'image de marque.</li>
          </ul>
        </section>

        <section className="text-center">
          <a
            href="https://github.com/CorentinLartigue/Sneaky_site_statique"
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

export default SneakyPage;
