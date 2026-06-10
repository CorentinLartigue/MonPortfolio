import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowRight, FiMail} from 'react-icons/fi';
import {FaReact, FaAngular, FaLaravel} from 'react-icons/fa';
import {SiNestjs} from 'react-icons/si';
import {useTranslate} from '../hooks/useTranslate.ts';
import photoProfil from '/photo_profil.jpg';
import '../styles/home.css';

const Home: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="home-section">
            <div className="home-glow-blue"></div>
            <div className="home-glow-indigo"></div>

            <div className="home-container">
                <div className="home-grid">

                    <div className="home-content">
                        <div className="home-badge">
                            <span className="home-badge-dot"></span>
                            <span className="home-badge-text">{t('home.badge')}</span>
                        </div>

                        <div className="home-intro">
                            <h1 className="home-title">
                                {t('home.welcome')}{' '}
                                <span className="home-title-accent">{t('home.portfolio')}</span>
                            </h1>
                            <p className="home-paragraph">
                                {t('home.paragraph1_1')}
                                <span className="home-text-highlight">{t('home.paragraph1_highlight')}</span>
                                {t('home.paragraph1_2')}
                            </p>
                            <p className="home-paragraph">
                                {t('home.paragraph2_1')}
                                <span className="home-text-highlight">{t('home.paragraph2_highlight1')}</span>
                                {t('home.paragraph2_2')}
                                <span className="home-text-highlight">{t('home.paragraph2_highlight2')}</span>
                                {t('home.paragraph2_3')}
                            </p>
                        </div>

                        <div className="home-actions">
                            <Link
                                to="/projects"
                                className="home-btn-primary"
                            >
                                {t('home.btnProjects')}
                                <FiArrowRight className="home-btn-icon"/>
                            </Link>
                            <Link
                                to="/contact"
                                className="home-btn-secondary"
                            >
                                <FiMail className="home-btn-icon"/>
                                {t('home.btnContact')}
                            </Link>
                        </div>

                        <div className="home-techs">
                            <p className="home-techs-title">
                                {t('home.techsTitle')}
                            </p>
                            <div className="home-techs-list">
                                <div className="home-tech-card group">
                                    <FaReact className="home-tech-icon-react"/>
                                    <span className="home-tech-name">React</span>
                                </div>
                                <div className="home-tech-card group">
                                    <FaAngular className="home-tech-icon-angular"/>
                                    <span className="home-tech-name">Angular</span>
                                </div>
                                <div className="home-tech-card group">
                                    <FaLaravel className="home-tech-icon-laravel"/>
                                    <span className="home-tech-name">Laravel</span>
                                </div>
                                <div className="home-tech-card group">
                                    <SiNestjs className="home-tech-icon-nestjs"/>
                                    <span className="home-tech-name">NestJS</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="home-media">
                        <div className="home-image-wrapper group">

                            <div className="home-image-glow"></div>

                            <div className="home-image-frame">
                                <div className="home-image-inner">
                                    <img
                                        src={photoProfil}
                                        alt="Photo de profil de Corentin"
                                        className="home-profile-pic"
                                    />
                                    <div className="home-image-overlay"></div>
                                </div>
                            </div>

                            <div className="home-floating-badge animate-bounce-slow">
                                <div className="home-badge-icon-wrapper">
                                    <FaReact className="home-floating-icon animate-spin-slow"/>
                                </div>
                                <div>
                                    <p className="home-floating-title">{t('home.floatingRole')}</p>
                                    <p className="home-floating-desc">{t('home.floatingTitle')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;