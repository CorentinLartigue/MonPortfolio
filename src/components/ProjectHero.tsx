// Generic project hero header component with integrated return button and theme support
import React from 'react';
import ReturnButton from './ReturnButton.tsx';
import '../styles/components/project-hero.css';

export type ProjectTheme = 'blue' | 'amber' | 'emerald' | 'purple' | 'cyan' | 'indigo';

export interface ProjectHeroProps {
    badgeIcon: React.ReactNode;
    badgeLabel: string;
    title: string;
    subtitle: string;
    description: string;
    techTags: string[];
    theme?: ProjectTheme;
    actions?: React.ReactNode;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({
    badgeIcon,
    badgeLabel,
    title,
    subtitle,
    description,
    techTags,
    theme = 'blue',
    actions
}) => {
    return (
        <div className="project-hero-wrapper">
            <nav className="project-return-wrapper" aria-label="Navigation de retour">
                <ReturnButton />
            </nav>

            <header className={`project-hero project-hero-${theme}`}>
                <div className="project-hero-glow"></div>
                <div className="project-hero-content">
                    <div className="project-hero-badge">
                        {badgeIcon}
                        <span>{badgeLabel}</span>
                    </div>

                    <h1>{title}</h1>

                    <p>{subtitle}</p>

                    <p>{description}</p>

                    {actions && (
                        <nav className="project-hero-actions" aria-label="Actions du projet">
                            {actions}
                        </nav>
                    )}

                    <ul>
                        {techTags.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                </div>
            </header>
        </div>
    );
};

export default ProjectHero;
