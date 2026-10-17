import React, { useState } from 'react';
import maquette_sneaky from '/images/projects/sneaky/maquette.png';
import ProjectHero from '../../components/ProjectHero.tsx';
import ImageModal from '../../components/ImageModal.tsx';
import { useTranslate } from '../../hooks/useTranslate';
import { FaShoePrints, FaFireAlt, FaCodeBranch, FaSearchPlus } from 'react-icons/fa';
import '../../styles/projects/sneaky.css';

interface ModalImage {
    src: string;
    title: string;
    desc?: string;
}

const Sneaky: React.FC = () => {
    const { t } = useTranslate();
    const [selectedImage, setSelectedImage] = useState<ModalImage | null>(null);

    const openModal = (src: string, title: string, desc?: string) => {
        setSelectedImage({ src, title, desc });
    };

    return (
        <div className="sneaky-container">
            <ProjectHero
                badgeIcon={<FaShoePrints />}
                badgeLabel={t('project.sneaky.badge')}
                title={t('project.sneaky.title')}
                subtitle={t('project.sneaky.subtitle')}
                description={t('project.sneaky.paragraph1')}
                techTags={['HTML5', 'CSS3', 'JavaScript', 'Figma', 'UI/UX Design']}
                theme="indigo"
            />

            <main className="sneaky-main">
                {
                    // Introduction overview card
                }
                <article className="sneaky-intro-card">
                    <p>
                        {t('project.sneaky.paragraph2')}
                    </p>
                </article>

                {
                    // Features and technology architecture
                }
                <section className="sneaky-grid-sections">
                    <article className="sneaky-section-block">
                        <header>
                            <FaFireAlt />
                            <h2>{t('project.sneaky.featuresTitle')}</h2>
                        </header>
                        <ul>
                            {[1, 2, 3].map(i => (
                                <li key={i}>
                                    <h3>{t(`project.sneaky.feature${i}Title`)}</h3>
                                    <p>{t(`project.sneaky.feature${i}Text`)}</p>
                                </li>
                            ))}
                        </ul>
                    </article>

                    <article className="sneaky-section-block">
                        <header>
                            <FaCodeBranch />
                            <h2>{t('project.sneaky.techTitle')}</h2>
                        </header>
                        <ul>
                            {[1, 2, 3].map(i => (
                                <li key={i}>
                                    <h3>{t(`project.sneaky.tech${i}Title`)}</h3>
                                    <p>{t(`project.sneaky.tech${i}Text`)}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                </section>

                {
                    // Mission and mockup presentation
                }
                <section className="sneaky-mission-outer">
                    <div className="sneaky-mission-inner">
                        <h2>
                            {t('project.sneaky.missionTitle')}
                        </h2>
                        
                        <figure
                            className="project-zoomable-container sneaky-mockup-wrapper"
                            onClick={() => openModal(
                                maquette_sneaky,
                                t('project.sneaky.missionTitle'),
                                t('project.sneaky.missionText1')
                            )}
                        >
                            <img
                                src={maquette_sneaky}
                                alt="Maquette Sneaky"
                                className="project-zoomable-img"
                            />
                            <div className="project-zoomable-overlay">
                                <FaSearchPlus />
                                <span>{t('app.buttons.zoom')}</span>
                            </div>
                        </figure>

                        <div className="sneaky-mission-grid">
                            <article>
                                <p>
                                    {t('project.sneaky.missionText1')}
                                </p>
                                <p>
                                    {t('project.sneaky.missionText2')}
                                </p>
                            </article>
                            <aside className="sneaky-bullets-card">
                                <ul>
                                    {[1, 2, 3].map(i => (
                                        <li key={i}>
                                            <span>0{i}</span>
                                            {t(`project.sneaky.bullet${i}`)}
                                        </li>
                                    ))}
                                </ul>
                            </aside>
                        </div>
                    </div>
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

export default Sneaky;