import React from 'react';

const BiorelaiPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <header className="bg-gray-800 text-white p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">Bio-Relai</h1>
          <p className="mt-4 text-center text-lg">
            Une plateforme connectant les producteurs locaux et les consommateurs pour une distribution de produits biologiques en circuit court.
          </p>
        </header>

        <div className="p-8 space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              **Bio-Relai** est une application en ligne conçue pour promouvoir la consommation responsable en reliant les producteurs locaux avec les consommateurs. Elle se divise en plusieurs sections pour répondre aux besoins des visiteurs, clients, producteurs et responsables.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fonctionnalités</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-800">Visiteur</h3>
                <ul className="mt-3 text-gray-600 list-disc pl-6">
                  <li>Créer un compte pour accéder à l'application.</li>
                  <li>Consulter les informations sur les produits et les producteurs.</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-800">Client</h3>
                <ul className="mt-3 text-gray-600 list-disc pl-6">
                  <li>Passer des commandes de produits biologiques.</li>
                  <li>Modifier ou consulter ses commandes existantes.</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-800">Producteur</h3>
                <ul className="mt-3 text-gray-600 list-disc pl-6">
                  <li>Ajouter et gérer ses produits biologiques.</li>
                  <li>Suivre les commandes passées par les clients.</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-800">Responsable</h3>
                <ul className="mt-3 text-gray-600 list-disc pl-6">
                  <li>Superviser les ventes et les activités des producteurs.</li>
                  <li>Gérer les utilisateurs et les données de la plateforme.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Utilisées</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600 list-disc pl-6">
              <li>PHP Objet</li>
              <li>MySQL</li>
              <li>Modéle MVC</li>
              <li>HTML / CSS</li>
              <li>API REST</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Méthodologie de Développement</h2>
            <p className="text-gray-700 leading-relaxed">
              Le développement suit une architecture MVC robuste, garantissant une séparation claire des données, de la logique métier, et de l'interface utilisateur. Les échanges de données entre les modules se font via des API REST, pour une flexibilité et une efficacité accrues.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BiorelaiPage;
