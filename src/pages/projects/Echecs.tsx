import React, { useState } from 'react';
import echecs_regles from '/images/projects/echecs/regles.png';
import echecs_jeux from '/images/projects/echecs/jeux.png';
import ProjectHero from '../../components/ProjectHero.tsx';
import ImageModal from '../../components/ImageModal.tsx';
import { useTranslate } from '../../hooks/useTranslate';
import {
    FaChessKnight, FaChessBoard, FaTrophy,
    FaLightbulb, FaSearchPlus
} from 'react-icons/fa';
import '../../styles/projects/echecs.css';

interface ModalImage {
    src: string;
    title: string;
    desc?: string;
}

const Echecs: React.FC = () => {
    const { t } = useTranslate();
    const [selectedImage, setSelectedImage] = useState<ModalImage | null>(null);

    const openModal = (src: string, title: string, desc?: string) => {
        setSelectedImage({ src, title, desc });
    };

    return (
        <div className="echecs-page">
            <ProjectHero
                badgeIcon={<FaChessKnight />}
                badgeLabel={t('project.echecs.badge')}
                title={t('project.echecs.title')}
                subtitle={t('project.echecs.subtitle')}
                description={t('project.echecs.desc')}
                techTags={['React', 'TypeScript', 'Tailwind CSS', "Algorithmique d'échecs", 'GitHub']}
                theme="blue"
            />

            <main className="echecs-main-content">
                
                {
                    // About and game preview
                }
                <article className="echecs-about-card">
                    <div>
                        <header>
                            <FaChessBoard />
                            <h2>{t('project.echecs.aboutTitle')}</h2>
                        </header>
                        <p>
                            {t('project.echecs.aboutText')}
                        </p>
                    </div>
                    <figure>
                        <div
                            className="project-zoomable-container"
                            onClick={() => openModal(
                                echecs_jeux,
                                t('project.echecs.aboutTitle'),
                                t('project.echecs.aboutText')
                            )}
                        >
                            <img
                                src={echecs_jeux}
                                alt="Plateau de jeu"
                                className="project-zoomable-img"
                            />
                            <div className="project-zoomable-overlay">
                                <FaSearchPlus />
                                <span>{t('app.buttons.zoom')}</span>
                            </div>
                        </div>
                    </figure>
                </article>

                {
                    // Game feature rules and logic
                }
                <section className="echecs-features-section">
                    <h2>{t('project.echecs.featuresTitle')}</h2>
                    <div className="echecs-features-grid">
                        <div className="echecs-features-list">
                            {[
                                { title: t('project.echecs.feature1Title'), text: t('project.echecs.feature1Text') },
                                { title: t('project.echecs.feature2Title'), text: t('project.echecs.feature2Text') },
                                { title: t('project.echecs.feature3Title'), text: t('project.echecs.feature3Text') },
                                { title: t('project.echecs.feature4Title'), text: t('project.echecs.feature4Text') }
                            ].map((feat, i) => (
                                <article key={i} className="echecs-feature-item">
                                    <span>0{i+1}.</span>
                                    <div>
                                        <h3>{feat.title}</h3>
                                        <p>{feat.text}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                        <figure>
                            <div
                                className="project-zoomable-container"
                                onClick={() => openModal(
                                    echecs_regles,
                                    t('project.echecs.featuresTitle'),
                                    t('project.echecs.feature2Text')
                                )}
                            >
                                <img
                                    src={echecs_regles}
                                    alt="Règles"
                                    className="project-zoomable-img"
                                />
                                <div className="project-zoomable-overlay">
                                    <FaSearchPlus />
                                    <span>{t('app.buttons.zoom')}</span>
                                </div>
                            </div>
                        </figure>
                    </div>
                </section>

                {
                    // Technical challenges and key learnings
                }
                <section className="echecs-challenges-grid">
                    <article className="echecs-challenges-card">
                        <header>
                            <FaTrophy />
                            <h2>{t('project.echecs.challengesTitle')}</h2>
                        </header>
                        <ul>
                            {[
                                { title: t('project.echecs.challenge1Title'), text: t('project.echecs.challenge1Text') },
                                { title: t('project.echecs.challenge2Title'), text: t('project.echecs.challenge2Text') },
                                { title: t('project.echecs.challenge3Title'), text: t('project.echecs.challenge3Text') }
                            ].map((c, i) => (
                                <li key={i}>
                                    <strong>{c.title}</strong>
                                    <span>{c.text}</span>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="echecs-learned-card">
                        <div>
                            <header>
                                <FaLightbulb />
                                <h2>{t('project.echecs.learnedTitle')}</h2>
                            </header>
                            <p>
                                "{t('project.echecs.learnedText')}"
                            </p>
                        </div>
                        
                        <footer className="echecs-tech-box">
                            <h3>{t('project.echecs.techTitle')}</h3>
                            <div className="echecs-tech-grid">
                                <div><strong>{t('project.echecs.tech1Title')}</strong> {t('project.echecs.tech1Text')}</div>
                                <div><strong>{t('project.echecs.tech2Title')}</strong> {t('project.echecs.tech2Text')}</div>
                                <div><strong>{t('project.echecs.tech3Title')}</strong> {t('project.echecs.tech3Text')}</div>
                                <div><strong>{t('project.echecs.tech4Title')}</strong> {t('project.echecs.tech4Text')}</div>
                            </div>
                        </footer>
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

export default Echecs;