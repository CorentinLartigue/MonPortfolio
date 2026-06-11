import React from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import '../../styles/projects.css';

const LocPriority: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container">
            <div className="page-back-wrapper">
                <ReturnButton/>
            </div>
            <div className="content-card">
                <header className="card-header">
                    <h1 className="card-header-title">{t('project.locpriority.title')}</h1>
                    <p className="card-header-desc">
                        {t('project.locpriority.desc')}
                    </p>
                </header>

                <div className="card-body">
                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.locpriority.introTitle')}</h2>
                        <p className="project-detail-text">
                            {t('project.locpriority.introText')}
                        </p>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.locpriority.featTitle')}</h2>
                        <ul className="project-detail-bullets">
                            <li>{t('project.locpriority.feat1')}</li>
                            <li>{t('project.locpriority.feat2')}</li>
                            <li>{t('project.locpriority.feat3')}</li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.locpriority.techTitle')}</h2>
                        <ul className="project-detail-bullets">
                            <li>{t('project.locpriority.techShopify')}</li>
                            <li>{t('project.locpriority.techFront')}</li>
                            <li>{t('project.locpriority.techBack')}</li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">Links</h2>
                        <ul className="project-detail-bullets">
                            <li>
                                <strong className="project-detail-strong">Project Page :</strong>{' '}
                                <a
                                    href="https://www.home-made.io/portfolio/location-priority/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-600 hover:underline"
                                >
                                    home-made.io/portfolio/location-priority/
                                </a>
                            </li>
                            <li>
                                <strong className="project-detail-strong">Welcome Page :</strong>{' '}
                                <a
                                    href="https://www.home-made.io/welcome-location-priority"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-600 hover:underline"
                                >
                                    home-made.io/welcome-location-priority
                                </a>
                            </li>
                            <li>
                                <strong className="project-detail-strong">Shopify App Store :</strong>{' '}
                                <a
                                    href="https://apps.shopify.com/location-priority?locale=fr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-600 hover:underline"
                                >
                                    apps.shopify.com/location-priority
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default LocPriority;
