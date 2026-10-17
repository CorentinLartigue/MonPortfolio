import React from 'react';
import { Link } from 'react-router-dom';
import { experiences } from '../data/experiences.ts';
import { useTranslate } from '../hooks/useTranslate.ts';
import '../styles/experiences.css';

const Experiences: React.FC = () => {
    const { t } = useTranslate();

    return (
        <main className="experiences-page">
            <h1>{t('experiences.title')}</h1>

            {experiences.map((experience, index) => (
                <article key={index}>
                    <header>
                        <img
                            src={experience.logo}
                            alt={experience.entreprise}
                        />
                        <div>
                            <h2>{t(experience.titreKey)}</h2>
                            <p>{experience.entreprise}</p>
                            <p>{t(experience.periodeKey)}</p>
                        </div>
                    </header>

                    <p>{t(experience.descriptionKey)}</p>

                    <section>
                        <h3>{t('experiences.headings.missions')}</h3>
                        <ul>
                            {experience.missionsKeys.map((missionKey, idx) => (
                                <li key={idx}>{t(missionKey)}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h3>{t('experiences.headings.opinion')}</h3>
                        <blockquote>{t(experience.avisKey)}</blockquote>
                    </section>

                    {experience.lienProjet && (
                        <footer>
                            <Link to={experience.lienProjet}>
                                {t('experiences.btnViewProject')}
                            </Link>
                        </footer>
                    )}
                </article>
            ))}
        </main>
    );
};

export default Experiences;