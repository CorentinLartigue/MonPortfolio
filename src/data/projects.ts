import { IconType } from 'react-icons';
import { 
  FaReact, FaHtml5, FaGithub, FaJs, FaPhp, FaAndroid, FaJava, FaCss3Alt, FaSync, FaCode
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiFigma, SiJquery, SiSymfony, SiBootstrap, SiSpringboot, 
  SiLeaflet, SiTrello
} from 'react-icons/si';

export interface Technology {
  name: string;
  icon: IconType;
  color?: string;
}

export type ProjectCategory = 'web' | 'mobile' | 'logiciel' | 'réseau' | 'devops';

export interface Projet {
  id: string;
  titre: string;
  description: string;
  image: string;
  lien: string;
  category: ProjectCategory;
  technologies: Technology[];
}

const baseUrl = import.meta.env.BASE_URL;

export const projects: Projet[] = [
  {
    id: 'portfolio',
    titre: 'Portfolio',
    description: 'Un portfolio incluant une présentation personnelle et des sections projets, expériences, compétences, formations et contact. Il est déployé sur GitHub Pages.',
    image: `${baseUrl}portfolio.webp`,
    lien: '/projects/portfolio',
    category: 'web',
    technologies: [
      { name: 'React', icon: FaReact, color: 'text-cyan-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
      { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
      { name: 'Tailwind', icon: SiTailwindcss, color: 'text-blue-400' },
      { name: 'Figma', icon: SiFigma, color: 'text-purple-500' },
      { name: 'Github', icon: FaGithub, color: 'text-gray-900' }
    ]
  },
  {
    id: 'echecs',
    titre: 'Jeux d\'échecs',
    description: 'Un jeu d\'échecs jouable en local, respectant la plupart des règles du véritable jeu. 2 pages d\'informations supplémentaires sont incluses, offrant un aperçu des règles du jeu ainsi que des statistiques.',
    image: `${baseUrl}echecs.webp`,
    lien: '/projects/echecs',
    category: 'web',
    technologies: [
      { name: 'React', icon: FaReact, color: 'text-cyan-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
      { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
      { name: 'Tailwind', icon: SiTailwindcss, color: 'text-blue-400' },
      { name: 'Figma', icon: SiFigma, color: 'text-purple-500' }
    ]
  },
  {
    id: 'ysport',
    titre: 'Ysport site dynamique',
    description: 'Un site ayant pour but de rendre plus accessible la liste des complexes sportif (API gouvernementale) en Nouvelle Aquitaine à l\'aide d\'une carte interactive (Leaflet) et de filtres.',
    image: `${baseUrl}ysport.webp`,
    lien: '/projects/ysport',
    category: 'web',
    technologies: [
      { name: 'React', icon: FaReact, color: 'text-cyan-400' },
      { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
      { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
      { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-600' },
      { name: 'Java', icon: FaJava, color: 'text-red-500' },
      { name: 'SpringBoot', icon: SiSpringboot, color: 'text-green-600' },
      { name: 'Leaflet', icon: SiLeaflet, color: 'text-green-500' },
      { name: 'Figma', icon: SiFigma, color: 'text-purple-500' }
    ]
  },
  {
    id: 'berroyer',
    titre: 'Extranet Berroyer',
    description: 'Un extranet permettant la création d\'offres à destination des commerciaux de l\'entité Berroyer. Agrémenté par un stepper (Smart Wizard) et un dispositif de génération PDF pour un devis.',
    image: `${baseUrl}berroyer.webp`,
    lien: '/projects/berroyer',
    category: 'web',
    technologies: [
      { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
      { name: 'PHP', icon: FaPhp, color: 'text-indigo-600' },
      { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
      { name: 'Twig', icon: FaCode, color: 'text-green-600' },
      { name: 'Ajax', icon: FaSync, color: 'text-blue-500' },
      { name: 'Jquery', icon: SiJquery, color: 'text-blue-600' },
      { name: 'Symfony', icon: SiSymfony, color: 'text-black' }
    ]
  },
  {
    id: 'amphitryon',
    titre: 'Amphitryon application mobile',
    description: 'Une application android pour la gestion des restaurants de l\'organisation Amphitryon (chaîne de restauration fictive). Le projet se sépare en trois parties représentant chacune un rôle au sein du restaurant (serveurs, chef cuisinier, chef de salle).',
    image: `${baseUrl}amphitryon.webp`,
    lien: '/projects/amphitryon',
    category: 'mobile',
    technologies: [
      { name: 'Android', icon: FaAndroid, color: 'text-green-500' },
      { name: 'PHP', icon: FaPhp, color: 'text-indigo-600' },
      { name: 'Java', icon: FaJava, color: 'text-red-500' },
      { name: 'Xml', icon: FaCode, color: 'text-gray-500' }
    ]
  },
  {
    id: 'biorelai',
    titre: 'BioRelai site dynamique',
    description: 'Un site dynamique pour une entreprise sociale et collaborative fictive qui a pour objectif la vente en circuit court de produits issus de l\'agriculture biologique. Le projet se sépare en quatre parties représentant chacune un rôle au sein du site (visiteur, producteur, client et responsable ).',
    image: `${baseUrl}biorelai.webp`,
    lien: '/projects/biorelai',
    category: 'web',
    technologies: [
      { name: 'PHP', icon: FaPhp, color: 'text-indigo-600' },
      { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
      { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
      { name: 'Trello', icon: SiTrello, color: 'text-blue-500' }
    ]
  },
  {
    id: 'm2l_statique',
    titre: 'M2L site statique',
    description: 'Un site web statique à partir de maquettes Figma mises en place pour l\'entité fictive Maison des Ligues de Lorraine.',
    image: `${baseUrl}M2L_statique.webp`,
    lien: '/projects/m2l',
    category: 'web',
    technologies: [
      { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
      { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
      { name: 'Figma', icon: SiFigma, color: 'text-purple-500' },
      { name: 'Trello', icon: SiTrello, color: 'text-blue-500' }
    ]
  },
  {
    id: 'm2l_dynamique',
    titre: 'M2L site dynamique',
    description: 'Une migration du site vitrine M2L vers un site dynamique à partir de maquettes Figma créées ultérieurement pour l\'entité fictive Maison des Ligues de Lorraine.',
    image: `${baseUrl}M2L_dynamique.webp`,
    lien: '/projects/m2l',
    category: 'web',
    technologies: [
      { name: 'PHP', icon: FaPhp, color: 'text-indigo-600' },
      { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
      { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
      { name: 'Figma', icon: SiFigma, color: 'text-purple-500' },
      { name: 'Trello', icon: SiTrello, color: 'text-blue-500' }
    ]
  },
  {
    id: 'sneaky',
    titre: 'Sneaky site statique',
    description: 'Un site web statique à partir d\'une maquette Figma autour de la mode et du design',
    image: `${baseUrl}sneaky.webp`,
    lien: '/projects/sneaky',
    category: 'web',
    technologies: [
      { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
      { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
      { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
      { name: 'Figma', icon: SiFigma, color: 'text-purple-500' },
      { name: 'Trello', icon: SiTrello, color: 'text-blue-500' }
    ]
  }
];
