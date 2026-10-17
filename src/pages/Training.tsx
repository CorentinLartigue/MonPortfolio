import React from 'react';
import { formations } from '../data/formations.ts';
import { useTranslate } from '../hooks/useTranslate.ts';
import '../styles/trainings.css';

const Training: React.FC = () => {
    const { t } = useTranslate();

    return (
        <main className="trainings-page">
            <h1>{t('formations.title')}</h1>

            {formations.map((formation, index) => (
                <article key={index}>
                    <header>
                        <img src={formation.logo} alt="Logo" />
                        <div>
                            <h2>{t(formation.titreKey)}</h2>
                            <p>{t(formation.periodeKey)}</p>
                            <p>{t(formation.ecoleKey)}</p>
                        </div>
                    </header>

                    <p>{t(formation.descriptionKey)}</p>

                    <section>
                        <h3>{t('formations.headings.positives')}</h3>
                        <ul>
                            {formation.pointsPositifsKeys.map((pointKey, idx) => (
                                <li key={idx}>{t(pointKey)}</li>
                            ))}
                        </ul>
                    </section>

                    {formation.pointsNegatifsKeys.length > 0 && (
                        <section>
                            <h3>{t('formations.headings.negatives')}</h3>
                            <ul>
                                {formation.pointsNegatifsKeys.map((pointKey, idx) => (
                                    <li key={idx}>{t(pointKey)}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    <footer>
                        <a
                            href={formation.lien}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {t('formations.btnViewTraining')}
                        </a>
                    </footer>
                </article>
            ))}
        </main>
    );
};

export default Training;