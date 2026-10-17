import React from 'react';
import { skillCategories } from '../data/skills';
import { useTranslate } from '../hooks/useTranslate';
import '../styles/skills.css';

const Skills: React.FC = () => {
    const { t } = useTranslate();

    return (
        <main className="skills-page">
            <header>
                <h1>{t('skills.title')}</h1>
                <p>{t('skills.subtitle')}</p>
            </header>

            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <section key={index}>
                        <h2>{t(category.titleKey)}</h2>
                        <ul>
                            {category.skills.map((skill, idx) => (
                                <li key={idx}>
                                    <span className={skill.color}>
                                        {skill.icon ? <skill.icon /> : <div className="placeholder-icon"></div>}
                                    </span>
                                    <strong>{t(skill.nameKey)}</strong>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </main>
    );
};

export default Skills;