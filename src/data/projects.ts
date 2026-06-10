import {IconType} from 'react-icons';
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
    titreKey: string;
    descriptionKey: string;
    image: string;
    lien: string;
    category: ProjectCategory;
    technologies: Technology[];
}

const baseUrl = import.meta.env.BASE_URL;

export const projects: Projet[] = [
    {
        id: 'portfolio',
        titreKey: 'project.list.portfolio.title',
        descriptionKey: 'project.list.portfolio.desc',
        image: `${baseUrl}portfolio.webp`,
        lien: '/projects/portfolio',
        category: 'web',
        technologies: [
            {name: 'React', icon: FaReact, color: 'text-cyan-400'},
            {name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600'},
            {name: 'HTML', icon: FaHtml5, color: 'text-orange-500'},
            {name: 'Tailwind', icon: SiTailwindcss, color: 'text-blue-400'},
            {name: 'Figma', icon: SiFigma, color: 'text-purple-500'},
            {name: 'Github', icon: FaGithub, color: 'text-gray-900'}
        ]
    },
    {
        id: 'echecs',
        titreKey: 'project.list.echecs.title',
        descriptionKey: 'project.list.echecs.desc',
        image: `${baseUrl}echecs.webp`,
        lien: '/projects/echecs',
        category: 'web',
        technologies: [
            {name: 'React', icon: FaReact, color: 'text-cyan-400'},
            {name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600'},
            {name: 'HTML', icon: FaHtml5, color: 'text-orange-500'},
            {name: 'Tailwind', icon: SiTailwindcss, color: 'text-blue-400'},
            {name: 'Figma', icon: SiFigma, color: 'text-purple-500'}
        ]
    },
    {
        id: 'ysport',
        titreKey: 'project.list.ysport.title',
        descriptionKey: 'project.list.ysport.desc',
        image: `${baseUrl}ysport.webp`,
        lien: '/projects/ysport',
        category: 'web',
        technologies: [
            {name: 'React', icon: FaReact, color: 'text-cyan-400'},
            {name: 'JavaScript', icon: FaJs, color: 'text-yellow-500'},
            {name: 'HTML', icon: FaHtml5, color: 'text-orange-500'},
            {name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-600'},
            {name: 'Java', icon: FaJava, color: 'text-red-500'},
            {name: 'SpringBoot', icon: SiSpringboot, color: 'text-green-600'},
            {name: 'Leaflet', icon: SiLeaflet, color: 'text-green-500'},
            {name: 'Figma', icon: SiFigma, color: 'text-purple-500'}
        ]
    },
    {
        id: 'berroyer',
        titreKey: 'project.list.berroyer.title',
        descriptionKey: 'project.list.berroyer.desc',
        image: `${baseUrl}berroyer.webp`,
        lien: '/projects/berroyer',
        category: 'web',
        technologies: [
            {name: 'JavaScript', icon: FaJs, color: 'text-yellow-500'},
            {name: 'PHP', icon: FaPhp, color: 'text-indigo-600'},
            {name: 'HTML', icon: FaHtml5, color: 'text-orange-500'},
            {name: 'Twig', icon: FaCode, color: 'text-green-600'},
            {name: 'Ajax', icon: FaSync, color: 'text-blue-500'},
            {name: 'Jquery', icon: SiJquery, color: 'text-blue-600'},
            {name: 'Symfony', icon: SiSymfony, color: 'text-black'}
        ]
    },
    {
        id: 'amphitryon',
        titreKey: 'project.list.amphitryon.title',
        descriptionKey: 'project.list.amphitryon.desc',
        image: `${baseUrl}amphitryon.webp`,
        lien: '/projects/amphitryon',
        category: 'mobile',
        technologies: [
            {name: 'Android', icon: FaAndroid, color: 'text-green-500'},
            {name: 'PHP', icon: FaPhp, color: 'text-indigo-600'},
            {name: 'Java', icon: FaJava, color: 'text-red-500'},
            {name: 'Xml', icon: FaCode, color: 'text-gray-500'}
        ]
    },
    {
        id: 'biorelai',
        titreKey: 'project.list.biorelai.title',
        descriptionKey: 'project.list.biorelai.desc',
        image: `${baseUrl}biorelai.webp`,
        lien: '/projects/biorelai',
        category: 'web',
        technologies: [
            {name: 'PHP', icon: FaPhp, color: 'text-indigo-600'},
            {name: 'HTML', icon: FaHtml5, color: 'text-orange-500'},
            {name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500'},
            {name: 'Trello', icon: SiTrello, color: 'text-blue-500'}
        ]
    },
    {
        id: 'm2l_statique',
        titreKey: 'project.list.m2l_statique.title',
        descriptionKey: 'project.list.m2l_statique.desc',
        image: `${baseUrl}M2L_statique.webp`,
        lien: '/projects/m2l',
        category: 'web',
        technologies: [
            {name: 'HTML', icon: FaHtml5, color: 'text-orange-500'},
            {name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500'},
            {name: 'Figma', icon: SiFigma, color: 'text-purple-500'},
            {name: 'Trello', icon: SiTrello, color: 'text-blue-500'}
        ]
    },
    {
        id: 'm2l_dynamique',
        titreKey: 'project.list.m2l_dynamique.title',
        descriptionKey: 'project.list.m2l_dynamique.desc',
        image: `${baseUrl}M2L_dynamique.webp`,
        lien: '/projects/m2l',
        category: 'web',
        technologies: [
            {name: 'PHP', icon: FaPhp, color: 'text-indigo-600'},
            {name: 'HTML', icon: FaHtml5, color: 'text-orange-500'},
            {name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500'},
            {name: 'Figma', icon: SiFigma, color: 'text-purple-500'},
            {name: 'Trello', icon: SiTrello, color: 'text-blue-500'}
        ]
    },
    {
        id: 'sneaky',
        titreKey: 'project.list.sneaky.title',
        descriptionKey: 'project.list.sneaky.desc',
        image: `${baseUrl}sneaky.webp`,
        lien: '/projects/sneaky',
        category: 'web',
        technologies: [
            {name: 'HTML', icon: FaHtml5, color: 'text-orange-500'},
            {name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500'},
            {name: 'JavaScript', icon: FaJs, color: 'text-yellow-500'},
            {name: 'Figma', icon: SiFigma, color: 'text-purple-500'},
            {name: 'Trello', icon: SiTrello, color: 'text-blue-500'}
        ]
    }
];