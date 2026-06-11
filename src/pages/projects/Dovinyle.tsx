import React from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import '../../styles/projects.css';

const Dovinyle: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container">
            <div className="page-back-wrapper">
                <ReturnButton/>
            </div>
            <div className="content-card">
                <header className="card-header">
                    <h1 className="card-header-title">{t('project.dovinyle.title')}</h1>
                    <p className="card-header-desc">
                        {t('project.dovinyle.desc')}
                    </p>
                </header>

                <div className="card-body">
                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.dovinyle.introTitle')}</h2>
                        <p className="project-detail-text">
                            {t('project.dovinyle.introText')}
                        </p>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.dovinyle.featTitle')}</h2>
                        <ul className="project-detail-bullets">
                            <li>{t('project.dovinyle.feat1')}</li>
                            <li>{t('project.dovinyle.feat2')}</li>
                            <li>{t('project.dovinyle.feat3')}</li>
                            <li>{t('project.dovinyle.feat4')}</li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.dovinyle.techTitle')}</h2>
                        <ul className="project-detail-bullets">
                            <li>{t('project.dovinyle.techFront')}</li>
                            <li>{t('project.dovinyle.techBack')}</li>
                            <li>{t('project.dovinyle.techDb')}</li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">GitHub Repositories</h2>
                        <ul className="project-detail-bullets">
                            <li>
                                <strong className="project-detail-strong">Frontend :</strong>{' '}
                                <a
                                    href="https://github.com/CorentinLartigue/vinyle-front"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-600 hover:underline"
                                >
                                    github.com/CorentinLartigue/vinyle-front
                                </a>
                            </li>
                            <li>
                                <strong className="project-detail-strong">Backend :</strong>{' '}
                                <a
                                    href="https://github.com/kilbertusrobin/vinyl_backend"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-600 hover:underline"
                                >
                                    github.com/kilbertusrobin/vinyl_backend
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Dovinyle;
