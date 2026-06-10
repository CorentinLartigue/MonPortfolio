import React from 'react';
import M2L_statique_ligue from '/M2L_statique_ligue.png';
import M2L_dynamique_ligue from '/M2L_dynamique_ligue.png';
import M2L_trello from '/M2L_trello.png';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import '../../styles/projects.css';

const M2L: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container">
            <div className="page-back-wrapper">
                <ReturnButton/>
            </div>
            <div className="content-card">
                <header className="card-header">
                    <h1 className="card-header-title">{t('project.m2l.title')}</h1>
                    <p className="card-header-desc">
                        {t('project.m2l.desc')}
                    </p>
                </header>

                <div className="card-body">
                    <section className="project-detail-section">
                        <h2 className="section-title">{t('project.m2l.introTitle')}</h2>
                        <p className="project-detail-text">
                            {t('project.m2l.introText')}
                        </p>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="section-title">{t('project.m2l.compareTitle')}</h2>
                        <div className="m2l-compare-grid">
                            <div className="info-box">
                                <div>
                                    <h3 className="info-box-title text-blue-800 mb-4">{t('project.m2l.staticTitle')}</h3>
                                    <img
                                        src={M2L_statique_ligue}
                                        alt="Site statique"
                                        className="project-detail-img mb-4"
                                    />
                                    <p className="project-detail-text mb-4">
                                        {t('project.m2l.staticText')}
                                    </p>
                                    <ul className="bullets-list">
                                        <li>{t('project.m2l.staticBullet1')}</li>
                                        <li>{t('project.m2l.staticBullet2')}</li>
                                        <li>{t('project.m2l.staticBullet3')}</li>
                                        <li>{t('project.m2l.staticBullet4')}</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="info-box">
                                <div>
                                    <h3 className="info-box-title text-blue-800 mb-4">{t('project.m2l.dynamicTitle')}</h3>
                                    <img
                                        src={M2L_dynamique_ligue}
                                        alt="Site dynamique"
                                        className="project-detail-img mb-4"
                                    />
                                    <p className="project-detail-text mb-4">
                                        {t('project.m2l.dynamicText')}
                                    </p>
                                    <ul className="bullets-list">
                                        <li>{t('project.m2l.dynamicBullet1')}</li>
                                        <li>{t('project.m2l.dynamicBullet2')}</li>
                                        <li>{t('project.m2l.dynamicBullet3')}</li>
                                        <li>{t('project.m2l.dynamicBullet4')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="project-detail-section">
                        <h2 className="section-title">{t('project.m2l.techTitle')}</h2>
                        <div className="m2l-techs-grid">
                            <div>
                                <h3 className="text-base font-bold text-slate-800 mb-2">{t('project.m2l.staticTitle')}</h3>
                                <ul className="bullets-list">
                                    <li>{t('project.m2l.techStatic1')}</li>
                                    <li>{t('project.m2l.techStatic2')}</li>
                                    <li>{t('project.m2l.techStatic3')}</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-base font-bold text-slate-800 mb-2">{t('project.m2l.dynamicTitle')}</h3>
                                <ul className="bullets-list">
                                    <li>{t('project.m2l.techDynamic1')}</li>
                                    <li>{t('project.m2l.techDynamic2')}</li>
                                    <li>{t('project.m2l.techDynamic3')}</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="project-detail-section">
                        <h2 className="section-title">{t('project.m2l.methodTitle')}</h2>
                        <img
                            src={M2L_trello}
                            alt="Méthodologie"
                            className="project-detail-img mb-6"
                        />
                        <p className="project-detail-text">
                            {t('project.m2l.methodText')}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default M2L;