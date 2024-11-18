import React from 'react';

interface Formation {
  titre: string;
  periode: string;
  description: string;
  pointsPositifs: string[];
  pointsNegatifs: string[];
  lien: string;
  logo: string;
  ecole: string;
}



const FormationPage: React.FC = () => {

    const formations: Formation[] = [
        {
          titre: 'Bachelor 3 et Mastère Développement Web',
          periode: '2024 - 2027',
          description: 'Formation spécialisée en développement web, couvrant les technologies front-end et back-end. Cette formation permet une maîtrise des langages de programmation modernes ainsi que des frameworks utilisés dans l\'industrie.',
          pointsPositifs: [
            'Formation reconnue par les entreprises',
            'Accompagnement professionnel et pédagogique',
            'De nombreux projets pratiques'
          ],
          pointsNegatifs: [
            'A voir dans le futur'

          ],
          lien: 'https://www.ynov.com/campus/bordeaux/',
          logo: '/MonPortfolio/assets/ynov.png',
          ecole: 'YNOV Campus Bordeaux'
        },
        {
          titre: 'BTS SIO option SLAM',
          periode: '2022 - 2024',
          description: 'Le BTS Services Informatiques aux Organisations (SIO) option Solutions Logicielles et Applications Métiers (SLAM) forme aux compétences nécessaires pour développer des solutions informatiques adaptées aux besoins des entreprises.',
          pointsPositifs: [
            'Formation solide avec un bon équilibre théorie/pratique',
            'Stage en entreprise permettant une expérience réelle',
            'Bonne base pour travailler dans le développement logiciel'
          ],
          pointsNegatifs: [
            'Manque de spécialisation poussée sur certains sujets notamenent au niveau du Front-End et des Frameworks en générale',
            'Formation relativement courte et trop ancienne avec certains point à revoir'
          ],
          lien: 'https://www.eiffel-bordeaux.org/formations/bts-sio-cybersecurite/',
          logo: '/MonPortfolio/assets/gustave-eiffel.jpg',
          ecole: 'Lycée Gustave Eiffel Bordeaux'
        },
        {
          titre: 'Bac Général Spécialité Maths et NSI',
          periode: '2019 - 2022',
          description: 'Le Bac général avec des spécialités en Mathématiques et en Numérique et Sciences Informatiques (NSI) permet d’acquérir une base solide en mathématiques et pour ce qui est de l\'informatique, on est plus sur une ouverture au domaine avec quelques notions de base en programmation mais essentiellement orienté logique mathématique et science de l\'informatique. Un bon début pour poursuivre des études dans le domaine du développement web ou logiciel.',
          pointsPositifs: [
            'Bonne préparation pour des études en informatique',
            'Un programme assez complet pour un début',
            'Approfondissement des notions scientifiques et logiques'
          ],
          pointsNegatifs: [
            'Programme exigeant de la pratique et de la réflexion',
            'Manque d\'approfondissement pratique sur les projets informatiques et de diversification au niveau des domaines en informatique (cybesécurité, data, ...)'
          ],
          lien: 'https://lyceejeanrenou-lareole.net/la-seconde-generale-et-technologique-une-classe-dorientation/',
          logo: '/MonPortfolio/assets/jean-renou.jpg',
          ecole: 'Lycée Jean Renou La Réole'
        }
      ];

    return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center mb-8">Mes Formations</h1>

        {formations.map((formation, index) => (
        <div key={index} className="max-w-3xl w-full bg-white p-8 shadow-xl rounded-lg space-y-6 mb-8">
            <div className="flex items-center space-x-4">
            <img src={formation.logo} alt="Logo" className="w-16 h-16 rounded-md" />
            <div>
                <h2 className="text-2xl font-semibold text-gray-800">{formation.titre}</h2>
                <p className="text-sm text-gray-500">{formation.periode}</p>
                <p className="text-sm text-gray-500 italic">{formation.ecole}</p> 
            </div>
            </div>

            <p className="mt-2 text-lg text-gray-600">{formation.description}</p>

            <div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Points Positifs</h3>
            <ul className="mt-2 text-gray-600 list-disc pl-6">
                {formation.pointsPositifs.map((point, idx) => (
                <li key={idx}>{point}</li>
                ))}
            </ul>
            </div>

            <div>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Points Négatifs</h3>
            <ul className="mt-2 text-gray-600 list-disc pl-6">
                {formation.pointsNegatifs.map((point, idx) => (
                <li key={idx}>{point}</li>
                ))}
            </ul>
            </div>

            <div className="mt-6 text-center">
            <a
                href={formation.lien}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-lg font-semibold"
            >
                Voir la formation
            </a>
            </div>
        </div>
        ))}
    </div>
    );
};

export default FormationPage;