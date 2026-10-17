import React, { useState } from 'react';
import step1 from '/images/projects/berroyer/step-client.png';
import step2 from '/images/projects/berroyer/step-produit.png';
import step3 from '/images/projects/berroyer/step-configuration.png';
import step4 from '/images/projects/berroyer/step-options.png';
import step5 from '/images/projects/berroyer/step-finition.png';
import step6 from '/images/projects/berroyer/step-synthese.png';
import ProjectHero from '../../components/ProjectHero.tsx';
import ImageModal from '../../components/ImageModal.tsx';
import { useTranslate } from '../../hooks/useTranslate';
import { FaCogs, FaBook, FaSearchPlus, FaSitemap } from 'react-icons/fa';
import '../../styles/projects/berroyer.css';

interface ModalImage {
    src: string;
    title: string;
    desc?: string;
}

const Berroyer: React.FC = () => {
    const { t } = useTranslate();
    const [selectedImage, setSelectedImage] = useState<ModalImage | null>(null);

    const openModal = (src: string, title: string, desc?: string) => {
        setSelectedImage({ src, title, desc });
    };

    interface StepBlockProps {
        title: string;
        desc: string;
        img: string;
        bullets?: string[];
        num: number;
    }

    const StepBlock = ({ title, desc, img, bullets = [], num }: StepBlockProps) => (
        <article className="berroyer-step-card">
            <figure
                className="project-zoomable-container"
                onClick={() => openModal(img, title, desc)}
            >
                <img src={img} alt={title} className="project-zoomable-img" />
                <div className="project-zoomable-overlay">
                    <FaSearchPlus />
                    <span>{t('app.buttons.zoom')}</span>
                </div>
            </figure>
            <section>
                <header>
                    <span>{num}</span>
                    <h2>{title}</h2>
                </header>
                <p>{desc}</p>
                {bullets.length > 0 && (
                    <ul>
                        {bullets.map((b: string, i: number) => (
                            <li key={i}>
                                <span></span>
                                {b}
                            </li>
                        ))}
                    </ul>
                )}
            </section>
        </article>
    );

    return (
        <div className="berroyer-container">
            <ProjectHero
                badgeIcon={<FaCogs />}
                badgeLabel={t('project.berroyer.badge')}
                title={t('project.berroyer.title')}
                subtitle={t('project.berroyer.subtitle')}
                description={t('project.berroyer.intro')}
                techTags={['Symfony', 'Twig', 'Ajax', 'jQuery', 'Bootstrap', 'Smart Wizard', 'EasyFrame']}
                theme="blue"
            />

            <main className="berroyer-main">
                {
                    // Steps interactive timeline
                }
                <section className="berroyer-timeline">
                    
                    <StepBlock num={1} title={t('project.berroyer.step1Title')} desc={t('project.berroyer.step1Desc')} img={step1} bullets={[t('project.berroyer.step1Bullet1'), t('project.berroyer.step1Bullet2'), t('project.berroyer.step1Bullet3'), t('project.berroyer.step1Bullet4')]} />
                    <StepBlock num={2} title={t('project.berroyer.step2Title')} desc={t('project.berroyer.step2Desc')} img={step2} bullets={[t('project.berroyer.step2Bullet1'), t('project.berroyer.step2Bullet2'), t('project.berroyer.step2Bullet3'), t('project.berroyer.step2Bullet4')]} />
                    <StepBlock num={3} title={t('project.berroyer.step3Title')} desc={t('project.berroyer.step3Desc')} img={step3} />
                    <StepBlock num={4} title={t('project.berroyer.step4Title')} desc={t('project.berroyer.step4Desc')} img={step4} bullets={[t('project.berroyer.step4Bullet1'), t('project.berroyer.step4Bullet2'), t('project.berroyer.step4Bullet3')]} />
                    <StepBlock num={5} title={t('project.berroyer.step5Title')} desc={t('project.berroyer.step5Desc')} img={step5} bullets={[t('project.berroyer.step5Bullet1'), t('project.berroyer.step5Bullet2'), t('project.berroyer.step5Bullet3'), t('project.berroyer.step5Bullet4')]} />
                    <StepBlock num={6} title={t('project.berroyer.step6Title')} desc={t('project.berroyer.step6Desc')} img={step6} bullets={[t('project.berroyer.step6Bullet1'), t('project.berroyer.step6Bullet2'), t('project.berroyer.step6Bullet3')]} />
                </section>

                {
                    // Additional project information
                }
                <section className="berroyer-hierarchy-card">
                    <header>
                        <FaSitemap />
                        <h3>{t('project.berroyer.hierarchyTitle')}</h3>
                    </header>
                    <p>{t('project.berroyer.hierarchyDesc')}</p>
                    <ol>
                        <li>
                            <span>1</span>
                            <p>{t('project.berroyer.hierarchyItem1')}</p>
                        </li>
                        <li>
                            <span>2</span>
                            <p>{t('project.berroyer.hierarchyItem2')}</p>
                        </li>
                        <li>
                            <span>3</span>
                            <p>{t('project.berroyer.hierarchyItem3')}</p>
                        </li>
                        <li>
                            <span>4</span>
                            <p>{t('project.berroyer.hierarchyItem4')}</p>
                        </li>
                        <li>
                            <span>5</span>
                            <p>{t('project.berroyer.hierarchyItem5')}</p>
                        </li>
                    </ol>
                </section>

                <section className="berroyer-info-grid">
                    <article className="berroyer-info-card">
                        <h3>{t('project.berroyer.agileTitle')}</h3>
                        <p>{t('project.berroyer.agileDesc')}</p>
                    </article>
                    <article className="berroyer-info-card">
                        <header>
                            <FaBook />
                            <h3>{t('project.berroyer.docTitle')}</h3>
                        </header>
                        <p>{t('project.berroyer.docDesc')}</p>
                    </article>
                    <article className="berroyer-info-card">
                        <header>
                            <FaSitemap />
                            <h3>{t('project.berroyer.techTitle')}</h3>
                        </header>
                        <p>
                            Architecture articulée autour de {t('project.berroyer.techEasyframe')}.
                        </p>
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

export default Berroyer;