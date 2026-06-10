import React from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import '../../styles/projects.css';

const Portfolio: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container">
            <div className="page-back-wrapper">
                <ReturnButton/>
            </div>
            <div className="content-card">
                <header className="card-header">
                    <h1 className="card-header-title">{t('project.portfolio.title')}</h1>
                    <p className="card-header-desc">
                        {t('project.portfolio.desc')}
                    </p>
                </header>

                <div className="card-body">

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.portfolio.objectiveTitle')}</h2>
                        <p className="project-detail-text">
                            {t('project.portfolio.objectiveText')}
                        </p>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.portfolio.featuresTitle')}</h2>
                        <ul className="project-detail-bullets">
                            <li>
                                <strong
                                    className="project-detail-strong">{t('project.portfolio.feature1Title')}</strong>
                                {t('project.portfolio.feature1Text')}
                            </li>
                            <li>
                                <strong
                                    className="project-detail-strong">{t('project.portfolio.feature2Title')}</strong>
                                {t('project.portfolio.feature2Text')}
                            </li>
                            <li>
                                <strong
                                    className="project-detail-strong">{t('project.portfolio.feature3Title')}</strong>
                                {t('project.portfolio.feature3Text')}
                            </li>
                            <li>
                                <strong
                                    className="project-detail-strong">{t('project.portfolio.feature4Title')}</strong>
                                {t('project.portfolio.feature4Text')}
                            </li>
                            <li>
                                <strong
                                    className="project-detail-strong">{t('project.portfolio.feature5Title')}</strong>
                                {t('project.portfolio.feature5Text')}
                            </li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.portfolio.techTitle')}</h2>
                        <ul className="project-detail-bullets">
                            <li>
                                <strong className="project-detail-strong">{t('project.portfolio.tech1Title')}</strong>
                                {t('project.portfolio.tech1Text')}
                            </li>
                            <li>
                                <strong className="project-detail-strong">{t('project.portfolio.tech2Title')}</strong>
                                {t('project.portfolio.tech2Text')}
                            </li>
                            <li>
                                <strong className="project-detail-strong">{t('project.portfolio.tech3Title')}</strong>
                                {t('project.portfolio.tech3Text')}
                            </li>
                            <li>
                                <strong className="project-detail-strong">{t('project.portfolio.tech4Title')}</strong>
                                {t('project.portfolio.tech4Text')}
                            </li>
                            <li>
                                <strong className="project-detail-strong">{t('project.portfolio.tech5Title')}</strong>
                                {t('project.portfolio.tech5Text')}
                            </li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.portfolio.challengesTitle')}</h2>
                        <ul className="project-detail-bullets">
                            <li>
                                <strong
                                    className="project-detail-strong">{t('project.portfolio.challenge1Title')}</strong>
                                {t('project.portfolio.challenge1Text')}
                            </li>
                            <li>
                                <strong
                                    className="project-detail-strong">{t('project.portfolio.challenge2Title')}</strong>
                                {t('project.portfolio.challenge2Text')}
                            </li>
                            <li>
                                <strong
                                    className="project-detail-strong">{t('project.portfolio.challenge3Title')}</strong>
                                {t('project.portfolio.challenge3Text')}
                            </li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.portfolio.learnedTitle')}</h2>
                        <p className="project-detail-text">
                            {t('project.portfolio.learnedText')}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;