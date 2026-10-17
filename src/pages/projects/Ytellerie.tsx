import React, { useState } from 'react';
import ProjectHero from '../../components/ProjectHero.tsx';
import ImageModal from '../../components/ImageModal.tsx';
import { useTranslate } from '../../hooks/useTranslate';
import {
    FaGithub,
    FaSearchPlus,
    FaUsers,
    FaAngular,
    FaDocker,
    FaServer
} from 'react-icons/fa';
import { SiNestjs } from 'react-icons/si';

import ytellerieClient from '/images/projects/ytellerie/client.png';
import ytellerieGestionReservation from '/images/projects/ytellerie/gestion-reservation.png';
import ytelleriePaiement from '/images/projects/ytellerie/paiement.png';
import ytellerieFacturation from '/images/projects/ytellerie/facturation.png';
import ytellerieAdmin from '/images/projects/ytellerie/admin.png';
import ytellerieMessagerie from '/images/projects/ytellerie/messagerie.png';
import ytellerieBoundedContext from '/images/projects/ytellerie/bounded_context.png';
import ytellerieC4N1 from '/images/projects/ytellerie/diagramme-C4-niveau1.png';
import ytellerieC4N2 from '/images/projects/ytellerie/diagramme-C4-niveau2.png';
import ytellerieC4N3 from '/images/projects/ytellerie/diagramme-C4-niveau3.png';
import '../../styles/projects/ytellerie.css';

interface ModalImage {
    src: string;
    title: string;
    desc: string;
}

const Ytellerie: React.FC = () => {
    const { t } = useTranslate();
    const [selectedImage, setSelectedImage] = useState<ModalImage | null>(null);

    const openModal = (src: string, title: string, desc: string) => {
        setSelectedImage({ src, title, desc });
    };

    const techTags = [
        'Angular',
        'NestJS',
        'TypeScript',
        'PostgreSQL',
        'TypeORM',
        'Docker',
        'Nginx',
        'Stripe',
        'Mailjet',
        'Swagger',
        'Architecture Hexagonale',
        'DDD'
    ];

    return (
        <div className="ytellerie-container">
            <ProjectHero
                badgeIcon={<FaUsers />}
                badgeLabel={t('project.ytellerie.badge')}
                title={t('project.ytellerie.title')}
                subtitle={t('project.ytellerie.subtitle')}
                description={t('project.ytellerie.desc')}
                techTags={techTags}
                theme="amber"
                actions={
                    <a
                        href="https://github.com/Ynov-projects-CYCA/Y.tellerie"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub /> <span>{t('project.ytellerie.btnSource')}</span>
                    </a>
                }
            />

            <main className="ytellerie-main">
                {
                    // Academic context overview and team dynamic
                }
                <article className="ytellerie-intro-card">
                    <h2>{t('project.ytellerie.introTitle')}</h2>
                    <p>{t('project.ytellerie.introText')}</p>
                </article>

                {
                    // Team responsibilities distribution across 4 developers
                }
                <section className="ytellerie-team-section">
                    <h2>{t('project.ytellerie.teamTitle')}</h2>
                    <div className="ytellerie-team-grid">
                        <article>
                            <div>
                                <SiNestjs />
                            </div>
                            <h3>{t('project.ytellerie.team1Title')}</h3>
                            <p>{t('project.ytellerie.team1Desc')}</p>
                        </article>

                        <article>
                            <div>
                                <FaAngular />
                            </div>
                            <h3>{t('project.ytellerie.team2Title')}</h3>
                            <p>{t('project.ytellerie.team2Desc')}</p>
                        </article>

                        <article>
                            <div>
                                <FaServer />
                            </div>
                            <h3>{t('project.ytellerie.team3Title')}</h3>
                            <p>{t('project.ytellerie.team3Desc')}</p>
                        </article>

                        <article>
                            <div>
                                <FaDocker />
                            </div>
                            <h3>{t('project.ytellerie.team4Title')}</h3>
                            <p>{t('project.ytellerie.team4Desc')}</p>
                        </article>
                    </div>
                </section>

                {
                    // C4 Model architecture and DDD bounded contexts
                }
                <section className="ytellerie-c4-section">
                    <h2>{t('project.ytellerie.c4Title')}</h2>
                    <p>{t('project.ytellerie.c4Desc')}</p>

                    <div className="ytellerie-c4-grid">
                        <article>
                            <figure>
                                <div
                                    className="project-zoomable-container"
                                    onClick={() => openModal(
                                        ytellerieBoundedContext,
                                        t('project.ytellerie.c4BddTitle'),
                                        t('project.ytellerie.c4BddDesc')
                                    )}
                                >
                                    <img
                                        src={ytellerieBoundedContext}
                                        alt={t('project.ytellerie.c4BddTitle')}
                                        className="project-zoomable-img"
                                    />
                                    <div className="project-zoomable-overlay">
                                        <FaSearchPlus />
                                        <span>{t('project.ytellerie.btnZoom')}</span>
                                    </div>
                                </div>
                                <figcaption>
                                    <h3>{t('project.ytellerie.c4BddCaptionTitle')}</h3>
                                    <p>{t('project.ytellerie.c4BddCaptionDesc')}</p>
                                </figcaption>
                            </figure>
                        </article>

                        <article>
                            <figure>
                                <div
                                    className="project-zoomable-container"
                                    onClick={() => openModal(
                                        ytellerieC4N1,
                                        t('project.ytellerie.c4N1Title'),
                                        t('project.ytellerie.c4N1Desc')
                                    )}
                                >
                                    <img
                                        src={ytellerieC4N1}
                                        alt={t('project.ytellerie.c4N1Title')}
                                        className="project-zoomable-img"
                                    />
                                    <div className="project-zoomable-overlay">
                                        <FaSearchPlus />
                                        <span>{t('project.ytellerie.btnZoom')}</span>
                                    </div>
                                </div>
                                <figcaption>
                                    <h3>{t('project.ytellerie.c4N1CaptionTitle')}</h3>
                                    <p>{t('project.ytellerie.c4N1CaptionDesc')}</p>
                                </figcaption>
                            </figure>
                        </article>

                        <article>
                            <figure>
                                <div
                                    className="project-zoomable-container"
                                    onClick={() => openModal(
                                        ytellerieC4N2,
                                        t('project.ytellerie.c4N2Title'),
                                        t('project.ytellerie.c4N2Desc')
                                    )}
                                >
                                    <img
                                        src={ytellerieC4N2}
                                        alt={t('project.ytellerie.c4N2Title')}
                                        className="project-zoomable-img"
                                    />
                                    <div className="project-zoomable-overlay">
                                        <FaSearchPlus />
                                        <span>{t('project.ytellerie.btnZoom')}</span>
                                    </div>
                                </div>
                                <figcaption>
                                    <h3>{t('project.ytellerie.c4N2CaptionTitle')}</h3>
                                    <p>{t('project.ytellerie.c4N2CaptionDesc')}</p>
                                </figcaption>
                            </figure>
                        </article>

                        <article>
                            <figure>
                                <div
                                    className="project-zoomable-container"
                                    onClick={() => openModal(
                                        ytellerieC4N3,
                                        t('project.ytellerie.c4N3Title'),
                                        t('project.ytellerie.c4N3Desc')
                                    )}
                                >
                                    <img
                                        src={ytellerieC4N3}
                                        alt={t('project.ytellerie.c4N3Title')}
                                        className="project-zoomable-img"
                                    />
                                    <div className="project-zoomable-overlay">
                                        <FaSearchPlus />
                                        <span>{t('project.ytellerie.btnZoom')}</span>
                                    </div>
                                </div>
                                <figcaption>
                                    <h3>{t('project.ytellerie.c4N3CaptionTitle')}</h3>
                                    <p>{t('project.ytellerie.c4N3CaptionDesc')}</p>
                                </figcaption>
                            </figure>
                        </article>
                    </div>
                </section>

                {
                    // Core features and real screenshots section
                }
                <section className="ytellerie-features-section">
                    <h2>{t('project.ytellerie.screensSectionTitle')}</h2>
                    <div className="ytellerie-features-grid">
                        <article className="ytellerie-feature-card">
                            <header>
                                <h3>{t('project.ytellerie.cardClientTitle')}</h3>
                                <p>{t('project.ytellerie.cardClientDesc')}</p>
                            </header>
                            <div className="ytellerie-screens-grid">
                                <figure>
                                    <div
                                        className="project-zoomable-container"
                                        onClick={() => openModal(
                                            ytellerieClient,
                                            t('project.ytellerie.screenClientTitle'),
                                            t('project.ytellerie.screenClientDesc')
                                        )}
                                    >
                                        <img
                                            src={ytellerieClient}
                                            alt={t('project.ytellerie.screenClientTitle')}
                                            className="project-zoomable-img"
                                        />
                                        <div className="project-zoomable-overlay">
                                            <FaSearchPlus />
                                            <span>{t('project.ytellerie.btnZoom')}</span>
                                        </div>
                                    </div>
                                    <figcaption>{t('project.ytellerie.screenClientCaption')}</figcaption>
                                </figure>

                                <figure>
                                    <div
                                        className="project-zoomable-container"
                                        onClick={() => openModal(
                                            ytelleriePaiement,
                                            t('project.ytellerie.screenPaymentTitle'),
                                            t('project.ytellerie.screenPaymentDesc')
                                        )}
                                    >
                                        <img
                                            src={ytelleriePaiement}
                                            alt={t('project.ytellerie.screenPaymentTitle')}
                                            className="project-zoomable-img"
                                        />
                                        <div className="project-zoomable-overlay">
                                            <FaSearchPlus />
                                            <span>{t('project.ytellerie.btnZoom')}</span>
                                        </div>
                                    </div>
                                    <figcaption>{t('project.ytellerie.screenPaymentCaption')}</figcaption>
                                </figure>

                                <figure>
                                    <div
                                        className="project-zoomable-container"
                                        onClick={() => openModal(
                                            ytellerieFacturation,
                                            t('project.ytellerie.screenBillingTitle'),
                                            t('project.ytellerie.screenBillingDesc')
                                        )}
                                    >
                                        <img
                                            src={ytellerieFacturation}
                                            alt={t('project.ytellerie.screenBillingTitle')}
                                            className="project-zoomable-img"
                                        />
                                        <div className="project-zoomable-overlay">
                                            <FaSearchPlus />
                                            <span>{t('project.ytellerie.btnZoom')}</span>
                                        </div>
                                    </div>
                                    <figcaption>{t('project.ytellerie.screenBillingCaption')}</figcaption>
                                </figure>
                            </div>
                        </article>

                        <article className="ytellerie-feature-card">
                            <header>
                                <h3>{t('project.ytellerie.cardStaffTitle')}</h3>
                                <p>{t('project.ytellerie.cardStaffDesc')}</p>
                            </header>
                            <div className="ytellerie-screens-grid">
                                <figure>
                                    <div
                                        className="project-zoomable-container"
                                        onClick={() => openModal(
                                            ytellerieAdmin,
                                            t('project.ytellerie.screenAdminTitle'),
                                            t('project.ytellerie.screenAdminDesc')
                                        )}
                                    >
                                        <img
                                            src={ytellerieAdmin}
                                            alt={t('project.ytellerie.screenAdminTitle')}
                                            className="project-zoomable-img"
                                        />
                                        <div className="project-zoomable-overlay">
                                            <FaSearchPlus />
                                            <span>{t('project.ytellerie.btnZoom')}</span>
                                        </div>
                                    </div>
                                    <figcaption>{t('project.ytellerie.screenAdminCaption')}</figcaption>
                                </figure>

                                <figure>
                                    <div
                                        className="project-zoomable-container"
                                        onClick={() => openModal(
                                            ytellerieGestionReservation,
                                            t('project.ytellerie.screenReservationsTitle'),
                                            t('project.ytellerie.screenReservationsDesc')
                                        )}
                                    >
                                        <img
                                            src={ytellerieGestionReservation}
                                            alt={t('project.ytellerie.screenReservationsTitle')}
                                            className="project-zoomable-img"
                                        />
                                        <div className="project-zoomable-overlay">
                                            <FaSearchPlus />
                                            <span>{t('project.ytellerie.btnZoom')}</span>
                                        </div>
                                    </div>
                                    <figcaption>{t('project.ytellerie.screenReservationsCaption')}</figcaption>
                                </figure>

                                <figure>
                                    <div
                                        className="project-zoomable-container"
                                        onClick={() => openModal(
                                            ytellerieMessagerie,
                                            t('project.ytellerie.screenMessagingTitle'),
                                            t('project.ytellerie.screenMessagingDesc')
                                        )}
                                    >
                                        <img
                                            src={ytellerieMessagerie}
                                            alt={t('project.ytellerie.screenMessagingTitle')}
                                            className="project-zoomable-img"
                                        />
                                        <div className="project-zoomable-overlay">
                                            <FaSearchPlus />
                                            <span>{t('project.ytellerie.btnZoom')}</span>
                                        </div>
                                    </div>
                                    <figcaption>{t('project.ytellerie.screenMessagingCaption')}</figcaption>
                                </figure>
                            </div>
                        </article>
                    </div>
                </section>
            </main>

            <ImageModal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                src={selectedImage?.src || ''}
                title={selectedImage?.title || ''}
                desc={selectedImage?.desc}
            />
        </div>
    );
};

export default Ytellerie;
