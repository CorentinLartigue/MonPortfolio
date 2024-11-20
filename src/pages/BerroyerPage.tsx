import React from 'react';
import step1 from '/step1.png';
import step2 from '/step2.png';
import step3 from '/step3.png';
import step4 from '/step4.png';
import step5 from '/step5.png';
import step6 from '/step6.png';

const BerroyerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto bg-white p-8 shadow-xl rounded-lg space-y-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center">
        Extranet Berroyer
      </h1>

      <section className="space-y-4">
        <p className="text-gray-600">
          Le projet **Extranet Berroyer** vise à offrir aux commerciaux de
          Berroyer un environnement numérique robuste et convivial pour
          faciliter la gestion des opportunités commerciales et la création
          d'offres personnalisées. Cet extranet permet de gérer les
          opportunités, rechercher des produits, et créer des offres
          personnalisées tout en guidant les clients étape par étape.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Technologies utilisées</h2>
        <ul className="mt-2 text-gray-600 list-disc pl-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
          <li>PHP</li>
          <li>JavaScript</li>
          <li>Jquery</li>
          <li>Ajax</li>
          <li>Twig</li>
          <li>HTML/CSS</li>
          <li>Font Awesome</li>
          <li>Bootstrap</li>
          <li>EasyFrame (propriétaire GroupeFbo) dérivé de Symfony</li>
        </ul>
      </section>

      <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Étape 1 - Gestion des Clients</h2>
          <img
            src= {step1}
            alt="etape1"
            className="rounded-lg shadow-md"
          />
          <p className="text-gray-600">
            Cette étape permet de gérer les informations des clients :
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              Recherche dans la liste des clients par nom d’entreprise, contact, ou localisation.
            </li>
            <li>
              Création d’un nouveau client via une fenêtre glissante avec sauvegarde automatique
              en cas de fermeture accidentelle.
            </li>
            <li>
              Modification des informations d’un client existant à travers une fenêtre similaire.
            </li>
            <li>
              Sélection d’un client pour continuer la création de l’offre. Une fois sélectionné,
              la ligne du client est surlignée en vert.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Étape 2 - Choix des Produits</h2>
          <img
            src= {step2}
            alt="etape2"
            className="rounded-lg shadow-md"
          />
          <p className="text-gray-600">
            Cette étape permet de sélectionner les produits pour l’offre :
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              Recherche de produits via des filtres (désignation, prix, catégorie).
            </li>
            <li>
              Ajout ou retrait d’un produit des favoris en cliquant sur une étoile rouge.
            </li>
            <li>
              Masquage et affichage des prix via des boutons dédiés.
            </li>
            <li>
              Sélection d’un produit pour mettre à jour l’offre et continuer la création.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Étape 3 - Caractéristiques Techniques</h2>
          <img
            src= {step3}
            alt="etape3"
            className="rounded-lg shadow-md"
          />
          <p className="text-gray-600">
            Une page purement informative affichant les caractéristiques
            techniques du produit sélectionné. Le bouton ‘Suivant’ est activé
            automatiquement.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Étape 4 - Options</h2>
          <img
            src= {step4}
            alt="etape4"
            className="rounded-lg shadow-md"
          />
          <p className="text-gray-600">
            À cette étape, vous pouvez ajouter des options pour l’offre :
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              Recherche d’une option par nom, prix ou description.
            </li>
            <li>
              Survol d’une icône pour afficher une image d’option.
            </li>
            <li>
              Inclusion d’une option dans le PDF final avec plusieurs choix
              d'affichage (photo, description, etc.).
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Étape 5 - Finition</h2>
          <img
            src= {step5}
            alt="etape5"
            className="rounded-lg shadow-md"
          />
          <p className="text-gray-600">
            Remplissage des éléments finaux pour calculer les prix et générer le PDF :
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              Personnalisation des couleurs, lieux de livraison, dates, et options
              de reprise.
            </li>
            <li>
              Ajout de remises et calcul des prix via une fenêtre dédiée.
            </li>
            <li>
              Masquage et affichage des prix de l’offre.
            </li>
            <li>
              Confirmation de l’offre pour mise à jour et génération du PDF.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Étape 6 - Synthèse</h2>
          <img
            src= {step6}
            alt="etape6"
            className="rounded-lg shadow-md"
          />
          <p className="text-gray-600">
            Récapitulatif des informations de l’offre avant sa finalisation :
          </p>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>
              Association de l’offre à une opportunité existante ou création d’une nouvelle.
            </li>
            <li>
              Visualisation du PDF final avec options d’impression ou d’envoi par mail.
            </li>
            <li>
              Téléchargement du PDF avec ou sans certaines informations (prix, remises, conditions).
            </li>
          </ul>
        </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Fonctionnalités et hiérarchie des options</h2>
        <p className="text-gray-600">
          Après des réunions clients, plusieurs modifications ont été
          apportées pour répondre aux besoins spécifiques des commerciaux et
          améliorer la hiérarchie des options. La structure est la suivante :
        </p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Famille d’option : Correspond à une zone présente sur une remorque (par exemple : train roulant, châssis).</li>
          <li>Sous-famille d’option : Élément spécifique à une zone (exemple : jantes, roue de secours).</li>
          <li>Typologie d’option : Définition des paramètres associés (par exemple : marque, dimensions).</li>
          <li>Désignation article : Valeur précise associée (exemple : jantes de marque Berroyer).</li>
          <li>Désignation article détaillée : Description affichée sur le PDF.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Méthodologies agiles</h2>
        <p className="text-gray-600">
          J'ai participé à des sprints de 3 semaines selon la méthodologie
          Scrum, utilisant Jira pour gérer les tickets, suivre les progrès, et
          prioriser les tâches. Ces itérations ont permis de répondre aux
          besoins clients tout en respectant les contraintes de qualité, coût
          et temps.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Documentation</h2>
        <p className="text-gray-600">
          Une documentation détaillée a été rédigée pour accompagner les
          utilisateurs internes et guider le client dans l'utilisation des
          fonctionnalités. Elle couvre les étapes d'installation, les bonnes
          pratiques, et les instructions pour la création et la gestion des
          offres.
        </p>
      </section>

    </div>
  </div>
  );
};

export default  BerroyerPage;