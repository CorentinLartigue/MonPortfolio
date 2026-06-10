import React from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import '../../styles/projects.css';

const Biorelai: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container">
            <div className="page-back-wrapper">
                <ReturnButton/>
            </div>
            <div className="content-card">
                <header className="card-header">
                    <h1 className="card-header-title">{t('project.biorelai.title')}</h1>
                    <p className="card-header-desc">
                        {t('project.biorelai.desc')}
                    </p>
                </header>

                <div className="card-body">
                    <section>
                        <h2 className="section-title">{t('project.biorelai.introTitle')}</h2>
                        <p className="section-text">
                            {t('project.biorelai.introText')}
                        </p>
                    </section>

                    <section>
                        <h2 className="section-title">{t('project.biorelai.featuresTitle')}</h2>
                        <div className="biorelai-roles-grid">
                            <div className="info-box">
                                <h3 className="info-box-title biorelai-role-title">{t('project.biorelai.role1')}</h3>
                                <ul className="bullets-list text-sm">
                                    <li>{t('project.biorelai.role1Bullet1')}</li>
                                    <li>{t('project.biorelai.role1Bullet2')}</li>
                                </ul>
                            </div>

                            <div className="info-box">
                                <h3 className="info-box-title biorelai-role-title">{t('project.biorelai.role2')}</h3>
                                <ul className="bullets-list text-sm">
                                    <li>{t('project.biorelai.role2Bullet1')}</li>
                                    <li>{t('project.biorelai.role2Bullet2')}</li>
                                </ul>
                            </div>

                            <div className="info-box">
                                <h3 className="info-box-title biorelai-role-title">{t('project.biorelai.role3')}</h3>
                                <ul className="bullets-list text-sm">
                                    <li>{t('project.biorelai.role3Bullet1')}</li>
                                    <li>{t('project.biorelai.role3Bullet2')}</li>
                                </ul>
                            </div>

                            <div className="info-box">
                                <h3 className="info-box-title biorelai-role-title">{t('project.biorelai.role4')}</h3>
                                <ul className="bullets-list text-sm">
                                    <li>{t('project.biorelai.role4Bullet1')}</li>
                                    <li>{t('project.biorelai.role4Bullet2')}</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="section-title">{t('project.biorelai.techTitle')}</h2>
                        <ul className="tech-grid-list">
                            <li>PHP Objet</li>
                            <li>MySQL</li>
                            <li>Modèle MVC</li>
                            <li>HTML / CSS</li>
                            <li>API REST</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="section-title">{t('project.biorelai.methodTitle')}</h2>
                        <p className="section-text">
                            {t('project.biorelai.methodText')}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Biorelai;