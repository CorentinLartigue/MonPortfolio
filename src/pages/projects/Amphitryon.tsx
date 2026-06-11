import React from 'react';
import amphitryon_acces from '/images/projects/amphitryon-acces.png';
import amphitryon_plats from '/images/projects/amphitryon-plats.png';
import amphitryon_plat_detail from '/images/projects/amphitryon-plat-detail.png';
import amphitryon_services from '/images/projects/amphitryon-services.png';
import amphitryon_plats_service from '/images/projects/amphitryon-plats-service.png';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import '../../styles/projects.css';

const AmphitryonPage: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container">
            <div className="page-back-wrapper">
                <ReturnButton/>
            </div>
            <div className="content-card">
                <header className="card-header">
                    <h1 className="card-header-title">{t('project.amphitryon.title')}</h1>
                    <p className="card-header-desc">
                        {t('project.amphitryon.desc')}
                    </p>
                </header>

                <div className="card-body">
                    <section>
                        <h2 className="section-title">{t('project.amphitryon.introTitle')}</h2>
                        <p className="section-text">
                            {t('project.amphitryon.introText')}
                        </p>
                        <div className="amphitryon-roles-grid">
                            <div className="info-box">
                                <h3 className="info-box-title amphitryon-role-title">{t('project.amphitryon.role1Title')}</h3>
                                <p className="section-text amphitryon-role-desc">
                                    {t('project.amphitryon.role1Desc')}
                                </p>
                            </div>
                            <div className="info-box">
                                <h3 className="info-box-title amphitryon-role-title">{t('project.amphitryon.role2Title')}</h3>
                                <p className="section-text amphitryon-role-desc">
                                    {t('project.amphitryon.role2Desc')}
                                </p>
                            </div>
                            <div className="info-box">
                                <h3 className="info-box-title amphitryon-role-title">{t('project.amphitryon.role3Title')}</h3>
                                <p className="section-text amphitryon-role-desc">
                                    {t('project.amphitryon.role3Desc')}
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="section-title">{t('project.amphitryon.sectionTitle')}</h2>
                        <div className="amphitryon-section-grid">
                            <div className="amphitryon-card">
                                <img
                                    src={amphitryon_acces}
                                    alt="Chef Cuisinier"
                                    className="amphitryon-card-img"
                                />
                                <div className="amphitryon-card-body">
                                    <h3 className="amphitryon-card-title">{t('project.amphitryon.card1Title')}</h3>
                                    <p className="section-text amphitryon-card-desc">
                                        {t('project.amphitryon.card1Desc')}
                                    </p>
                                </div>
                            </div>

                            <div className="amphitryon-card">
                                <div className="amphitryon-img-grid">
                                    <img
                                        src={amphitryon_plats}
                                        alt="Gestion des plats"
                                        className="amphitryon-grid-img"
                                    />
                                    <img
                                        src={amphitryon_plat_detail}
                                        alt="Détail des plats"
                                        className="amphitryon-grid-img"
                                    />
                                </div>
                                <div className="amphitryon-card-body">
                                    <h3 className="amphitryon-card-title">{t('project.amphitryon.card2Title')}</h3>
                                    <ul className="bullets-list amphitryon-card-desc">
                                        <li>{t('project.amphitryon.card2Bullet1')}</li>
                                        <li>{t('project.amphitryon.card2Bullet2')}</li>
                                        <li>{t('project.amphitryon.card2Bullet3')}</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="amphitryon-card">
                                <div className="amphitryon-img-grid">
                                    <img
                                        src={amphitryon_services}
                                        alt="Gestion des services"
                                        className="amphitryon-grid-img"
                                    />
                                    <img
                                        src={amphitryon_plats_service}
                                        alt="Plats par service"
                                        className="amphitryon-grid-img"
                                    />
                                </div>
                                <div className="amphitryon-card-body">
                                    <h3 className="amphitryon-card-title">{t('project.amphitryon.card3Title')}</h3>
                                    <ul className="bullets-list amphitryon-card-desc">
                                        <li>{t('project.amphitryon.card3Bullet1')}</li>
                                        <li>{t('project.amphitryon.card3Bullet2')}</li>
                                        <li>{t('project.amphitryon.card3Bullet3')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="section-title">{t('project.amphitryon.techTitle')}</h2>
                        <ul className="tech-grid-list">
                            <li>Java</li>
                            <li>Android Studio</li>
                            <li>MySQL</li>
                            <li>PHP (Backend)</li>
                            <li>API REST</li>
                            <li>XML / JSON</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AmphitryonPage;