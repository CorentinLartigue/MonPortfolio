import React from 'react';
import {skillCategories} from '../data/skills';
import {useTranslate} from '../hooks/useTranslate';
import '../styles/skills.css';

const Skills: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container">
            <div className="skills-container">

                <div className="skills-header">
                    <h1 className="page-title">
                        {t('skills.title')}
                    </h1>
                    <p className="page-subtitle">
                        {t('skills.subtitle')}
                    </p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <section
                            key={index}
                            className="skills-category-card"
                        >
                            <div>
                                <h2 className="skills-category-title">
                                    {t(category.titleKey)}
                                </h2>

                                <div className="skills-items-grid">
                                    {category.skills.map((skill, idx) => (
                                        <div
                                            key={idx}
                                            className="skill-item-wrapper group"
                                        >
                                            <div className={`skill-icon-wrapper ${skill.color}`}>
                                                {skill.icon ? (
                                                    <skill.icon className="skill-icon"/>
                                                ) : (
                                                    <div className="skill-placeholder-icon"></div>
                                                )}
                                            </div>
                                            <span className="skill-name-text">{t(skill.nameKey)}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Skills;