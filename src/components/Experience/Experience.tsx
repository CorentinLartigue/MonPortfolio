import React from 'react';

interface XP {
  titre: string;
  entreprise: string;
  logo: string;
  periode: string;
  description: string;
  missions: string[];
  avis: string;
  lienProjet?: string; 
}

const Experience: React.FC = () => {
  const experiences: XP[] = [
    {
      titre: 'Stage 2ème année BTS SIO option SLAM',
      entreprise: 'Groupe FBO',
      logo: '/MonPortfolio/assets/groupeFBO.png',  
      periode: '29/01/2024 - 22/03/2024',
      description:
        'Développement et maintenance d’une solution logicielle complète.',
      missions: [
        'Technos: Framework maison(EzFrame) sur la base de Symfony, PHP, JQUERY, TWIG, Ajax et Bootstrap5.',
        'Implémentation fonctionnalité de création d\'offre avec un stepper (Smart Wizard) et génération PDF.',
        'Début de Tests unitaires PHP Unit.',
        'Méthode agile scrum, participation aux réunions (daily) et sprint de 3 semaines (meeting, planification et introspection).',
        'Rédaction de documentation utilisateur.'
      ],
      avis:
        'Une expérience très enrichissante, où j’ai pu développer mes compétences techniques et apprendre à travailler dans un environnement agile. La collaboration avec l’équipe a été très agréable, et j’ai pu prendre part à des projets importants.',
      lienProjet: 'https://www.example.com/project',  
    },
    {
      titre: 'Stage 1ère année BTS SIO option SLAM',
      entreprise: 'DevOpti',
      logo: '/MonPortfolio/assets/devopti.png',  
      periode: '22/05/2023 - 23/06/2023',
      description:
        'Formation JS, mini projets en JS et site statique.',
      missions: [
        'Technos: HTML, CSS, JavaScript et Figma.',
        'Implémenter un site statique à l’aide d’une maquette pré définie.',
      ],
      avis:
        'Ce stage a été une première expérience très formatrice, où j’ai appris les bases du développement web en front-end et la mise en œuvre de sites statiques. La collaboration avec mon équipe a été constructive et m’a permis d’acquérir de solides compétences.',
      lienProjet: 'https://www.example.com/project',  
    },
    {
      titre: 'Job étudiant intérim Manutention',
      entreprise: 'Divers',
      logo: '/MonPortfolio/assets/proman.png',  
      periode: '2022 - 2024',
      description: 'Travail en équipe, divers et varié.',
      missions: [
        'Rangement des produits, gestion des stocks.',
        'Travail manuel en équipe.',
      ],
      avis:
        'Une expérience utile pour apprendre à travailler en équipe et à gérer des tâches pratiques. Bien que ce travail ne soit pas lié directement à l’informatique, il m’a permis de développer des compétences en organisation et en gestion du temps.',
    },
    {
      titre: 'Stage d\'observation 3ème - Vignoble Ducourt',
      entreprise: 'Vignoble Ducourt',
      logo: '/MonPortfolio/assets/ducourt.png',  
      periode: '2019',
      description: 'Stage d’observation dans un domaine viticole.',
      missions: [
        'Observation des différentes étapes de la production viticole.',
        'Apprentissage des métiers liés à la production du vin.',
        'Trie et rédaction de fiches sanitaires.',
        'Observation de l\'administration et de la comptabilité.',
      ],
      avis:
        'Une expérience agréable qui m’a permis de découvrir un domaine du travail pour la première fois, très enrichissant. Bien que ce stage ne soit pas directement lié à ma carrière en informatique, il m’a apporté de la perspective sur le travail dans un environnement rural.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-8">
        Mes Expériences Professionnelles
      </h1>

      {experiences.map((experience, index) => (
        <div
          key={index}
          className="max-w-3xl w-full bg-white p-8 shadow-xl rounded-lg space-y-6 mb-8"
        >
          <div className="flex items-center space-x-4">
            <img
              src={experience.logo}
              alt={experience.entreprise}
              className="w-16 h-16 rounded-md"
            />
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {experience.titre}
              </h2>
              <p className="text-sm text-gray-500">{experience.entreprise}</p>
              <p className="text-sm text-gray-500">{experience.periode}</p>
            </div>
          </div>

          <p className="mt-2 text-lg text-gray-600">{experience.description}</p>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Missions</h3>
            <ul className="mt-2 text-gray-600 list-disc pl-6">
              {experience.missions.map((mission, idx) => (
                <li key={idx}>{mission}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Mon Avis
            </h3>
            <p className="mt-2 text-gray-600">{experience.avis}</p>
          </div>

          {experience.lienProjet && (
            <div className="mt-6 text-center">
              <a
                href={experience.lienProjet}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-lg font-semibold"
              >
                Voir le projet
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Experience;
