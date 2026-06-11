import React from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import '../../styles/projects.css';

const Ytellerie: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container">
            <div className="page-back-wrapper">
                <ReturnButton/>
            </div>
            <div className="content-card">
                <header className="card-header">
                    <h1 className="card-header-title">{t('project.ytellerie.title')}</h1>
                    <p className="card-header-desc">
                        {t('project.ytellerie.desc')}
                    </p>
                </header>

                <div className="card-body">
                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.ytellerie.introTitle')}</h2>
                        <p className="project-detail-text">
                            {t('project.ytellerie.introText')}
                        </p>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.ytellerie.featTitle')}</h2>
                        <ul className="project-detail-bullets">
                            <li>{t('project.ytellerie.feat1')}</li>
                            <li>{t('project.ytellerie.feat2')}</li>
                            <li>{t('project.ytellerie.feat3')}</li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.ytellerie.techTitle')}</h2>
                        <ul className="project-detail-bullets">
                            <li>{t('project.ytellerie.techFront')}</li>
                            <li>{t('project.ytellerie.techBack')}</li>
                            <li>{t('project.ytellerie.techDocker')}</li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">GitHub Repository</h2>
                        <ul className="project-detail-bullets">
                            <li>
                                <strong className="project-detail-strong">Repository :</strong>{' '}
                                <a
                                    href="https://github.com/Ynov-projects-CYCA/Y.tellerie"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-600 hover:underline"
                                >
                                    github.com/Ynov-projects-CYCA/Y.tellerie
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Ytellerie;
