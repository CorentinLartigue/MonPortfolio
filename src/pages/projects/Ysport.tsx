import React from 'react';
import ysport_carte from '/images/projects/ysport-carte.png';
import ysport_filtres from '/images/projects/ysport-filtres.png';
import ysport_petit_cluster from '/images/projects/ysport-petit-cluster.png';
import ysport_grand_cluster from '/images/projects/ysport-grand-cluster.png';
import ysport_complexe from '/images/projects/ysport-complexe.png';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaMapMarkedAlt, FaFilter, FaLayerGroup, FaPlusCircle, FaCode } from 'react-icons/fa';
import '../../styles/projects/ysport.css';

const Ysport: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="ysport-container">
            <div className="ysport-return-wrapper">
                <ReturnButton />
            </div>

            {/* Header Map Themed */}
            <div className="ysport-header">
                <div className="ysport-header-bg"></div>
                <div className="ysport-header-content">
                    <div className="ysport-header-left">
                        <div className="ysport-header-badge">
                            <FaMapMarkedAlt /> Application Cartographique
                        </div>
                        <h1 className="ysport-header-title">
                            {t('project.ysport.title')}
                        </h1>
                        <p className="ysport-header-desc">
                            {t('project.ysport.desc')}
                        </p>
                    </div>
                </div>
            </div>

            <div className="ysport-main">
                
                {/* Intro & Tech */}
                <div className="ysport-intro-grid">
                    <div className="ysport-intro-card">
                        <p className="ysport-intro-text">
                            {t('project.ysport.introText')}
                        </p>
                    </div>
                    <div className="ysport-tech-card">
                        <h2 className="ysport-tech-title">
                            <FaCode className="text-cyan-600" /> {t('project.ysport.techTitle')}
                        </h2>
                        <ul className="ysport-tech-list">
                            {['React.js', 'Vite', t('project.ysport.techLeaflet'), t('project.ysport.techJava'), 'API REST', 'CSS / Bootstrap CSS'].map(tech => (
                                <li key={tech} className="ysport-tech-item">
                                    <div className="ysport-tech-dot"></div>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Map Feature */}
                <div className="ysport-feature-grid">
                    <div className="order-2 md:order-1">
                        <img src={ysport_carte} alt="Carte interactive" className="ysport-feature-img-card-map" />
                    </div>
                    <div className="space-y-6 order-1 md:order-2">
                        <div className="ysport-feature-icon-blue">
                            <FaMapMarkedAlt />
                        </div>
                        <h2 className="ysport-feature-title">{t('project.ysport.mapTitle')}</h2>
                        <p className="ysport-feature-desc">
                            {t('project.ysport.mapText')}
                        </p>
                    </div>
                </div>

                {/* Filter Feature */}
                <div className="ysport-feature-grid">
                    <div className="space-y-6">
                        <div className="ysport-feature-icon-purple">
                            <FaFilter />
                        </div>
                        <h2 className="ysport-feature-title">{t('project.ysport.filterTitle')}</h2>
                        <p className="ysport-feature-desc">
                            {t('project.ysport.filterText')}
                        </p>
                        <ul className="ysport-filter-list">
                            {[1, 2, 3].map(i => (
                                <li key={i} className="ysport-filter-item">
                                    <div className="ysport-filter-num">{i}</div>
                                    {t(`project.ysport.filterBullet${i}`)}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <img src={ysport_filtres} alt="Filtres" className="ysport-feature-img-card-filter" />
                    </div>
                </div>

                {/* Clusters Feature */}
                <div className="ysport-cluster-box">
                    <div className="ysport-cluster-header">
                        <div className="ysport-cluster-icon">
                            <FaLayerGroup />
                        </div>
                        <h2 className="ysport-cluster-title">{t('project.ysport.clusterTitle')}</h2>
                        <p className="ysport-cluster-desc">
                            {t('project.ysport.clusterText')}
                        </p>
                    </div>
                    
                    <div className="ysport-cluster-grid">
                        <div className="ysport-cluster-card">
                            <img src={ysport_petit_cluster} alt="Petit Cluster" className="ysport-cluster-img" />
                            <div className="ysport-cluster-label">Vue Rapprochée</div>
                        </div>
                        <div className="ysport-cluster-card">
                            <img src={ysport_grand_cluster} alt="Grand Cluster" className="ysport-cluster-img" />
                            <div className="ysport-cluster-label">Vue Globale</div>
                        </div>
                    </div>
                </div>

                {/* Extras Feature */}
                <div className="ysport-feature-grid-pb">
                    <div>
                        <img src={ysport_complexe} alt="Extras" className="ysport-feature-img-card-extra" />
                    </div>
                    <div className="space-y-6">
                        <div className="ysport-feature-icon-blue">
                            <FaPlusCircle />
                        </div>
                        <h2 className="ysport-feature-title">{t('project.ysport.extraTitle')}</h2>
                        <p className="ysport-feature-desc">
                            {t('project.ysport.extraText')}
                        </p>
                        <div className="ysport-extra-card">
                            {t('project.ysport.extraBullet1')}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Ysport;