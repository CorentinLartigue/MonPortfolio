import {IconType} from 'react-icons';
import {
    FaPhp, FaNodeJs, FaCss3Alt, FaReact, FaAngular, FaDatabase, FaServer
} from 'react-icons/fa';
import {
    SiTypescript, SiJquery, SiMysql, SiPrestashop, SiShopify,
    SiNginx, SiApache, SiPostman, SiDocker, SiLinux, SiFigma, SiNotion, SiGithub,
    SiNestjs, SiNextdotjs, SiPhpstorm, SiWebstorm, SiIntellijidea, SiTrello, SiSlack
} from 'react-icons/si';
import {MdSecurity, MdGroups, MdHearing, MdFlashOn, MdCheckCircle, MdAssignmentTurnedIn} from 'react-icons/md';

export interface Skill {
    nameKey: string;
    icon: IconType;
    color: string;
}

export interface SkillCategory {
    titleKey: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        titleKey: 'skills.categories.backend',
        skills: [
            {nameKey: 'skills.items.php', icon: FaPhp, color: 'text-indigo-600'},
            {nameKey: 'skills.items.nestjs', icon: SiNestjs, color: 'text-red-600'},
            {nameKey: 'skills.items.nodejs', icon: FaNodeJs, color: 'text-green-600'}
        ]
    },
    {
        titleKey: 'skills.categories.frontend',
        skills: [
            {nameKey: 'skills.items.css', icon: FaCss3Alt, color: 'text-blue-400'},
            {nameKey: 'skills.items.tsjs', icon: SiTypescript, color: 'text-blue-600'},
            {nameKey: 'skills.items.react', icon: FaReact, color: 'text-cyan-400'},
            {nameKey: 'skills.items.nextjs', icon: SiNextdotjs, color: 'text-gray-900'},
            {nameKey: 'skills.items.angular', icon: FaAngular, color: 'text-red-600'},
            {nameKey: 'skills.items.jquery', icon: SiJquery, color: 'text-blue-500'}
        ]
    },
    {
        titleKey: 'skills.categories.dataservices',
        skills: [
            {nameKey: 'skills.items.sql', icon: FaDatabase, color: 'text-gray-600'},
            {nameKey: 'skills.items.mysql', icon: SiMysql, color: 'text-blue-800'},
            {nameKey: 'skills.items.uml', icon: FaServer, color: 'text-purple-600'},
            {nameKey: 'skills.items.security', icon: MdSecurity, color: 'text-red-600'},
            {nameKey: 'skills.items.nginx', icon: SiNginx, color: 'text-green-600'},
            {nameKey: 'skills.items.apache', icon: SiApache, color: 'text-red-500'}
        ]
    },
    {
        titleKey: 'skills.categories.cmserp',
        skills: [
            {nameKey: 'skills.items.prestashop', icon: SiPrestashop, color: 'text-pink-600'},
            {nameKey: 'skills.items.shopify', icon: SiShopify, color: 'text-green-500'},
            {nameKey: 'skills.items.fastmag', icon: FaServer, color: 'text-blue-500'}
        ]
    },
    {
        titleKey: 'skills.categories.utilities',
        skills: [
            {nameKey: 'skills.items.intellij', icon: SiIntellijidea, color: 'text-indigo-500'},
            {nameKey: 'skills.items.phpstorm', icon: SiPhpstorm, color: 'text-purple-600'},
            {nameKey: 'skills.items.webstorm', icon: SiWebstorm, color: 'text-cyan-500'},
            {nameKey: 'skills.items.postman', icon: SiPostman, color: 'text-orange-500'},
            {nameKey: 'skills.items.docker', icon: SiDocker, color: 'text-blue-500'},
            {nameKey: 'skills.items.linux', icon: SiLinux, color: 'text-gray-700'},
            {nameKey: 'skills.items.trello', icon: SiTrello, color: 'text-blue-500'},
            {nameKey: 'skills.items.figma', icon: SiFigma, color: 'text-purple-500'},
            {nameKey: 'skills.items.slack', icon: SiSlack, color: 'text-purple-600'},
            {nameKey: 'skills.items.notion', icon: SiNotion, color: 'text-gray-800'},
            {nameKey: 'skills.items.github', icon: SiGithub, color: 'text-gray-900'}
        ]
    },
    {
        titleKey: 'skills.categories.softskills',
        skills: [
            {nameKey: 'skills.items.agile', icon: MdGroups, color: 'text-indigo-500'},
            {nameKey: 'skills.items.listening', icon: MdHearing, color: 'text-green-500'},
            {nameKey: 'skills.items.motivated', icon: MdFlashOn, color: 'text-yellow-500'},
            {nameKey: 'skills.items.serious', icon: MdCheckCircle, color: 'text-blue-500'},
            {nameKey: 'skills.items.rigorous', icon: MdAssignmentTurnedIn, color: 'text-teal-500'}
        ]
    }
];