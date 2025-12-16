import React from 'react';
import ysport_carte from '/ysport_carte.png';
import ysport_filtres from '/ysport_filtres.png';
import ysport_petit_cluster from '/ysport_petit_cluster.png';
import ysport_grand_cluster from '/ysport_grand_cluster.png';
import ysport_complexe from '/ysport_complexe.png';

const YsportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white p-8 shadow-xl rounded-lg space-y-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center">
          YSport - Cartographie des Complexes Sportifs en Nouvelle-Aquitaine
        </h1>

        <section className="space-y-4">
          <p className="text-gray-600">
            Le projet **YSport** a pour objectif de rendre plus accessible la liste des complexes sportifs en
            Nouvelle-Aquitaine. Grâce à une carte interactive et des filtres puissants, ce site permet aux utilisateurs
            de trouver facilement les complexes adaptés à leurs besoins.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Technologies utilisées</h2>
          <ul className="mt-2 text-gray-600 list-disc pl-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
            <li>React.js</li>
            <li>Vite</li>
            <li>Leaflet (pour la carte interactive)</li>
            <li>Java (Spring Boot pour le back-end)</li>
            <li>API REST</li>
            <li>CSS / Boostrap CSS</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Carte interactive</h2>
          <img
            src={ysport_carte}
            alt="Carte interactive"
            className="rounded-lg shadow-md"
          />
          <p className="text-gray-600">
            Le cœur du site est une carte interactive alimentée par la librairie Leaflet. Elle permet aux utilisateurs
            de rechercher facilement les complexes sportifs en Nouvelle-Aquitaine. Il est possible de zoomer, déplacer
            la carte, et cliquer sur des éléments pour obtenir plus de détails sur chaque complexe.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Filtrage et tri des complexes</h2>
          <img
            src={ysport_filtres}
            alt="Filtre des complexes"
            className="rounded-lg shadow-md"
          />
          <p className="text-gray-600">
            Le site offre plusieurs filtres permettant de rechercher des complexes spécifiques, comme par exemple :
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Filtrage par ville, département, ou type de sport proposé.</li>
            <li>Affichage uniquement des complexes avec sanitaires ou accès handicapé.</li>
            <li>Possibilité de trier les complexes selon différents critères comme les équipements disponibles.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Clusterisation pour une meilleure visibilité</h2>
          <img
            src={ysport_petit_cluster}
            alt="Cluster des complexes sportifs"
            className="rounded-lg shadow-md"
          />
        <img
            src={ysport_grand_cluster}
            alt="Cluster des complexes sportifs"
            className="rounded-lg shadow-md"
          />
          <p className="text-gray-600">
            Afin de faciliter la navigation, nous avons mis en place un système de cluster. Ce système regroupe les
            complexes qui se trouvent dans une même zone géographique, améliorant ainsi la visibilité et la gestion de
            nombreux complexes sur la carte.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Fonctionnalités supplémentaires</h2>
          <img
            src={ysport_complexe}
            alt="Fonctionnalités supplémentaires"
            className="rounded-lg shadow-md"
          />
          <p className="text-gray-600">
            En plus de la carte interactive et des filtres, plusieurs autres fonctionnalités ont été intégrées au site :
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Accès à des informations détaillées sur chaque complexe (adresse, contact, horaires d’ouverture).</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default YsportPage;
