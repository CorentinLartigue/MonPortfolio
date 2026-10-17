import React, { useState } from 'react';
import M2L_statique_ligue from '/images/projects/m2l/statique-ligue.png';
import M2L_dynamique_ligue from '/images/projects/m2l/dynamique-ligue.png';
import M2L_trello from '/images/projects/m2l/trello.png';
import ProjectHero from '../../components/ProjectHero.tsx';
import ImageModal from '../../components/ImageModal.tsx';
import { useTranslate } from '../../hooks/useTranslate';
import { FaRunning, FaDesktop, FaServer, FaTasks, FaSearchPlus } from 'react-icons/fa';
import '../../styles/projects/m2l.css';

interface ModalImage {
    src: string;
    title: string;
    desc?: string;
}

const M2L: React.FC = () => {
    const { t } = useTranslate();
    const [selectedImage, setSelectedImage] = useState<ModalImage | null>(null);

    const openModal = (src: string, title: string, desc?: string) => {
        setSelectedImage({ src, title, desc });
    };

    return (
        <div className="m2l-page">
            <ProjectHero
                badgeIcon={<FaRunning />}
                badgeLabel={t('project.m2l.badge')}
                title={t('project.m2l.title')}
                subtitle={t('project.m2l.subtitle')}
                description={t('project.m2l.introText')}
                techTags={['PHP', 'HTML5', 'CSS3', 'Figma', 'Trello', 'Refonte dynamique']}
                theme="cyan"
            />

            <main className="m2l-main-content">
                {
                    // Project context and academic presentation
                }
                <article className="m2l-intro-card">
                    <h2>{t('project.m2l.introTitle')}</h2>
                    <p>{t('project.m2l.introText')}</p>
                </article>

                {
                    // Architectural comparison section
                }
                <section className="m2l-compare-section">
                    <h2>{t('project.m2l.compareTitle')}</h2>
                    
                    <div className="m2l-compare-grid">
                        {
                            // Static site card
                        }
                        <article className="m2l-compare-card">
                            <header className="m2l-card-header-static">
                                <FaDesktop />
                                <h3>{t('project.m2l.staticTitle')}</h3>
                            </header>
                            <div>
                                <figure
                                    className="project-zoomable-container"
                                    onClick={() => openModal(
                                        M2L_statique_ligue,
                                        t('project.m2l.staticTitle'),
                                        t('project.m2l.staticText')
                                    )}
                                >
                                    <img
                                        src={M2L_statique_ligue}
                                        alt="Site statique"
                                        className="project-zoomable-img"
                                    />
                                    <div className="project-zoomable-overlay">
                                        <FaSearchPlus />
                                        <span>{t('app.buttons.zoom')}</span>
                                    </div>
                                </figure>
                                <p>{t('project.m2l.staticText')}</p>
                                <ul>
                                    {[1, 2, 3, 4].map(i => (
                                        <li key={i}>
                                            <span></span>
                                            <span>{t(`project.m2l.staticBullet${i}`)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>

                        {
                            // Dynamic site card
                        }
                        <article className="m2l-compare-card">
                            <header className="m2l-card-header-dynamic">
                                <FaServer />
                                <h3>{t('project.m2l.dynamicTitle')}</h3>
                            </header>
                            <div>
                                <figure
                                    className="project-zoomable-container"
                                    onClick={() => openModal(
                                        M2L_dynamique_ligue,
                                        t('project.m2l.dynamicTitle'),
                                        t('project.m2l.dynamicText')
                                    )}
                                >
                                    <img
                                        src={M2L_dynamique_ligue}
                                        alt="Site dynamique"
                                        className="project-zoomable-img"
                                    />
                                    <div className="project-zoomable-overlay">
                                        <FaSearchPlus />
                                        <span>{t('app.buttons.zoom')}</span>
                                    </div>
                                </figure>
                                <p>{t('project.m2l.dynamicText')}</p>
                                <ul>
                                    {[1, 2, 3, 4].map(i => (
                                        <li key={i}>
                                            <span></span>
                                            <span>{t(`project.m2l.dynamicBullet${i}`)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    </div>
                </section>

                {
                    // Technology stack comparison
                }
                <section className="m2l-tech-grid">
                    <article className="m2l-tech-box-static">
                        <h3>{t('project.m2l.staticTitle')} Stack</h3>
                        <ul>
                            {[t('project.m2l.techStatic1'), t('project.m2l.techStatic2'), t('project.m2l.techStatic3')].map(tech => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>
                    </article>
                    <article className="m2l-tech-box-dynamic">
                        <h3>{t('project.m2l.dynamicTitle')} Stack</h3>
                        <ul>
                            {[t('project.m2l.techDynamic1'), t('project.m2l.techDynamic2'), t('project.m2l.techDynamic3')].map(tech => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>
                    </article>
                </section>

                {
                    // Project management methodology
                }
                <section className="m2l-method-card">
                    <span className="m2l-method-badge">
                        <FaTasks />
                    </span>
                    <h2>{t('project.m2l.methodTitle')}</h2>
                    <figure
                        className="project-zoomable-container"
                        onClick={() => openModal(
                            M2L_trello,
                            t('project.m2l.methodTitle'),
                            t('project.m2l.methodText')
                        )}
                    >
                        <img
                            src={M2L_trello}
                            alt="Trello"
                            className="project-zoomable-img"
                        />
                        <div className="project-zoomable-overlay">
                            <FaSearchPlus />
                            <span>{t('app.buttons.zoom')}</span>
                        </div>
                    </figure>
                    <p>
                        {t('project.m2l.methodText')}
                    </p>
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

export default M2L;