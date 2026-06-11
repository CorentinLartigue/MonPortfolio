import React from 'react';
import ysport_carte from '/images/projects/ysport-carte.png';
import ysport_filtres from '/images/projects/ysport-filtres.png';
import ysport_petit_cluster from '/images/projects/ysport-petit-cluster.png';
import ysport_grand_cluster from '/images/projects/ysport-grand-cluster.png';
import ysport_complexe from '/images/projects/ysport-complexe.png';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import '../../styles/projects.css';

const Ysport: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container">
            <div className="page-back-wrapper">
                <ReturnButton/>
            </div>
            <div className="content-card">
                <header className="card-header">
                    <h1 className="card-header-title">{t('project.ysport.title')}</h1>
                    <p className="card-header-desc">
                        {t('project.ysport.desc')}
                    </p>
                </header>

                <div className="card-body">
                    <section className="project-detail-section">
                        <p className="project-detail-text">
                            {t('project.ysport.introText')}
                        </p>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="section-title">{t('project.ysport.techTitle')}</h2>
                        <ul className="tech-grid-list">
                            <li>React.js</li>
                            <li>Vite</li>
                            <li>{t('project.ysport.techLeaflet')}</li>
                            <li>{t('project.ysport.techJava')}</li>
                            <li>API REST</li>
                            <li>CSS / Bootstrap CSS</li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="section-title">{t('project.ysport.mapTitle')}</h2>
                        <img
                            src={ysport_carte}
                            alt="Carte interactive"
                            className="project-detail-img"
                        />
                        <p className="project-detail-text">
                            {t('project.ysport.mapText')}
                        </p>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="section-title">{t('project.ysport.filterTitle')}</h2>
                        <img
                            src={ysport_filtres}
                            alt="Filtre des complexes"
                            className="project-detail-img"
                        />
                        <p className="project-detail-text">
                            {t('project.ysport.filterText')}
                        </p>
                        <ul className="bullets-list">
                            <li>{t('project.ysport.filterBullet1')}</li>
                            <li>{t('project.ysport.filterBullet2')}</li>
                            <li>{t('project.ysport.filterBullet3')}</li>
                        </ul>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="section-title">{t('project.ysport.clusterTitle')}</h2>
                        <div className="ysport-cluster-grid">
                            <img
                                src={ysport_petit_cluster}
                                alt="Cluster des complexes sportifs"
                                className="project-detail-img"
                            />
                            <img
                                src={ysport_grand_cluster}
                                alt="Cluster des complexes sportifs"
                                className="project-detail-img"
                            />
                        </div>
                        <p className="project-detail-text">
                            {t('project.ysport.clusterText')}
                        </p>
                    </section>

                    <section className="project-detail-section">
                        <h2 className="section-title">{t('project.ysport.extraTitle')}</h2>
                        <img
                            src={ysport_complexe}
                            alt="Fonctionnalités supplémentaires"
                            className="project-detail-img"
                        />
                        <p className="project-detail-text">
                            {t('project.ysport.extraText')}
                        </p>
                        <ul className="bullets-list">
                            <li>{t('project.ysport.extraBullet1')}</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Ysport;