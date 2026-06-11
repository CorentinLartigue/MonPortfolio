import React from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import '../../styles/projects.css';

const Cheerzup: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container">
            <div className="page-back-wrapper">
                <ReturnButton/>
            </div>
            <div className="content-card">
                <header className="card-header">
                    <h1 className="card-header-title">{t('project.cheerzup.title')}</h1>
                    <p className="card-header-desc">
                        {t('project.cheerzup.desc')}
                    </p>
                </header>

                <div className="card-body">
                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.cheerzup.introTitle')}</h2>
                        <p className="project-detail-text">
                            {t('project.cheerzup.introText')}
                        </p>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.cheerzup.featTitle')}</h2>
                        <ul className="project-detail-bullets">
                            <li>{t('project.cheerzup.feat1')}</li>
                            <li>{t('project.cheerzup.feat2')}</li>
                            <li>{t('project.cheerzup.feat3')}</li>
                            <li>{t('project.cheerzup.feat4')}</li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.cheerzup.techTitle')}</h2>
                        <ul className="project-detail-bullets">
                            <li>{t('project.cheerzup.techHexa')}</li>
                            <li>{t('project.cheerzup.techFramework')}</li>
                            <li>{t('project.cheerzup.techDb')}</li>
                            <li>{t('project.cheerzup.techDocker')}</li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">GitHub Repository</h2>
                        <ul className="project-detail-bullets">
                            <li>
                                <strong className="project-detail-strong">Backend :</strong>{' '}
                                <a
                                    href="https://github.com/Cheerz-up/cheerzup_backend"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-cyan-600 hover:underline"
                                >
                                    github.com/Cheerz-up/cheerzup_backend
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Cheerzup;
