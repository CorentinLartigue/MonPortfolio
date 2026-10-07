import React from 'react';
import M2L_statique_ligue from '/images/projects/m2l-statique-ligue.png';
import M2L_dynamique_ligue from '/images/projects/m2l-dynamique-ligue.png';
import M2L_trello from '/images/projects/m2l-trello.png';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaRunning, FaDesktop, FaServer, FaTasks } from 'react-icons/fa';
import '../../styles/projects/m2l.css';

const M2L: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="m2l-page">
            <div className="m2l-nav-wrapper">
                <ReturnButton />
            </div>

            {/* Header */}
            <div className="m2l-header">
                <div className="m2l-header-pattern"></div>
                <div className="m2l-header-content">
                    <div className="m2l-badge-icon">
                        <FaRunning className="m2l-badge-svg" />
                    </div>
                    <h1 className="m2l-title">
                        {t('project.m2l.title')}
                    </h1>
                    <p className="m2l-desc">
                        {t('project.m2l.desc')}
                    </p>
                </div>
            </div>

            <div className="m2l-main-content">
                
                {/* Intro */}
                <div className="m2l-intro-card">
                    <h2 className="m2l-intro-title">{t('project.m2l.introTitle')}</h2>
                    <p className="m2l-intro-text">
                        {t('project.m2l.introText')}
                    </p>
                </div>

                {/* Compare Section */}
                <div>
                    <h2 className="m2l-compare-title">{t('project.m2l.compareTitle')}</h2>
                    
                    <div className="m2l-compare-grid">
                        {/* Static */}
                        <div className="m2l-compare-card group">
                            <div className="m2l-card-header-static">
                                <FaDesktop className="m2l-card-icon-static" />
                                <h3 className="m2l-card-title">{t('project.m2l.staticTitle')}</h3>
                            </div>
                            <div className="m2l-card-body">
                                <img src={M2L_statique_ligue} alt="Site statique" className="m2l-card-img-static" />
                                <p className="m2l-card-text">{t('project.m2l.staticText')}</p>
                                <ul className="m2l-bullet-list">
                                    {[1, 2, 3, 4].map(i => (
                                        <li key={i} className="m2l-bullet-item">
                                            <div className="m2l-bullet-dot-static"></div>
                                            <span className="m2l-bullet-label">{t(`project.m2l.staticBullet${i}`)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Dynamic */}
                        <div className="m2l-compare-card group">
                            <div className="m2l-card-header-dynamic">
                                <FaServer className="m2l-card-icon-dynamic" />
                                <h3 className="m2l-card-title">{t('project.m2l.dynamicTitle')}</h3>
                            </div>
                            <div className="m2l-card-body">
                                <img src={M2L_dynamique_ligue} alt="Site dynamique" className="m2l-card-img-dynamic" />
                                <p className="m2l-card-text">{t('project.m2l.dynamicText')}</p>
                                <ul className="m2l-bullet-list">
                                    {[1, 2, 3, 4].map(i => (
                                        <li key={i} className="m2l-bullet-item">
                                            <div className="m2l-bullet-dot-dynamic"></div>
                                            <span className="m2l-bullet-label">{t(`project.m2l.dynamicBullet${i}`)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="m2l-tech-grid">
                    <div className="m2l-tech-box-static">
                        <h3 className="m2l-tech-title-static">{t('project.m2l.staticTitle')} Stack</h3>
                        <div className="m2l-tech-tags">
                            {[t('project.m2l.techStatic1'), t('project.m2l.techStatic2'), t('project.m2l.techStatic3')].map(tech => (
                                <span key={tech} className="m2l-tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                    <div className="m2l-tech-box-dynamic">
                        <h3 className="m2l-tech-title-dynamic">{t('project.m2l.dynamicTitle')} Stack</h3>
                        <div className="m2l-tech-tags">
                            {[t('project.m2l.techDynamic1'), t('project.m2l.techDynamic2'), t('project.m2l.techDynamic3')].map(tech => (
                                <span key={tech} className="m2l-tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Methodology */}
                <div className="m2l-method-card">
                    <div className="m2l-method-badge">
                        <FaTasks className="m2l-method-icon" />
                    </div>
                    <h2 className="m2l-method-title">{t('project.m2l.methodTitle')}</h2>
                    <img src={M2L_trello} alt="Trello" className="m2l-method-img" />
                    <p className="m2l-method-text">
                        {t('project.m2l.methodText')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default M2L;