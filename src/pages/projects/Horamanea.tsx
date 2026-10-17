import React, { useState } from 'react';
import ProjectHero from '../../components/ProjectHero.tsx';
import ImageModal from '../../components/ImageModal.tsx';
import { useTranslate } from '../../hooks/useTranslate';
import {
    FaPalette,
    FaSearchPlus,
    FaPaintBrush,
    FaStore,
    FaCalendarAlt
} from 'react-icons/fa';
import {
    SiAngular,
    SiTailwindcss,
    SiSpringboot,
    SiMysql,
    SiStripe,
    SiFigma
} from 'react-icons/si';

import horamaneaCouverture from '/images/projects/horamanea/couverture.png';
import horamaneaArtistes from '/images/projects/horamanea/artistes.png';
import horamaneaPrestations from '/images/projects/horamanea/prestations.png';
import horamaneaMea from '/images/projects/horamanea/mea.png';
import horamaneaMaquette from '/images/projects/horamanea/maquette.png';
import horamaneaTemplate from '/images/projects/horamanea/template.png';
import '../../styles/projects/horamanea.css';

interface ModalImage {
    src: string;
    title: string;
    desc: string;
}

const Horamanea: React.FC = () => {
    const { t } = useTranslate();
    const [selectedImage, setSelectedImage] = useState<ModalImage | null>(null);

    const openModal = (src: string, title: string, desc: string) => {
        setSelectedImage({ src, title, desc });
    };

    const techTags = [
        'Angular',
        'TypeScript',
        'Tailwind CSS',
        'Spring Boot',
        'MySQL',
        'Stripe',
        'Figma'
    ];

    return (
        <div className="horamanea-container">
            <ProjectHero
                badgeIcon={<FaPalette />}
                badgeLabel={t('project.horamanea.badge')}
                title={t('project.horamanea.title')}
                subtitle={t('project.horamanea.subtitle')}
                description={t('project.horamanea.desc')}
                techTags={techTags}
                theme="blue"
            />

            <main className="horamanea-main">
                {
                    // Collective artistic vision and platform objectives
                }
                <article className="horamanea-intro-card">
                    <h2>{t('project.horamanea.introTitle')}</h2>
                    <p>{t('project.horamanea.introText')}</p>
                </article>

                {
                    // Technical architecture and core stack bento grid
                }
                <section className="horamanea-bento-section">
                    <header className="horamanea-section-header">
                        <h2>{t('project.horamanea.bentoTitle')}</h2>
                        <p>{t('project.horamanea.bentoSubtitle')}</p>
                    </header>

                    <div className="horamanea-bento-grid">
                        <article>
                            <div className="horamanea-bento-icons">
                                <SiAngular />
                                <SiTailwindcss />
                            </div>
                            <h3>{t('project.horamanea.bentoFrontTitle')}</h3>
                            <p>{t('project.horamanea.bentoFrontDesc')}</p>
                        </article>

                        <article>
                            <div className="horamanea-bento-icons">
                                <SiSpringboot />
                            </div>
                            <h3>{t('project.horamanea.bentoBackTitle')}</h3>
                            <p>{t('project.horamanea.bentoBackDesc')}</p>
                        </article>

                        <article>
                            <div className="horamanea-bento-icons">
                                <SiMysql />
                                <SiStripe />
                            </div>
                            <h3>{t('project.horamanea.bentoDataTitle')}</h3>
                            <p>{t('project.horamanea.bentoDataDesc')}</p>
                        </article>

                        <article>
                            <div className="horamanea-bento-icons">
                                <SiFigma />
                            </div>
                            <h3>{t('project.horamanea.bentoDesignTitle')}</h3>
                            <p>{t('project.horamanea.bentoDesignDesc')}</p>
                        </article>
                    </div>
                </section>

                {
                    // Act I: Graphic design, wireframing and global template layout
                }
                <section className="horamanea-design-section">
                    <header className="horamanea-section-header">
                        <div className="horamanea-section-icon">
                            <SiFigma />
                        </div>
                        <div>
                            <h2>{t('project.horamanea.designSectionTitle')}</h2>
                            <p>{t('project.horamanea.designSectionSubtitle')}</p>
                        </div>
                    </header>

                    <div className="horamanea-design-grid">
                        <article className="horamanea-design-card">
                            <figure>
                                <div
                                    className="project-zoomable-container"
                                    onClick={() => openModal(
                                        horamaneaMaquette,
                                        t('project.horamanea.screenMockupTitle'),
                                        t('project.horamanea.screenMockupDesc')
                                    )}
                                >
                                    <img
                                        src={horamaneaMaquette}
                                        alt={t('project.horamanea.screenMockupTitle')}
                                        className="project-zoomable-img"
                                    />
                                    <div className="project-zoomable-overlay">
                                        <FaSearchPlus />
                                        <span>{t('project.horamanea.btnZoom')}</span>
                                    </div>
                                </div>
                                <figcaption>
                                    <span className="horamanea-badge-pill">{t('project.horamanea.tagFigma')}</span>
                                    <h3>{t('project.horamanea.screenMockupTitle')}</h3>
                                    <p>{t('project.horamanea.screenMockupDesc')}</p>
                                </figcaption>
                            </figure>
                        </article>

                        <article className="horamanea-design-card">
                            <figure>
                                <div
                                    className="project-zoomable-container"
                                    onClick={() => openModal(
                                        horamaneaTemplate,
                                        t('project.horamanea.screenTemplateTitle'),
                                        t('project.horamanea.screenTemplateDesc')
                                    )}
                                >
                                    <img
                                        src={horamaneaTemplate}
                                        alt={t('project.horamanea.screenTemplateTitle')}
                                        className="project-zoomable-img"
                                    />
                                    <div className="project-zoomable-overlay">
                                        <FaSearchPlus />
                                        <span>{t('project.horamanea.btnZoom')}</span>
                                    </div>
                                </div>
                                <figcaption>
                                    <span className="horamanea-badge-pill">{t('project.horamanea.tagTemplate')}</span>
                                    <h3>{t('project.horamanea.screenTemplateTitle')}</h3>
                                    <p>{t('project.horamanea.screenTemplateDesc')}</p>
                                </figcaption>
                            </figure>
                        </article>
                    </div>
                </section>

                {
                    // Act II: Live platform, panoramic browser hero and core feature workflows
                }
                <section className="horamanea-live-section">
                    <header className="horamanea-section-header">
                        <div className="horamanea-section-icon">
                            <FaPaintBrush />
                        </div>
                        <div>
                            <h2>{t('project.horamanea.liveSectionTitle')}</h2>
                            <p>{t('project.horamanea.liveSectionSubtitle')}</p>
                        </div>
                    </header>

                    {
                        // Panoramic browser hero showing homepage carousel
                    }
                    <article className="horamanea-panoramic-card">
                        <div className="horamanea-browser-frame">
                            <div className="horamanea-browser-bar">
                                <div className="horamanea-browser-dots">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span className="horamanea-browser-url">horamanea.fr</span>
                            </div>

                            <figure
                                className="project-zoomable-container"
                                onClick={() => openModal(
                                    horamaneaCouverture,
                                    t('project.horamanea.screenCoverTitle'),
                                    t('project.horamanea.screenCoverDesc')
                                )}
                            >
                                <img
                                    src={horamaneaCouverture}
                                    alt={t('project.horamanea.screenCoverTitle')}
                                    className="project-zoomable-img"
                                />
                                <div className="project-zoomable-overlay">
                                    <FaSearchPlus />
                                    <span>{t('project.horamanea.btnZoom')}</span>
                                </div>
                            </figure>
                        </div>

                        <div className="horamanea-panoramic-info">
                            <span className="horamanea-badge-pill">{t('project.horamanea.panoramicBadge')}</span>
                            <h3>{t('project.horamanea.screenCoverTitle')}</h3>
                            <p>{t('project.horamanea.screenCoverDesc')}</p>
                        </div>
                    </article>

                    {
                        // Functional triptych: artists, custom services and events
                    }
                    <div className="horamanea-triptych-grid">
                        <article className="horamanea-triptych-card">
                            <figure
                                className="project-zoomable-container"
                                onClick={() => openModal(
                                    horamaneaArtistes,
                                    t('project.horamanea.screenArtistsTitle'),
                                    t('project.horamanea.screenArtistsDesc')
                                )}
                            >
                                <img
                                    src={horamaneaArtistes}
                                    alt={t('project.horamanea.screenArtistsTitle')}
                                    className="project-zoomable-img"
                                />
                                <div className="project-zoomable-overlay">
                                    <FaSearchPlus />
                                    <span>{t('project.horamanea.btnZoom')}</span>
                                </div>
                            </figure>
                            <div className="horamanea-card-meta">
                                <header>
                                    <FaPaintBrush />
                                    <span>{t('project.horamanea.tagArtists')}</span>
                                </header>
                                <h3>{t('project.horamanea.screenArtistsTitle')}</h3>
                                <p>{t('project.horamanea.screenArtistsDesc')}</p>
                            </div>
                        </article>

                        <article className="horamanea-triptych-card">
                            <figure
                                className="project-zoomable-container"
                                onClick={() => openModal(
                                    horamaneaPrestations,
                                    t('project.horamanea.screenServicesTitle'),
                                    t('project.horamanea.screenServicesDesc')
                                )}
                            >
                                <img
                                    src={horamaneaPrestations}
                                    alt={t('project.horamanea.screenServicesTitle')}
                                    className="project-zoomable-img"
                                />
                                <div className="project-zoomable-overlay">
                                    <FaSearchPlus />
                                    <span>{t('project.horamanea.btnZoom')}</span>
                                </div>
                            </figure>
                            <div className="horamanea-card-meta">
                                <header>
                                    <FaStore />
                                    <span>{t('project.horamanea.tagServices')}</span>
                                </header>
                                <h3>{t('project.horamanea.screenServicesTitle')}</h3>
                                <p>{t('project.horamanea.screenServicesDesc')}</p>
                            </div>
                        </article>

                        <article className="horamanea-triptych-card">
                            <figure
                                className="project-zoomable-container"
                                onClick={() => openModal(
                                    horamaneaMea,
                                    t('project.horamanea.screenEventsTitle'),
                                    t('project.horamanea.screenEventsDesc')
                                )}
                            >
                                <img
                                    src={horamaneaMea}
                                    alt={t('project.horamanea.screenEventsTitle')}
                                    className="project-zoomable-img"
                                />
                                <div className="project-zoomable-overlay">
                                    <FaSearchPlus />
                                    <span>{t('project.horamanea.btnZoom')}</span>
                                </div>
                            </figure>
                            <div className="horamanea-card-meta">
                                <header>
                                    <FaCalendarAlt />
                                    <span>{t('project.horamanea.tagEvents')}</span>
                                </header>
                                <h3>{t('project.horamanea.screenEventsTitle')}</h3>
                                <p>{t('project.horamanea.screenEventsDesc')}</p>
                            </div>
                        </article>
                    </div>
                </section>
            </main>

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

export default Horamanea;
