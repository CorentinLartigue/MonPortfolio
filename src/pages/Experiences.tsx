import React from 'react';
import {Link} from 'react-router-dom';
import {experiences} from '../data/experiences.ts';
import {useTranslate} from '../hooks/useTranslate.ts';
import '../styles/experiences.css';

const Experiences: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container">
            <div className="xp-container">
                <h1 className="xp-title">
                    {t('experiences.title')}
                </h1>

                {experiences.map((experience, index) => (
                    <div
                        key={index}
                        className="xp-card"
                    >
                        <div className="xp-header">
                            <img
                                src={experience.logo}
                                alt={experience.entreprise}
                                className="xp-logo"
                            />
                            <div className="xp-header-text">
                                <h2 className="xp-job-title">
                                    {t(experience.titreKey)}
                                </h2>
                                <p className="xp-meta">{experience.entreprise}</p>
                                <p className="xp-meta">{t(experience.periodeKey)}</p>
                            </div>
                        </div>

                        <p className="xp-desc">{t(experience.descriptionKey)}</p>

                        <div className="xp-section">
                            <h3 className="xp-section-title">{t('experiences.headings.missions')}</h3>
                            <ul className="xp-missions-list">
                                {experience.missionsKeys.map((missionKey, idx) => (
                                    <li key={idx}>{t(missionKey)}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="xp-section">
                            <h3 className="xp-section-title">
                                {t('experiences.headings.opinion')}
                            </h3>
                            <p className="xp-opinion-text">{t(experience.avisKey)}</p>
                        </div>

                        {experience.lienProjet && (
                            <div className="xp-link-container">
                                <Link to={experience.lienProjet} className="xp-link">
                                    {t('experiences.btnViewProject')}
                                </Link>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experiences;