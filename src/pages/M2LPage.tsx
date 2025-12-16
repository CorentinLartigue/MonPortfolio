import React from 'react';
import M2L_statique_ligue from '/M2L_statique_ligue.png';
import M2L_dynamique_ligue from '/M2L_dynamique_ligue.png';
import M2L_trello from '/M2L_trello.png';

const M2LPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <header className="bg-gray-800 text-white p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">Projet M2L</h1>
          <p className="mt-4 text-center text-lg">
            Projet groupé du site statique (première version) et du site dynamique (seconde version).
          </p>
        </header>

        <div className="p-8 space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              Suite à une demande de l'entité <strong>M2L</strong>, j'ai initialement créé un site vitrine statique. Quelques mois plus tard, une refonte dynamique et design a été réalisée 
              pour ajouter des fonctionnalités comme la gestion des ligues et clubs (ajout, modification, suppression) et l'inscription des utilisateurs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Comparaison des Versions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">🌐 Site Statique</h3>
                <img
                  src={M2L_statique_ligue}
                  alt="Site statique"
                  className="rounded-lg shadow-md"
                />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le site statique de la Maison des Ligues de Lorraine présentait des informations sur les ligues, services, et locaux à travers une interface simple en HTML et CSS.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>4 pages principales : Accueil, Services, Locaux, Ligues.</li>
                  <li>Conception esthétique basée sur une maquette Figma.</li>
                  <li>Navigation simple avec du contenu fixe.</li>
                  <li>Aucune interaction ou gestion dynamique.</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">🌟 Site Dynamique</h3>
                <img
                  src={M2L_dynamique_ligue}
                  alt="Site dynamique"
                  className="rounded-lg shadow-md"
                />
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le site dynamique a été développé pour répondre aux besoins de gestion avancée des ligues et clubs, intégrant des fonctionnalités interactives en PHP.
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Fonctionnalités CRUD : ajout, modification et suppression des ligues et clubs.</li>
                  <li>Gestion des formations et intervenants par rôle spécifique (Secrétaire, RH, etc.).</li>
                  <li>Respect de la réglementation RGPD pour les données personnelles.</li>
                  <li>Technologies : PHP, MySQL, MVC.</li>
                </ul>
              </div>
            </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Utilisées</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-gray-700">Site Statique</h3>
                <ul className="list-disc pl-6 text-gray-600 mt-3">
                  <li>HTML5 : Structure des pages.</li>
                  <li>CSS3 : Mise en forme.</li>
                  <li>Maquette Figma pour le design.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-700">Site Dynamique</h3>
                <ul className="list-disc pl-6 text-gray-600 mt-3">
                  <li>PHP Objet : Gestion des fonctionnalités dynamiques.</li>
                  <li>MySQL : Base de données pour stocker les ligues et clubs.</li>
                  <li>MVC : Architecture pour séparer les responsabilités.</li>
                </ul>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Méthodologie et Résultats</h2>
            <img
                    src= {M2L_trello}
                    alt="etape1"
                    className="rounded-lg shadow-md"
            />
            <p className="text-gray-700 leading-relaxed">
                Ce projet a été mené en suivant une méthodologie collaborative, avec une planification hebdomadaire des tâches et des débriefings réguliers pour suivre les objectifs.
                Le projet a suivi une méthodologie agile avec des sprints hebdomadaires. Chaque semaine, les objectifs étaient définis et suivis grâce à un tableau de tâches.
                Une communication active entre les membres a permis de résoudre les difficultés rapidement et de respecter les délais.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default M2LPage;
