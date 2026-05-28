export interface Formation {
  titre: string;
  periode: string;
  description: string;
  pointsPositifs: string[];
  pointsNegatifs: string[];
  lien: string;
  logo: string;
  ecole: string;
}

const baseUrl = import.meta.env.BASE_URL;

export const formations: Formation[] = [
  {
    titre: 'Bachelor 3 et Mastère Développement Web',
    periode: '2024 - 2027',
    description: 'Formation spécialisée en développement web, couvrant les technologies front-end et back-end. Cette formation permet une maîtrise des langages de programmation modernes ainsi que des frameworks utilisés dans l\'industrie.',
    pointsPositifs: [
      'Formation reconnue par le ministère du travail et les entreprises',
      'La formation offre une bonne base en développement front-end et back-end, avec des projets pratiques et un accompagnement professionnel apprécié.',
      'De nombreux projets pratiques qui permettent de développer plutôt vite les connaissances apprises'
    ],
    pointsNegatifs: [
      'Cependant, les projets interfiliaires (Ydays) manquent de clarté et d\'encadrement, et certains cours pourraient être plus approfondis avec davantage de séances.'
    ],
    lien: 'https://www.ynov.com/campus/bordeaux/',
    logo: `${baseUrl}ynov.png`,
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
    logo: `${baseUrl}gustave-eiffel.jpg`,
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
    logo: `${baseUrl}jean-renou.jpg`,
    ecole: 'Lycée Jean Renou La Réole'
  }
];
