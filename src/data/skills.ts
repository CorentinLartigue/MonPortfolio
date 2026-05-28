import { IconType } from 'react-icons';
import { 
  FaPhp, FaNodeJs, FaCss3Alt, FaReact, FaAngular, FaDatabase, FaServer
} from 'react-icons/fa';
import { 
  SiTypescript, SiJquery, SiMysql, SiPrestashop, SiShopify, 
  SiNginx, SiApache, SiPostman, SiDocker, SiLinux, SiFigma, SiNotion, SiGithub,
  SiNestjs, SiNextdotjs, SiPhpstorm, SiWebstorm, SiIntellijidea, SiTrello, SiSlack
} from 'react-icons/si';
import { MdSecurity, MdGroups, MdHearing, MdFlashOn, MdCheckCircle, MdAssignmentTurnedIn } from 'react-icons/md';

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Back-end',
    skills: [
      { name: 'PHP (Symfony et Laravel)', icon: FaPhp, color: 'text-indigo-600' },
      { name: 'NestJS', icon: SiNestjs, color: 'text-red-600' },
      { name: 'Express / Node.js', icon: FaNodeJs, color: 'text-green-600' }
    ]
  },
  {
    title: 'Front-end',
    skills: [
      { name: 'CSS (Tailwind / Bootstrap5)', icon: FaCss3Alt, color: 'text-blue-400' },
      { name: 'JavaScript ou TypeScript', icon: SiTypescript, color: 'text-blue-600' },
      { name: 'React (+Vite)', icon: FaReact, color: 'text-cyan-400' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900' },
      { name: 'Angular', icon: FaAngular, color: 'text-red-600' },
      { name: 'jQuery', icon: SiJquery, color: 'text-blue-500' }
    ]
  },
  {
    title: 'Data et services',
    skills: [
      { name: 'SQL', icon: FaDatabase, color: 'text-gray-600' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-800' },
      { name: 'UML / MEA / MLR', icon: FaServer, color: 'text-purple-600' },
      { name: 'RGPD / Sécurité', icon: MdSecurity, color: 'text-red-600' },
      { name: 'Nginx', icon: SiNginx, color: 'text-green-600' },
      { name: 'Apache', icon: SiApache, color: 'text-red-500' }
    ]
  },
  {
    title: 'CMS et ERP',
    skills: [
      { name: 'Prestashop', icon: SiPrestashop, color: 'text-pink-600' },
      { name: 'Shopify', icon: SiShopify, color: 'text-green-500' },
      { name: 'Fastmag / Joolan', icon: FaServer, color: 'text-blue-500' }
    ]
  },
  {
    title: 'Utilitaires',
    skills: [
      { name: 'IntelliJ IDEA', icon: SiIntellijidea, color: 'text-indigo-500' },
      { name: 'PhpStorm', icon: SiPhpstorm, color: 'text-purple-600' },
      { name: 'WebStorm', icon: SiWebstorm, color: 'text-cyan-500' },
      { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
      { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
      { name: 'Linux (CMD) & Shell Bash', icon: SiLinux, color: 'text-gray-700' },
      { name: 'Trello', icon: SiTrello, color: 'text-blue-500' },
      { name: 'Figma', icon: SiFigma, color: 'text-purple-500' },
      { name: 'Slack', icon: SiSlack, color: 'text-purple-600' },
      { name: 'Notion', icon: SiNotion, color: 'text-gray-800' },
      { name: 'Github', icon: SiGithub, color: 'text-gray-900' }
    ]
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Méthodes agiles (Scrum & Kanban)', icon: MdGroups, color: 'text-indigo-500' },
      { name: 'À l\'écoute', icon: MdHearing, color: 'text-green-500' },
      { name: 'Motivé', icon: MdFlashOn, color: 'text-yellow-500' },
      { name: 'Sérieux', icon: MdCheckCircle, color: 'text-blue-500' },
      { name: 'Rigoureux', icon: MdAssignmentTurnedIn, color: 'text-teal-500' }
    ]
  }
];
