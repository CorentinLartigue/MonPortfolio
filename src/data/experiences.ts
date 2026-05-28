export interface XP {
  titre: string;
  entreprise: string;
  logo: string;
  periode: string;
  description: string;
  missions: string[];
  avis: string;
  lienProjet?: string;
}

const baseUrl = import.meta.env.BASE_URL;

export const experiences: XP[] = [
  {
    titre: 'Alternance 3 ème année Bachelor Informatique Ynov',
    entreprise: 'Home Made IO',
    logo: `${baseUrl}home-made-io.jpg`,
    periode: 'Depuis le 23/12/2024',
    description: 'Développement et maintenance de solutions e-commerce',
    missions: [
      'Technologies et outils : Laravel, Linux, Bash, GitHub, Bases de Données (BDD), ERP, CMS',
      'Maintenance et amélioration des modules de synchronisation pour Prestashop - Shopify / Fastmag - Joolan.',
      'Création de solutions applicatives pour Shopify ou Prestashop, adaptées aux besoins des utilisateurs avec une synchronisation avec les ERP Fastmag ou Joolan.',
      'Support technique et applicatif pour les clients, assurant une expérience utilisateur fluide et optimale.',
      'Création environnements de développement pour les nouveaux employés sous Docker.'
    ],
    avis: 'J\'ai rejoint une équipe incroyablement accueillante, avec une ambiance chaleureuse et presque familiale. Les projets sont stimulants, portés par des technologies modernes et passionnantes, offrant de belles opportunités d\'apprentissage. Un environnement motivant où il fait bon évoluer !'
  },
  {
    titre: 'Stage 2ème année BTS SIO option SLAM',
    entreprise: 'Groupe FBO',
    logo: `${baseUrl}groupeFBO.png`,
    periode: '29/01/2024 - 22/03/2024',
    description: 'Développement et maintenance d\'une solution logicielle complète.',
    missions: [
      'Technos: Framework maison(EzFrame) sur la base de Symfony, PHP, JQUERY, TWIG, Ajax et Bootstrap5.',
      'Implémentation fonctionnalité de création d\'offre avec un stepper (Smart Wizard) et génération PDF.',
      'Début de Tests unitaires PHP Unit.',
      'Méthode agile scrum, participation aux réunions (daily) et sprint de 3 semaines (meeting, planification et introspection).',
      'Rédaction de documentation utilisateur.'
    ],
    avis: 'Une expérience très enrichissante, où j\'ai pu développer mes compétences techniques et apprendre à travailler dans un environnement agile. La collaboration avec l\'équipe a été très agréable, et j\'ai pu prendre part à des projets importants.',
    lienProjet: '/projects/berroyer'
  },
  {
    titre: 'Stage 1ère année BTS SIO option SLAM',
    entreprise: 'DevOpti',
    logo: `${baseUrl}devopti.png`,
    periode: '22/05/2023 - 23/06/2023',
    description: 'Formation JS, mini projets en JS et site statique.',
    missions: [
      'Technos: HTML, CSS, JavaScript et Figma.',
      'Implémenter un site statique à l\'aide d\'une maquette pré définie.'
    ],
    avis: 'Ce stage a été une première expérience très formatrice, où j\'ai appris les bases du développement web en front-end et la mise en œuvre de sites statiques. La collaboration avec mon équipe a été constructive et m\'a permis d\'acquérir de solides compétences.',
    lienProjet: '/projects/sneaky'
  },
  {
    titre: 'Job étudiant intérim Manutention',
    entreprise: 'Divers',
    logo: `${baseUrl}proman.png`,
    periode: '2022 - 2024',
    description: 'Travail en équipe, divers et varié.',
    missions: [
      'Rangement des produits, gestion des stocks.',
      'Travail manuel en équipe.'
    ],
    avis: 'Une expérience utile pour apprendre à travailler en équipe et à gérer des tâches pratiques. Bien que ce travail ne soit pas lié directement à l’informatique, il m’a permis de développer des compétences en organisation et en gestion du temps.'
  },
  {
    titre: 'Stage d\'observation 3ème - Vignoble Ducourt',
    entreprise: 'Vignoble Ducourt',
    logo: `${baseUrl}ducourt.png`,
    periode: '2019',
    description: 'Stage d’observation dans un domaine viticole.',
    missions: [
      'Observation des différentes étapes de la production viticole.',
      'Apprentissage des métiers liés à la production du vin.',
      'Trie et rédaction de fiches sanitaires.',
      'Observation de l\'administration et de la comptabilité.'
    ],
    avis: 'Une expérience agréable qui m’a permis de découvrir un domaine du travail pour la première fois, très enrichissant. Bien que ce stage ne soit pas directement lié à ma carrière en informatique, il m’a apporté de la perspective sur le travail dans un environnement rural.'
  }
];
