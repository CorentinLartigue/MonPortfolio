import React from 'react';
import echecs_regles from '/images/projects/echecs-regles.png';
import echecs_jeux from '/images/projects/echecs-jeux.png';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaChessKnight, FaChessBoard, FaTrophy, FaLightbulb } from 'react-icons/fa';
import '../../styles/projects/echecs.css';

const Echecs: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="echecs-page">
            <div className="echecs-nav-wrapper">
                <ReturnButton />
            </div>

            {/* Checkerboard Header */}
            <div className="echecs-header">
                <div className="echecs-header-pattern"></div>
                <FaChessKnight className="echecs-header-icon" />
                <h1 className="echecs-header-title">
                    {t('project.echecs.title')}
                </h1>
                <p className="echecs-header-desc">
                    {t('project.echecs.desc')}
                </p>
            </div>

            <div className="echecs-main-content">
                
                {/* About & Game Preview */}
                <div className="echecs-about-card">
                    <div className="echecs-about-content">
                        <div className="echecs-about-header">
                            <FaChessBoard className="echecs-about-icon" />
                            <h2 className="echecs-about-title">{t('project.echecs.aboutTitle')}</h2>
                        </div>
                        <p className="echecs-about-text">
                            {t('project.echecs.aboutText')}
                        </p>
                    </div>
                    <div>
                        <img src={echecs_jeux} alt="Plateau de jeu" className="echecs-about-img" />
                    </div>
                </div>

                {/* Features */}
                <div>
                    <h2 className="echecs-features-section-title">{t('project.echecs.featuresTitle')}</h2>
                    <div className="echecs-features-grid">
                        <div className="echecs-features-list">
                            {[
                                { title: t('project.echecs.feature1Title'), text: t('project.echecs.feature1Text') },
                                { title: t('project.echecs.feature2Title'), text: t('project.echecs.feature2Text') },
                                { title: t('project.echecs.feature3Title'), text: t('project.echecs.feature3Text') },
                                { title: t('project.echecs.feature4Title'), text: t('project.echecs.feature4Text') }
                            ].map((feat, i) => (
                                <div key={i} className="echecs-feature-item group">
                                    <div className="echecs-feature-number">0{i+1}.</div>
                                    <div>
                                        <h3 className="echecs-feature-title">{feat.title}</h3>
                                        <p className="echecs-feature-text">{feat.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <img src={echecs_regles} alt="Règles" className="echecs-features-img" />
                        </div>
                    </div>
                </div>

                {/* Challenges & Learning */}
                <div className="echecs-challenges-grid">
                    <div className="echecs-challenges-card">
                        <div className="echecs-challenges-header">
                            <FaTrophy className="echecs-challenges-icon" />
                            <h2 className="echecs-challenges-title">{t('project.echecs.challengesTitle')}</h2>
                        </div>
                        <ul className="echecs-challenges-list">
                            {[
                                { title: t('project.echecs.challenge1Title'), text: t('project.echecs.challenge1Text') },
                                { title: t('project.echecs.challenge2Title'), text: t('project.echecs.challenge2Text') },
                                { title: t('project.echecs.challenge3Title'), text: t('project.echecs.challenge3Text') }
                            ].map((c, i) => (
                                <li key={i}>
                                    <strong className="echecs-challenge-title">{c.title}</strong>
                                    <span className="echecs-challenge-text">{c.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="echecs-learned-card">
                        <div>
                            <div className="echecs-learned-header">
                                <FaLightbulb className="echecs-learned-icon" />
                                <h2 className="echecs-learned-title">{t('project.echecs.learnedTitle')}</h2>
                            </div>
                            <p className="echecs-learned-text">
                                "{t('project.echecs.learnedText')}"
                            </p>
                        </div>
                        
                        <div className="echecs-tech-box">
                            <h3 className="echecs-tech-title">{t('project.echecs.techTitle')}</h3>
                            <div className="echecs-tech-grid">
                                <div><strong className="echecs-tech-label">{t('project.echecs.tech1Title')}</strong> {t('project.echecs.tech1Text')}</div>
                                <div><strong className="echecs-tech-label">{t('project.echecs.tech2Title')}</strong> {t('project.echecs.tech2Text')}</div>
                                <div><strong className="echecs-tech-label">{t('project.echecs.tech3Title')}</strong> {t('project.echecs.tech3Text')}</div>
                                <div><strong className="echecs-tech-label">{t('project.echecs.tech4Title')}</strong> {t('project.echecs.tech4Text')}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Echecs;