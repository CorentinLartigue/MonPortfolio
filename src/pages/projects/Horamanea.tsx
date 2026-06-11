import React from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import '../../styles/projects.css';

const Horamanea: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container">
            <div className="page-back-wrapper">
                <ReturnButton/>
            </div>
            <div className="content-card">
                <header className="card-header">
                    <h1 className="card-header-title">{t('project.horamanea.title')}</h1>
                    <p className="card-header-desc">
                        {t('project.horamanea.desc')}
                    </p>
                </header>

                <div className="card-body">
                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.horamanea.introTitle')}</h2>
                        <p className="project-detail-text">
                            {t('project.horamanea.introText')}
                        </p>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.horamanea.featTitle')}</h2>
                        <ul className="project-detail-bullets">
                            <li>{t('project.horamanea.feat1')}</li>
                            <li>{t('project.horamanea.feat2')}</li>
                            <li>{t('project.horamanea.feat3')}</li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.horamanea.techTitle')}</h2>
                        <ul className="project-detail-bullets">
                            <li>{t('project.horamanea.techFront')}</li>
                            <li>{t('project.horamanea.techBack')}</li>
                            <li>{t('project.horamanea.techCollab')}</li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">GitHub Repositories</h2>
                        <ul className="project-detail-bullets">
                            <li>
                                <strong className="project-detail-strong">Frontend :</strong>{' '}
                                <a
                                    href="https://github.com/YanJoe72/HoramaneaFront"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-600 hover:underline"
                                >
                                    github.com/YanJoe72/HoramaneaFront
                                </a>
                            </li>
                            <li>
                                <strong className="project-detail-strong">Backend :</strong>{' '}
                                <a
                                    href="https://github.com/YanJoe72/HoramaneaBack"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-600 hover:underline"
                                >
                                    github.com/YanJoe72/HoramaneaBack
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Horamanea;
