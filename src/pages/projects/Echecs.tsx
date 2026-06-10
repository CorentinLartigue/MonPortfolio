import React from 'react';
import echecs_regles from '/echecs_regles.png';
import echecs_jeux from '/echecs_jeux.png';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import '../../styles/projects.css';

const Echecs: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container">
            <div className="page-back-wrapper">
                <ReturnButton/>
            </div>
            <div className="content-card">
                <header className="card-header">
                    <h1 className="card-header-title">{t('project.echecs.title')}</h1>
                    <p className="card-header-desc">
                        {t('project.echecs.desc')}
                    </p>
                </header>

                <div className="card-body">

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.echecs.aboutTitle')}</h2>
                        <p className="project-detail-text">
                            {t('project.echecs.aboutText')}
                        </p>
                        <img
                            src={echecs_jeux}
                            alt="echecs_regles"
                            className="project-detail-img"
                        />
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.echecs.featuresTitle')}</h2>
                        <ul className="project-detail-bullets">
                            <li>
                                <strong className="project-detail-strong">{t('project.echecs.feature1Title')}</strong>
                                {t('project.echecs.feature1Text')}
                            </li>
                            <li>
                                <strong className="project-detail-strong">{t('project.echecs.feature2Title')}</strong>
                                {t('project.echecs.feature2Text')}
                            </li>
                            <li>
                                <strong className="project-detail-strong">{t('project.echecs.feature3Title')}</strong>
                                {t('project.echecs.feature3Text')}
                            </li>
                            <li>
                                <strong className="project-detail-strong">{t('project.echecs.feature4Title')}</strong>
                                {t('project.echecs.feature4Text')}
                            </li>
                            <img
                                src={echecs_regles}
                                alt="echecs_regles"
                                className="project-detail-img"
                            />
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.echecs.techTitle')}</h2>
                        <ul className="project-detail-bullets">
                            <li>
                                <strong className="project-detail-strong">{t('project.echecs.tech1Title')}</strong>
                                {t('project.echecs.tech1Text')}
                            </li>
                            <li>
                                <strong className="project-detail-strong">{t('project.echecs.tech2Title')}</strong>
                                {t('project.echecs.tech2Text')}
                            </li>
                            <li>
                                <strong className="project-detail-strong">{t('project.echecs.tech3Title')}</strong>
                                {t('project.echecs.tech3Text')}
                            </li>
                            <li>
                                <strong className="project-detail-strong">{t('project.echecs.tech4Title')}</strong>
                                {t('project.echecs.tech4Text')}
                            </li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.echecs.challengesTitle')}</h2>
                        <ul className="project-detail-bullets">
                            <li>
                                <strong className="project-detail-strong">{t('project.echecs.challenge1Title')}</strong>
                                {t('project.echecs.challenge1Text')}
                            </li>
                            <li>
                                <strong className="project-detail-strong">{t('project.echecs.challenge2Title')}</strong>
                                {t('project.echecs.challenge2Text')}
                            </li>
                            <li>
                                <strong className="project-detail-strong">{t('project.echecs.challenge3Title')}</strong>
                                {t('project.echecs.challenge3Text')}
                            </li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.echecs.learnedTitle')}</h2>
                        <p className="project-detail-text">
                            {t('project.echecs.learnedText')}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Echecs;