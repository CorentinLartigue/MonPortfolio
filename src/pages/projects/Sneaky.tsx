import React from 'react';
import maquette_sneaky from '/images/projects/maquette-sneaky.png';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaShoePrints, FaFireAlt, FaCodeBranch } from 'react-icons/fa';
import '../../styles/projects/sneaky.css';

const Sneaky: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="sneaky-container">
            <div className="sneaky-return-wrapper">
                <ReturnButton />
            </div>

            {/* Massive Hero */}
            <div className="sneaky-hero">
                <div className="sneaky-hero-glow"></div>
                <div className="sneaky-hero-content">
                    <FaShoePrints className="sneaky-hero-icon" />
                    <h1 className="sneaky-hero-title">
                        {t('project.sneaky.title')}
                    </h1>
                    <p className="sneaky-hero-desc">
                        {t('project.sneaky.desc')}
                    </p>
                </div>
            </div>

            <div className="sneaky-main">
                
                {/* Intro paragraphs */}
                <div className="sneaky-intro-card">
                    <p className="sneaky-intro-lead">
                        {t('project.sneaky.paragraph1')}
                    </p>
                    <p className="sneaky-intro-sub">
                        {t('project.sneaky.paragraph2')}
                    </p>
                </div>

                {/* Features & Tech */}
                <div className="sneaky-grid-sections">
                    <div className="sneaky-section-block">
                        <div className="sneaky-section-header">
                            <FaFireAlt className="sneaky-section-icon" />
                            <h2 className="sneaky-section-title">{t('project.sneaky.featuresTitle')}</h2>
                        </div>
                        <ul className="sneaky-feature-list">
                            {[1, 2, 3].map(i => (
                                <li key={i} className="sneaky-feature-card group">
                                    <h3 className="sneaky-feature-title">{t(`project.sneaky.feature${i}Title`)}</h3>
                                    <p className="sneaky-feature-desc">{t(`project.sneaky.feature${i}Text`)}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="sneaky-section-block">
                        <div className="sneaky-section-header">
                            <FaCodeBranch className="sneaky-section-icon" />
                            <h2 className="sneaky-section-title">{t('project.sneaky.techTitle')}</h2>
                        </div>
                        <ul className="sneaky-feature-list">
                            {[1, 2, 3].map(i => (
                                <li key={i} className="sneaky-feature-card group">
                                    <h3 className="sneaky-feature-title">{t(`project.sneaky.tech${i}Title`)}</h3>
                                    <p className="sneaky-feature-desc">{t(`project.sneaky.tech${i}Text`)}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Mission / Design */}
                <div className="sneaky-mission-outer">
                    <div className="sneaky-mission-inner">
                        <h2 className="sneaky-mission-title">
                            {t('project.sneaky.missionTitle')}
                        </h2>
                        
                        <div className="sneaky-mockup-wrapper">
                            <img src={maquette_sneaky} alt="Maquette Sneaky" className="sneaky-mockup-img" />
                        </div>

                        <div className="sneaky-mission-grid">
                            <div className="sneaky-mission-text-block">
                                <p className="sneaky-mission-text-primary">
                                    {t('project.sneaky.missionText1')}
                                </p>
                                <p className="sneaky-mission-text-secondary">
                                    {t('project.sneaky.missionText2')}
                                </p>
                            </div>
                            <div className="sneaky-bullets-card">
                                <ul className="sneaky-bullets-list">
                                    {[1, 2, 3].map(i => (
                                        <li key={i} className="sneaky-bullet-item">
                                            <span className="sneaky-bullet-num">0{i}</span>
                                            {t(`project.sneaky.bullet${i}`)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sneaky;