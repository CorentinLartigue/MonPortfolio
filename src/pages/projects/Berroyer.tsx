import React from 'react';
import step1 from '/step1.png';
import step2 from '/step2.png';
import step3 from '/step3.png';
import step4 from '/step4.png';
import step5 from '/step5.png';
import step6 from '/step6.png';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import '../../styles/projects.css';

const Berroyer: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container">
            <div className="page-back-wrapper">
                <ReturnButton/>
            </div>
            <div className="content-card">
                <header className="card-header">
                    <h1 className="card-header-title">{t('project.berroyer.title')}</h1>
                    <p className="card-header-desc">
                        {t('project.berroyer.desc')}
                    </p>
                </header>

                <div className="card-body">
                    <section className="project-detail-section">
                        <p className="project-detail-text">
                            {t('project.berroyer.intro')}
                        </p>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.berroyer.techTitle')}</h2>
                        <ul className="project-tech-grid">
                            <li>PHP</li>
                            <li>JavaScript</li>
                            <li>Jquery</li>
                            <li>Ajax</li>
                            <li>Twig</li>
                            <li>HTML/CSS</li>
                            <li>Font Awesome</li>
                            <li>Bootstrap</li>
                            <li>{t('project.berroyer.techEasyframe')}</li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.berroyer.step1Title')}</h2>
                        <img
                            src={step1}
                            alt="etape1"
                            className="project-detail-img"
                        />
                        <p className="project-detail-text">
                            {t('project.berroyer.step1Desc')}
                        </p>
                        <ul className="project-detail-bullets">
                            <li>{t('project.berroyer.step1Bullet1')}</li>
                            <li>{t('project.berroyer.step1Bullet2')}</li>
                            <li>{t('project.berroyer.step1Bullet3')}</li>
                            <li>{t('project.berroyer.step1Bullet4')}</li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.berroyer.step2Title')}</h2>
                        <img
                            src={step2}
                            alt="etape2"
                            className="project-detail-img"
                        />
                        <p className="project-detail-text">
                            {t('project.berroyer.step2Desc')}
                        </p>
                        <ul className="project-detail-bullets">
                            <li>{t('project.berroyer.step2Bullet1')}</li>
                            <li>{t('project.berroyer.step2Bullet2')}</li>
                            <li>{t('project.berroyer.step2Bullet3')}</li>
                            <li>{t('project.berroyer.step2Bullet4')}</li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.berroyer.step3Title')}</h2>
                        <img
                            src={step3}
                            alt="etape3"
                            className="project-detail-img"
                        />
                        <p className="project-detail-text">
                            {t('project.berroyer.step3Desc')}
                        </p>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.berroyer.step4Title')}</h2>
                        <img
                            src={step4}
                            alt="etape4"
                            className="project-detail-img"
                        />
                        <p className="project-detail-text">
                            {t('project.berroyer.step4Desc')}
                        </p>
                        <ul className="project-detail-bullets">
                            <li>{t('project.berroyer.step4Bullet1')}</li>
                            <li>{t('project.berroyer.step4Bullet2')}</li>
                            <li>{t('project.berroyer.step4Bullet3')}</li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.berroyer.step5Title')}</h2>
                        <img
                            src={step5}
                            alt="etape5"
                            className="project-detail-img"
                        />
                        <p className="project-detail-text">
                            {t('project.berroyer.step5Desc')}
                        </p>
                        <ul className="project-detail-bullets">
                            <li>{t('project.berroyer.step5Bullet1')}</li>
                            <li>{t('project.berroyer.step5Bullet2')}</li>
                            <li>{t('project.berroyer.step5Bullet3')}</li>
                            <li>{t('project.berroyer.step5Bullet4')}</li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.berroyer.step6Title')}</h2>
                        <img
                            src={step6}
                            alt="etape6"
                            className="project-detail-img"
                        />
                        <p className="project-detail-text">
                            {t('project.berroyer.step6Desc')}
                        </p>
                        <ul className="project-detail-bullets">
                            <li>{t('project.berroyer.step6Bullet1')}</li>
                            <li>{t('project.berroyer.step6Bullet2')}</li>
                            <li>{t('project.berroyer.step6Bullet3')}</li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.berroyer.hierarchyTitle')}</h2>
                        <p className="project-detail-text">
                            {t('project.berroyer.hierarchyDesc')}
                        </p>
                        <ol className="project-detail-numbered-list">
                            <li>{t('project.berroyer.hierarchyItem1')}</li>
                            <li>{t('project.berroyer.hierarchyItem2')}</li>
                            <li>{t('project.berroyer.hierarchyItem3')}</li>
                            <li>{t('project.berroyer.hierarchyItem4')}</li>
                            <li>{t('project.berroyer.hierarchyItem5')}</li>
                        </ol>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.berroyer.agileTitle')}</h2>
                        <p className="project-detail-text">
                            {t('project.berroyer.agileDesc')}
                        </p>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="project-detail-subtitle">{t('project.berroyer.docTitle')}</h2>
                        <p className="project-detail-text">
                            {t('project.berroyer.docDesc')}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Berroyer;