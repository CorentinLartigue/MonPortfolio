import React from 'react';
import maquette_sneaky from '/images/projects/maquette-sneaky.png';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import '../../styles/projects.css';

const Sneaky: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container">
            <div className="page-back-wrapper">
                <ReturnButton/>
            </div>
            <div className="content-card">
                <header className="card-header">
                    <h1 className="card-header-title">{t('project.sneaky.title')}</h1>
                    <p className="card-header-desc">
                        {t('project.sneaky.desc')}
                    </p>
                </header>

                <div className="card-body">

                    <section className="project-detail-section">
                        <p className="project-detail-text">
                            {t('project.sneaky.paragraph1')}
                        </p>
                        <p className="project-detail-text">
                            {t('project.sneaky.paragraph2')}
                        </p>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.sneaky.featuresTitle')}</h2>
                        <ul className="project-detail-bullets">
                            <li>
                                <strong className="project-detail-strong">{t('project.sneaky.feature1Title')}</strong>
                                {t('project.sneaky.feature1Text')}
                            </li>
                            <li>
                                <strong className="project-detail-strong">{t('project.sneaky.feature2Title')}</strong>
                                {t('project.sneaky.feature2Text')}
                            </li>
                            <li>
                                <strong className="project-detail-strong">{t('project.sneaky.feature3Title')}</strong>
                                {t('project.sneaky.feature3Text')}
                            </li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.sneaky.techTitle')}</h2>
                        <ul className="project-detail-bullets">
                            <li>
                                <strong className="project-detail-strong">{t('project.sneaky.tech1Title')}</strong>
                                {t('project.sneaky.tech1Text')}
                            </li>
                            <li>
                                <strong className="project-detail-strong">{t('project.sneaky.tech2Title')}</strong>
                                {t('project.sneaky.tech2Text')}
                            </li>
                            <li>
                                <strong className="project-detail-strong">{t('project.sneaky.tech3Title')}</strong>
                                {t('project.sneaky.tech3Text')}
                            </li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.sneaky.missionTitle')}</h2>
                        <img
                            src={maquette_sneaky}
                            alt="maquette_sneaky"
                            className="project-detail-img"
                        />
                        <p className="project-detail-text">
                            {t('project.sneaky.missionText1')}
                        </p>
                        <p className="section-text">
                            {t('project.sneaky.missionText2')}
                        </p>
                        <ul className="bullets-list">
                            <li>{t('project.sneaky.bullet1')}</li>
                            <li>{t('project.sneaky.bullet2')}</li>
                            <li>{t('project.sneaky.bullet3')}</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Sneaky;