import React, { useState } from 'react';
import ysport_carte from '/images/projects/ysport/carte.png';
import ysport_filtres from '/images/projects/ysport/filtres.png';
import ysport_petit_cluster from '/images/projects/ysport/petit-cluster.png';
import ysport_grand_cluster from '/images/projects/ysport/grand-cluster.png';
import ysport_complexe from '/images/projects/ysport/complexe.png';
import ProjectHero from '../../components/ProjectHero.tsx';
import ImageModal from '../../components/ImageModal.tsx';
import { useTranslate } from '../../hooks/useTranslate';
import {
    FaMapMarkedAlt, FaFilter, FaLayerGroup,
    FaPlusCircle, FaSearchPlus
} from 'react-icons/fa';
import '../../styles/projects/ysport.css';

interface ModalImage {
    src: string;
    title: string;
    desc?: string;
}

const Ysport: React.FC = () => {
    const { t } = useTranslate();
    const [selectedImage, setSelectedImage] = useState<ModalImage | null>(null);

    const openModal = (src: string, title: string, desc?: string) => {
        setSelectedImage({ src, title, desc });
    };

    return (
        <div className="ysport-container">
            <ProjectHero
                badgeIcon={<FaMapMarkedAlt />}
                badgeLabel={t('project.ysport.badge')}
                title={t('project.ysport.title')}
                subtitle={t('project.ysport.subtitle')}
                description={t('project.ysport.introText')}
                techTags={['React', 'SpringBoot', 'Leaflet', 'Bootstrap', 'API Gouvernementale', 'Figma']}
                theme="cyan"
            />

            <main className="ysport-main">
                {
                    // Map feature presentation
                }
                <section className="ysport-feature-grid">
                    <figure>
                        <div
                            className="project-zoomable-container"
                            onClick={() => openModal(
                                ysport_carte,
                                t('project.ysport.mapTitle'),
                                t('project.ysport.mapText')
                            )}
                        >
                            <img
                                src={ysport_carte}
                                alt={t('project.ysport.mapTitle')}
                                className="project-zoomable-img"
                            />
                            <div className="project-zoomable-overlay">
                                <FaSearchPlus />
                                <span>{t('app.buttons.zoom')}</span>
                            </div>
                        </div>
                    </figure>
                    <article>
                        <span>
                            <FaMapMarkedAlt />
                        </span>
                        <h2>{t('project.ysport.mapTitle')}</h2>
                        <p>
                            {t('project.ysport.mapText')}
                        </p>
                    </article>
                </section>

                {
                    // Filter feature presentation
                }
                <section className="ysport-feature-grid">
                    <article>
                        <span>
                            <FaFilter />
                        </span>
                        <h2>{t('project.ysport.filterTitle')}</h2>
                        <p>
                            {t('project.ysport.filterText')}
                        </p>
                        <ul>
                            {[1, 2, 3].map(i => (
                                <li key={i}>
                                    <span>{i}</span>
                                    {t(`project.ysport.filterBullet${i}`)}
                                </li>
                            ))}
                        </ul>
                    </article>
                    <figure>
                        <div
                            className="project-zoomable-container"
                            onClick={() => openModal(
                                ysport_filtres,
                                t('project.ysport.filterTitle'),
                                t('project.ysport.filterText')
                            )}
                        >
                            <img
                                src={ysport_filtres}
                                alt={t('project.ysport.filterTitle')}
                                className="project-zoomable-img"
                            />
                            <div className="project-zoomable-overlay">
                                <FaSearchPlus />
                                <span>{t('app.buttons.zoom')}</span>
                            </div>
                        </div>
                    </figure>
                </section>

                {
                    // Geographic cluster grouping feature
                }
                <section className="ysport-cluster-box">
                    <header className="ysport-cluster-header">
                        <div className="ysport-cluster-icon">
                            <FaLayerGroup />
                        </div>
                        <h2>{t('project.ysport.clusterTitle')}</h2>
                        <p>
                            {t('project.ysport.clusterText')}
                        </p>
                    </header>
                    
                    <div className="ysport-cluster-grid">
                        <article className="ysport-cluster-card">
                            <figure>
                                <div
                                    className="project-zoomable-container"
                                    onClick={() => openModal(
                                        ysport_petit_cluster,
                                        'Vue Rapprochée - Cluster',
                                        t('project.ysport.clusterText')
                                    )}
                                >
                                    <img
                                        src={ysport_petit_cluster}
                                        alt="Petit Cluster"
                                        className="project-zoomable-img"
                                    />
                                    <div className="project-zoomable-overlay">
                                        <FaSearchPlus />
                                        <span>{t('app.buttons.zoom')}</span>
                                    </div>
                                </div>
                                <figcaption className="ysport-cluster-label">Vue Rapprochée</figcaption>
                            </figure>
                        </article>
                        <article className="ysport-cluster-card">
                            <figure>
                                <div
                                    className="project-zoomable-container"
                                    onClick={() => openModal(
                                        ysport_grand_cluster,
                                        'Vue Globale - Cluster',
                                        t('project.ysport.clusterText')
                                    )}
                                >
                                    <img
                                        src={ysport_grand_cluster}
                                        alt="Grand Cluster"
                                        className="project-zoomable-img"
                                    />
                                    <div className="project-zoomable-overlay">
                                        <FaSearchPlus />
                                        <span>{t('app.buttons.zoom')}</span>
                                    </div>
                                </div>
                                <figcaption className="ysport-cluster-label">Vue Globale</figcaption>
                            </figure>
                        </article>
                    </div>
                </section>

                {
                    // Additional facilities feature
                }
                <section className="ysport-feature-grid-pb">
                    <figure>
                        <div
                            className="project-zoomable-container"
                            onClick={() => openModal(
                                ysport_complexe,
                                t('project.ysport.extraTitle'),
                                t('project.ysport.extraText')
                            )}
                        >
                            <img
                                src={ysport_complexe}
                                alt={t('project.ysport.extraTitle')}
                                className="project-zoomable-img"
                            />
                            <div className="project-zoomable-overlay">
                                <FaSearchPlus />
                                <span>{t('app.buttons.zoom')}</span>
                            </div>
                        </div>
                    </figure>
                    <article>
                        <span>
                            <FaPlusCircle />
                        </span>
                        <h2>{t('project.ysport.extraTitle')}</h2>
                        <p>
                            {t('project.ysport.extraText')}
                        </p>
                        <aside className="ysport-extra-card">
                            {t('project.ysport.extraBullet1')}
                        </aside>
                    </article>
                </section>
            </main>

            {
                // High definition modal viewer
            }
            <ImageModal
                isOpen={!!selectedImage}
                src={selectedImage?.src || ''}
                title={selectedImage?.title || ''}
                desc={selectedImage?.desc}
                onClose={() => setSelectedImage(null)}
            />
        </div>
    );
};

export default Ysport;