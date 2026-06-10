import React from 'react';
import {formations} from '../data/formations.ts';
import {useTranslate} from '../hooks/useTranslate.ts';
import '../styles/trainings.css';

const Training: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container">
            <div className="training-container">
                <h1 className="training-title">
                    {t('formations.title')}
                </h1>

                {formations.map((formation, index) => (
                    <div key={index} className="training-card">
                        <div className="training-header">
                            <img src={formation.logo} alt="Logo" className="training-logo"/>
                            <div className="training-header-text">
                                <h2 className="training-degree">{t(formation.titreKey)}</h2>
                                <p className="training-meta">{t(formation.periodeKey)}</p>
                                <p className="training-school">{t(formation.ecoleKey)}</p>
                            </div>
                        </div>

                        <p className="training-desc">{t(formation.descriptionKey)}</p>

                        <div className="training-section">
                            <h3 className="training-section-title">{t('formations.headings.positives')}</h3>
                            <ul className="training-points-list">
                                {formation.pointsPositifsKeys.map((pointKey, idx) => (
                                    <li key={idx}>{t(pointKey)}</li>
                                ))}
                            </ul>
                        </div>

                        {formation.pointsNegatifsKeys.length > 0 && (
                            <div className="training-section">
                                <h3 className="training-section-title">{t('formations.headings.negatives')}</h3>
                                <ul className="training-points-list">
                                    {formation.pointsNegatifsKeys.map((pointKey, idx) => (
                                        <li key={idx}>{t(pointKey)}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="training-link-container">
                            <a
                                href={formation.lien}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="training-link"
                            >
                                {t('formations.btnViewTraining')}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Training;