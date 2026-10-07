import React from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaGithub, FaReact, FaDatabase } from 'react-icons/fa';
import { SiNestjs } from 'react-icons/si';
import dovinyle_home from '/images/projects/dovinyle-home.png';
import dovinyle_catalog from '/images/projects/dovinyle-catalog.png';
import dovinyle_collection from '/images/projects/dovinyle-collection.png';
import dovinyle_cart from '/images/projects/dovinyle-cart.png';
import '../../styles/projects/dovinyle.css';

const Dovinyle: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="dovinyle-container">
            <div className="dovinyle-wrapper">
                {/* Header */}
                <div className="dovinyle-header">
                    <div className="dovinyle-return-box">
                        <ReturnButton />
                    </div>
                    <div className="dovinyle-header-content">
                        <h1 className="dovinyle-title">
                            {t('project.dovinyle.title')}
                        </h1>
                        <p className="dovinyle-desc">
                            {t('project.dovinyle.desc')}
                        </p>
                    </div>
                </div>

                {/* Bento Grid */}
                <div className="dovinyle-bento-grid">
                    {/* Intro Card */}
                    <div className="dovinyle-intro-card">
                        <h2 className="dovinyle-intro-title">
                            <span className="dovinyle-intro-bar"></span>
                            {t('project.dovinyle.introTitle')}
                        </h2>
                        <p className="dovinyle-intro-text">
                            {t('project.dovinyle.introText')}
                        </p>
                    </div>

                    {/* Tech Stack Card */}
                    <div className="dovinyle-tech-card">
                        <h2 className="dovinyle-tech-title">{t('project.dovinyle.techTitle')}</h2>
                        <div className="dovinyle-tech-list">
                            <div className="dovinyle-tech-item-cyan">
                                <FaReact className="text-3xl drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                                <span className="dovinyle-tech-label">{t('project.dovinyle.techFront')}</span>
                            </div>
                            <div className="dovinyle-tech-item-red">
                                <SiNestjs className="text-3xl drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                                <span className="dovinyle-tech-label">{t('project.dovinyle.techBack')}</span>
                            </div>
                            <div className="dovinyle-tech-item-blue">
                                <FaDatabase className="text-3xl drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
                                <span className="dovinyle-tech-label">{t('project.dovinyle.techDb')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="dovinyle-features-grid">
                    {[1, 2, 3, 4].map((num) => (
                        <div key={num} className="dovinyle-feature-card group">
                            <div className="dovinyle-feature-num">0{num}</div>
                            <p className="dovinyle-feature-text">
                                {t(`project.dovinyle.feat${num}`)}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Screenshots Gallery */}
                <div className="dovinyle-gallery-section">
                    <h2 className="dovinyle-gallery-title">
                        <span className="dovinyle-gallery-title-line"></span>
                        Interface & Expérience
                        <span className="dovinyle-gallery-title-line"></span>
                    </h2>
                    
                    <div className="dovinyle-gallery-grid">
                        <div className="dovinyle-gallery-card group">
                            <div className="dovinyle-gallery-thumb">
                                <img src={dovinyle_home} alt="Dovinyle Home" className="dovinyle-gallery-img" />
                            </div>
                            <h3 className="dovinyle-gallery-card-title">{t('project.dovinyle.homeTitle')}</h3>
                            <p className="dovinyle-gallery-card-desc">{t('project.dovinyle.homeDesc')}</p>
                        </div>
                        
                        <div className="dovinyle-gallery-card group">
                            <div className="dovinyle-gallery-thumb">
                                <img src={dovinyle_catalog} alt="Dovinyle Catalog" className="dovinyle-gallery-img" />
                            </div>
                            <h3 className="dovinyle-gallery-card-title">{t('project.dovinyle.catalogTitle')}</h3>
                            <p className="dovinyle-gallery-card-desc">{t('project.dovinyle.catalogDesc')}</p>
                        </div>
                        
                        <div className="dovinyle-gallery-card group">
                            <div className="dovinyle-gallery-thumb">
                                <img src={dovinyle_collection} alt="Dovinyle Collection" className="dovinyle-gallery-img" />
                            </div>
                            <h3 className="dovinyle-gallery-card-title">{t('project.dovinyle.collectionTitle')}</h3>
                            <p className="dovinyle-gallery-card-desc">{t('project.dovinyle.collectionDesc')}</p>
                        </div>
                        
                        <div className="dovinyle-gallery-card group">
                            <div className="dovinyle-gallery-thumb">
                                <img src={dovinyle_cart} alt="Dovinyle Cart" className="dovinyle-gallery-img" />
                            </div>
                            <h3 className="dovinyle-gallery-card-title">{t('project.dovinyle.cartTitle')}</h3>
                            <p className="dovinyle-gallery-card-desc">{t('project.dovinyle.cartDesc')}</p>
                        </div>
                    </div>
                </div>

                {/* Repository Links */}
                <div className="dovinyle-repo-box">
                    <div>
                        <h2 className="dovinyle-repo-title">Code Source</h2>
                        <p className="dovinyle-repo-desc">Explorez l'architecture de ce projet sur GitHub</p>
                    </div>
                    <div className="dovinyle-repo-actions">
                        <a href="https://github.com/CorentinLartigue/vinyle-front" target="_blank" rel="noopener noreferrer" 
                           className="dovinyle-repo-btn group">
                            <FaGithub className="text-xl group-hover:text-cyan-400 transition-colors" />
                            <span className="font-medium text-gray-200 group-hover:text-white transition-colors">Frontend</span>
                        </a>
                        <a href="https://github.com/kilbertusrobin/vinyl_backend" target="_blank" rel="noopener noreferrer" 
                           className="dovinyle-repo-btn group">
                            <FaGithub className="text-xl group-hover:text-red-400 transition-colors" />
                            <span className="font-medium text-gray-200 group-hover:text-white transition-colors">Backend</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dovinyle;
