import React from 'react';
import amphitryon_acces from '/images/projects/amphitryon-acces.png';
import amphitryon_plats from '/images/projects/amphitryon-plats.png';
import amphitryon_plat_detail from '/images/projects/amphitryon-plat-detail.png';
import amphitryon_services from '/images/projects/amphitryon-services.png';
import amphitryon_plats_service from '/images/projects/amphitryon-plats-service.png';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaUtensils, FaConciergeBell, FaListAlt } from 'react-icons/fa';
import '../../styles/projects/amphitryon.css';

const AmphitryonPage: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="amphitryon-container">
            <div className="amphitryon-return-wrapper">
                <ReturnButton />
            </div>

            {/* Hero Section */}
            <div className="amphitryon-hero">
                <div className="amphitryon-hero-bg"></div>
                <FaUtensils className="amphitryon-hero-icon" />
                <h1 className="amphitryon-hero-title">
                    {t('project.amphitryon.title')}
                </h1>
                <div className="amphitryon-hero-line"></div>
                <p className="amphitryon-hero-desc">
                    {t('project.amphitryon.desc')}
                </p>
            </div>

            <div className="amphitryon-main">
                
                {/* Intro & Roles */}
                <div className="amphitryon-intro-section">
                    <div className="amphitryon-intro-header">
                        <h2 className="amphitryon-intro-title">{t('project.amphitryon.introTitle')}</h2>
                        <p className="amphitryon-intro-text">
                            {t('project.amphitryon.introText')}
                        </p>
                    </div>

                    <div className="amphitryon-roles-grid">
                        <div className="amphitryon-role-card">
                            <FaConciergeBell className="amphitryon-role-icon" />
                            <h3 className="amphitryon-role-title">{t('project.amphitryon.role1Title')}</h3>
                            <p className="amphitryon-role-desc">{t('project.amphitryon.role1Desc')}</p>
                        </div>
                        <div className="amphitryon-role-card">
                            <FaUtensils className="amphitryon-role-icon" />
                            <h3 className="amphitryon-role-title">{t('project.amphitryon.role2Title')}</h3>
                            <p className="amphitryon-role-desc">{t('project.amphitryon.role2Desc')}</p>
                        </div>
                        <div className="amphitryon-role-card">
                            <FaListAlt className="amphitryon-role-icon" />
                            <h3 className="amphitryon-role-title">{t('project.amphitryon.role3Title')}</h3>
                            <p className="amphitryon-role-desc">{t('project.amphitryon.role3Desc')}</p>
                        </div>
                    </div>
                </div>

                {/* Features / Cards */}
                <div className="amphitryon-features-section">
                    <h2 className="amphitryon-section-title">{t('project.amphitryon.sectionTitle')}</h2>
                    
                    {/* Card 1 */}
                    <div className="amphitryon-feature-card">
                        <div className="md:w-1/2">
                            <img src={amphitryon_acces} alt="Chef Cuisinier" className="amphitryon-feature-img-single" />
                        </div>
                        <div className="amphitryon-feature-text-block">
                            <h3 className="amphitryon-feature-title">{t('project.amphitryon.card1Title')}</h3>
                            <p className="amphitryon-feature-desc">
                                {t('project.amphitryon.card1Desc')}
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="amphitryon-feature-card-reverse">
                        <div className="amphitryon-feature-img-pair">
                            <img src={amphitryon_plats} alt="Gestion des plats" className="amphitryon-feature-img-half" />
                            <img src={amphitryon_plat_detail} alt="Détail" className="amphitryon-feature-img-half-offset" />
                        </div>
                        <div className="amphitryon-feature-text-block">
                            <h3 className="amphitryon-feature-title">{t('project.amphitryon.card2Title')}</h3>
                            <ul className="amphitryon-feature-bullets">
                                <li className="amphitryon-feature-bullet-item"><span className="amphitryon-feature-bullet-dot"></span>{t('project.amphitryon.card2Bullet1')}</li>
                                <li className="amphitryon-feature-bullet-item"><span className="amphitryon-feature-bullet-dot"></span>{t('project.amphitryon.card2Bullet2')}</li>
                                <li className="amphitryon-feature-bullet-item"><span className="amphitryon-feature-bullet-dot"></span>{t('project.amphitryon.card2Bullet3')}</li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="amphitryon-feature-card">
                        <div className="amphitryon-feature-img-pair">
                            <img src={amphitryon_services} alt="Gestion services" className="amphitryon-feature-img-half" />
                            <img src={amphitryon_plats_service} alt="Plats par service" className="amphitryon-feature-img-half-offset" />
                        </div>
                        <div className="amphitryon-feature-text-block">
                            <h3 className="amphitryon-feature-title">{t('project.amphitryon.card3Title')}</h3>
                            <ul className="amphitryon-feature-bullets">
                                <li className="amphitryon-feature-bullet-item"><span className="amphitryon-feature-bullet-dot"></span>{t('project.amphitryon.card3Bullet1')}</li>
                                <li className="amphitryon-feature-bullet-item"><span className="amphitryon-feature-bullet-dot"></span>{t('project.amphitryon.card3Bullet2')}</li>
                                <li className="amphitryon-feature-bullet-item"><span className="amphitryon-feature-bullet-dot"></span>{t('project.amphitryon.card3Bullet3')}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="amphitryon-tech-section">
                    <h2 className="amphitryon-tech-heading">{t('project.amphitryon.techTitle')}</h2>
                    <div className="amphitryon-tech-list">
                        {['Java', 'Android Studio', 'MySQL', 'PHP (Backend)', 'API REST', 'XML / JSON'].map(tech => (
                            <div key={tech} className="amphitryon-tech-pill">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AmphitryonPage;