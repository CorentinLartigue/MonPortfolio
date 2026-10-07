import React from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaGithub, FaAngular, FaDocker, FaCamera } from 'react-icons/fa';
import { SiNestjs } from 'react-icons/si';
import '../../styles/projects/ytellerie.css';

const Placeholder = () => (
    <div className="ytellerie-placeholder">
        <FaCamera className="ytellerie-placeholder-icon" />
        <span className="ytellerie-placeholder-text">Aperçu Ytellerie</span>
    </div>
);

const Ytellerie: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="ytellerie-container">
            <div className="ytellerie-return-wrapper">
                <ReturnButton />
            </div>
            
            <div className="ytellerie-layout">
                {/* Left Fixed Panel */}
                <div className="ytellerie-sidebar">
                    <h1 className="ytellerie-title">
                        {t('project.ytellerie.title')}
                    </h1>
                    <p className="ytellerie-desc">
                        {t('project.ytellerie.desc')}
                    </p>
                    
                    <div className="ytellerie-tech-section">
                        <h3 className="ytellerie-tech-heading">{t('project.ytellerie.techTitle')}</h3>
                        <div className="ytellerie-tech-list">
                            <div className="ytellerie-tech-badge">
                                <FaAngular className="text-xl" /> <span>{t('project.ytellerie.techFront')}</span>
                            </div>
                            <div className="ytellerie-tech-badge">
                                <SiNestjs className="text-xl" /> <span>{t('project.ytellerie.techBack')}</span>
                            </div>
                            <div className="ytellerie-tech-badge">
                                <FaDocker className="text-xl" /> <span>{t('project.ytellerie.techDocker')}</span>
                            </div>
                        </div>
                    </div>
                    
                    <a href="https://github.com/Ynov-projects-CYCA/Y.tellerie" target="_blank" rel="noopener noreferrer" 
                       className="ytellerie-github-link group">
                        <div className="ytellerie-github-icon-box">
                            <FaGithub className="text-xl" />
                        </div>
                        <span className="ytellerie-github-text">Voir le code source</span>
                    </a>
                </div>

                {/* Right Scrollable Content */}
                <div className="ytellerie-main">
                    <section>
                        <h2 className="ytellerie-intro-title">
                            {t('project.ytellerie.introTitle')}
                        </h2>
                        <p className="ytellerie-intro-text">
                            {t('project.ytellerie.introText')}
                        </p>
                    </section>

                    <section className="ytellerie-features-section">
                        <div className="ytellerie-feature-block group">
                            <Placeholder />
                            <div className="ytellerie-feature-card">
                                <h3 className="ytellerie-feature-title">{t('project.ytellerie.featTitle')} - 01</h3>
                                <p className="ytellerie-feature-text">{t('project.ytellerie.feat1')}</p>
                            </div>
                        </div>

                        <div className="ytellerie-feature-block group">
                            <Placeholder />
                            <div className="ytellerie-feature-card">
                                <h3 className="ytellerie-feature-title">{t('project.ytellerie.featTitle')} - 02</h3>
                                <p className="ytellerie-feature-text">{t('project.ytellerie.feat2')}</p>
                            </div>
                        </div>

                        <div className="ytellerie-feature-block group">
                            <Placeholder />
                            <div className="ytellerie-feature-card">
                                <h3 className="ytellerie-feature-title">{t('project.ytellerie.featTitle')} - 03</h3>
                                <p className="ytellerie-feature-text">{t('project.ytellerie.feat3')}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Ytellerie;
