import React from 'react';
import amphitryon_acces from '/amphitryon_acces.png';
import amphitryon_plats from '/amphitryon_plats.png';
import amphitryon_plat_detail from '/amphitryon_plat_detail.png';
import amphitryon_services from '/amphitryon_services.png';
import amphitryon_plats_service from '/amphitryon_plats_service.png';


const AmphitryonPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <header className="bg-gray-800 text-white p-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-center">Amphitryon</h1>
          <p className="mt-4 text-center text-lg">
            Une application Android pour gérer les restaurants de la chaîne fictive Amphitryon, 
            optimisant les rôles de serveur, chef cuisinier, et chef de salle.
          </p>
        </header>

        <div className="p-8 space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              L'application **Amphitryon** est conçue pour faciliter la gestion des services et des plats dans les restaurants de la chaîne fictive Amphitryon. 
              Elle se divise en trois parties pour s'adapter aux rôles spécifiques du personnel du restaurant.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-800">Serveurs</h3>
                <p className="text-gray-600 mt-2">
                  Gestion des commandes et transmission aux chefs en cuisine.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-800">Chef Cuisinier</h3>
                <p className="text-gray-600 mt-2">
                  Création et gestion des plats et services, contrôle des stocks et des prix.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-800">Chef de Salle</h3>
                <p className="text-gray-600 mt-2">
                  Supervision des activités de la salle et gestion des réservations.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Gestion des Plats et Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={amphitryon_acces}
                  alt="Chef Cuisinier"
                  className="w-full object-cover aspect-[4/3]"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-700">Rôle du Chef Cuisinier</h3>
                  <p className="mt-3 text-gray-600">
                    Interface intuitive pour accéder rapidement à la gestion des plats et services, 
                    assurant une organisation optimale des menus et des stocks.
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="grid grid-cols-2 gap-1">
                  <img
                    src={amphitryon_plats}
                    alt="Gestion des plats"
                    className="object-cover aspect-[4/3]"
                  />
                  <img
                    src={amphitryon_plat_detail}
                    alt="Détail des plats"
                    className="object-cover aspect-[4/3]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-700">Gestion des Plats</h3>
                  <ul className="mt-3 text-gray-600 list-disc pl-6">
                    <li>Création et modification de plats (entrée, plat principal, dessert).</li>
                    <li>Suppression de plats obsolètes.</li>
                    <li>Mise à jour des prix et quantités disponibles.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="grid grid-cols-2 gap-1">
                  <img
                    src={amphitryon_services}
                    alt="Gestion des services"
                    className="object-cover aspect-[4/3]"
                  />
                  <img
                    src={amphitryon_plats_service}
                    alt="Plats par service"
                    className="object-cover aspect-[4/3]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-700">Gestion des Services</h3>
                  <ul className="mt-3 text-gray-600 list-disc pl-6">
                    <li>Association de plats à des services spécifiques.</li>
                    <li>Gestion des plats disponibles par service (matin, midi, soir).</li>
                    <li>Mise à jour des détails (prix de vente, quantités proposées).</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technologies Utilisées</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-600 list-disc pl-6">
              <li>Java</li>
              <li>Android Studio</li>
              <li>MySQL</li>
              <li>PHP (Backend)</li>
              <li>API REST</li>
              <li>XML et JSON (échanges de données)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AmphitryonPage;
