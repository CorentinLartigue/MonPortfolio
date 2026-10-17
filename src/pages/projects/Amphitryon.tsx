import React, { useState } from 'react';
import amphitryon_acces from '/images/projects/amphitryon/acces.png';
import amphitryon_plats from '/images/projects/amphitryon/plats.png';
import amphitryon_plat_detail from '/images/projects/amphitryon/plat-detail.png';
import amphitryon_services from '/images/projects/amphitryon/services.png';
import amphitryon_plats_service from '/images/projects/amphitryon/plats-service.png';
import ProjectHero from '../../components/ProjectHero.tsx';
import ImageModal from '../../components/ImageModal.tsx';
import { useTranslate } from '../../hooks/useTranslate';
import { FaUtensils, FaConciergeBell, FaListAlt, FaSearchPlus } from 'react-icons/fa';
import '../../styles/projects/amphitryon.css';

interface ModalImage {
    src: string;
    title: string;
    desc?: string;
}

const AmphitryonPage: React.FC = () => {
    const { t } = useTranslate();
    const [selectedImage, setSelectedImage] = useState<ModalImage | null>(null);

    const openModal = (src: string, title: string, desc?: string) => {
        setSelectedImage({ src, title, desc });
    };

    return (
        <div className="amphitryon-container">
            <ProjectHero
                badgeIcon={<FaUtensils />}
                badgeLabel={t('project.amphitryon.badge')}
                title={t('project.amphitryon.title')}
                subtitle={t('project.amphitryon.subtitle')}
                description={t('project.amphitryon.desc')}
                techTags={['Android', 'Java', 'PHP', 'XML', 'Architecture MVC']}
                theme="amber"
            />

            <main className="amphitryon-main">
                
                {
                    // Introduction and role definitions
                }
                <section className="amphitryon-intro-section">
                    <header className="amphitryon-intro-header">
                        <h2>{t('project.amphitryon.introTitle')}</h2>
                        <p>
                            {t('project.amphitryon.introText')}
                        </p>
                    </header>

                    <div className="amphitryon-roles-grid">
                        <article className="amphitryon-role-card">
                            <FaConciergeBell />
                            <h3>{t('project.amphitryon.role1Title')}</h3>
                            <p>{t('project.amphitryon.role1Desc')}</p>
                        </article>
                        <article className="amphitryon-role-card">
                            <FaUtensils />
                            <h3>{t('project.amphitryon.role2Title')}</h3>
                            <p>{t('project.amphitryon.role2Desc')}</p>
                        </article>
                        <article className="amphitryon-role-card">
                            <FaListAlt />
                            <h3>{t('project.amphitryon.role3Title')}</h3>
                            <p>{t('project.amphitryon.role3Desc')}</p>
                        </article>
                    </div>
                </section>

                {
                    // Main application features
                }
                <section className="amphitryon-features-section">
                    <h2>{t('project.amphitryon.sectionTitle')}</h2>
                    
                    {
                        // Feature card 1
                    }
                    <article className="amphitryon-feature-card">
                        <figure className="amphitryon-feature-media-single">
                            <div
                                className="project-zoomable-container"
                                onClick={() => openModal(
                                    amphitryon_acces,
                                    t('project.amphitryon.card1Title'),
                                    t('project.amphitryon.card1Desc')
                                )}
                            >
                                <img
                                    src={amphitryon_acces}
                                    alt="Chef Cuisinier"
                                    className="project-zoomable-img"
                                />
                                <div className="project-zoomable-overlay">
                                    <FaSearchPlus />
                                    <span>{t('app.buttons.zoom')}</span>
                                </div>
                            </div>
                        </figure>
                        <div>
                            <h3>{t('project.amphitryon.card1Title')}</h3>
                            <p>
                                {t('project.amphitryon.card1Desc')}
                            </p>
                        </div>
                    </article>

                    {
                        // Feature card 2
                    }
                    <article className="amphitryon-feature-card-reverse">
                        <figure className="amphitryon-feature-img-pair">
                            <div
                                className="project-zoomable-container amphitryon-zoomable-half"
                                onClick={() => openModal(
                                    amphitryon_plats,
                                    t('project.amphitryon.card2Title'),
                                    t('project.amphitryon.card2Bullet1')
                                )}
                            >
                                <img
                                    src={amphitryon_plats}
                                    alt="Gestion des plats"
                                    className="project-zoomable-img"
                                />
                                <div className="project-zoomable-overlay">
                                    <FaSearchPlus />
                                    <span>{t('app.buttons.zoom')}</span>
                                </div>
                            </div>
                            <div
                                className="project-zoomable-container amphitryon-zoomable-half-offset"
                                onClick={() => openModal(
                                    amphitryon_plat_detail,
                                    t('project.amphitryon.card2Title'),
                                    t('project.amphitryon.card2Bullet3')
                                )}
                            >
                                <img
                                    src={amphitryon_plat_detail}
                                    alt="Détail"
                                    className="project-zoomable-img"
                                />
                                <div className="project-zoomable-overlay">
                                    <FaSearchPlus />
                                    <span>{t('app.buttons.zoom')}</span>
                                </div>
                            </div>
                        </figure>
                        <div>
                            <h3>{t('project.amphitryon.card2Title')}</h3>
                            <ul>
                                <li><span></span>{t('project.amphitryon.card2Bullet1')}</li>
                                <li><span></span>{t('project.amphitryon.card2Bullet2')}</li>
                                <li><span></span>{t('project.amphitryon.card2Bullet3')}</li>
                            </ul>
                        </div>
                    </article>

                    {
                        // Feature card 3
                    }
                    <article className="amphitryon-feature-card">
                        <figure className="amphitryon-feature-img-pair">
                            <div
                                className="project-zoomable-container amphitryon-zoomable-half"
                                onClick={() => openModal(
                                    amphitryon_services,
                                    t('project.amphitryon.card3Title'),
                                    t('project.amphitryon.card3Bullet1')
                                )}
                            >
                                <img
                                    src={amphitryon_services}
                                    alt="Gestion services"
                                    className="project-zoomable-img"
                                />
                                <div className="project-zoomable-overlay">
                                    <FaSearchPlus />
                                    <span>{t('app.buttons.zoom')}</span>
                                </div>
                            </div>
                            <div
                                className="project-zoomable-container amphitryon-zoomable-half-offset"
                                onClick={() => openModal(
                                    amphitryon_plats_service,
                                    t('project.amphitryon.card3Title'),
                                    t('project.amphitryon.card3Bullet2')
                                )}
                            >
                                <img
                                    src={amphitryon_plats_service}
                                    alt="Plats par service"
                                    className="project-zoomable-img"
                                />
                                <div className="project-zoomable-overlay">
                                    <FaSearchPlus />
                                    <span>{t('app.buttons.zoom')}</span>
                                </div>
                            </div>
                        </figure>
                        <div>
                            <h3>{t('project.amphitryon.card3Title')}</h3>
                            <ul>
                                <li><span></span>{t('project.amphitryon.card3Bullet1')}</li>
                                <li><span></span>{t('project.amphitryon.card3Bullet2')}</li>
                                <li><span></span>{t('project.amphitryon.card3Bullet3')}</li>
                            </ul>
                        </div>
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

export default AmphitryonPage;