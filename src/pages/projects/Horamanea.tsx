import React from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaGithub, FaReact, FaNodeJs, FaCamera } from 'react-icons/fa';
import '../../styles/projects/horamanea.css';

const Horamanea: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="horamanea-container">
            <div className="horamanea-return-wrapper">
                <ReturnButton />
            </div>

            <div className="horamanea-main">
                
                {/* Header Dashboard Style */}
                <div className="horamanea-hero-card">
                    <div className="horamanea-hero-glow"></div>
                    <div className="horamanea-hero-content">
                        <div className="horamanea-hero-badge">
                            Plateforme Collaborative
                        </div>
                        <h1 className="horamanea-hero-title">
                            {t('project.horamanea.title')}
                        </h1>
                        <p className="horamanea-hero-desc">
                            {t('project.horamanea.desc')}
                        </p>
                    </div>
                    <div className="horamanea-hero-actions">
                        <a href="https://github.com/YanJoe72/HoramaneaFront" target="_blank" rel="noopener noreferrer" className="horamanea-repo-btn">
                            <FaGithub className="text-xl" /> Frontend Repo
                        </a>
                        <a href="https://github.com/YanJoe72/HoramaneaBack" target="_blank" rel="noopener noreferrer" className="horamanea-repo-btn">
                            <FaGithub className="text-xl" /> Backend Repo
                        </a>
                    </div>
                </div>

                <div className="horamanea-grid-layout">
                    {/* Left Column */}
                    <div className="horamanea-col-left">
                        <div className="horamanea-intro-card">
                            <h2 className="horamanea-intro-title">{t('project.horamanea.introTitle')}</h2>
                            <p className="horamanea-intro-text">
                                {t('project.horamanea.introText')}
                            </p>
                        </div>
                        
                        <div className="horamanea-tech-card">
                            <h2 className="horamanea-tech-title">{t('project.horamanea.techTitle')}</h2>
                            <div className="horamanea-tech-list">
                                <div className="horamanea-tech-item">
                                    <FaReact className="text-cyan-400 text-2xl" />
                                    <span className="font-semibold text-slate-200">{t('project.horamanea.techFront')}</span>
                                </div>
                                <div className="horamanea-tech-item">
                                    <FaNodeJs className="text-green-500 text-2xl" />
                                    <span className="font-semibold text-slate-200">{t('project.horamanea.techBack')}</span>
                                </div>
                                <div className="horamanea-tech-item border border-blue-500/20">
                                    <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-black text-slate-900">C</span>
                                    <span className="font-semibold text-blue-400">{t('project.horamanea.techCollab')}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="horamanea-col-right">
                        <div className="horamanea-features-card">
                            <h2 className="horamanea-features-title">{t('project.horamanea.featTitle')}</h2>
                            <div className="horamanea-features-grid">
                                <div className="horamanea-feature-item">
                                    <div className="horamanea-feature-num">01</div>
                                    <p className="horamanea-feature-text">{t('project.horamanea.feat1')}</p>
                                </div>
                                <div className="horamanea-feature-item">
                                    <div className="horamanea-feature-num">02</div>
                                    <p className="horamanea-feature-text">{t('project.horamanea.feat2')}</p>
                                </div>
                                <div className="horamanea-feature-item-full">
                                    <div className="horamanea-feature-num">03</div>
                                    <p className="horamanea-feature-text">{t('project.horamanea.feat3')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Screenshot Dashboard */}
                        <div className="horamanea-screen-wrapper">
                            <div className="horamanea-screen-inner group">
                                <div className="horamanea-screen-bar">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-blue-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                                <FaCamera className="horamanea-screen-icon" />
                                <span className="horamanea-screen-label">Aperçu Interface Horamanea</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Horamanea;
