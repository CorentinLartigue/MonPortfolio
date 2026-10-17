import React, { useState } from 'react';
import ProjectHero from '../../components/ProjectHero.tsx';
import ImageModal from '../../components/ImageModal.tsx';
import { useTranslate } from '../../hooks/useTranslate';
import {
    FaExternalLinkAlt, FaSearchPlus,
    FaDocker, FaKey, FaEnvelope, FaCubes,
    FaGlassCheers, FaServer, FaMobileAlt, FaLaptopCode,
    FaGamepad, FaCocktail, FaStore, FaCalendarAlt,
    FaUserShield, FaUserCheck
} from 'react-icons/fa';
import { SiPostgresql, SiSwagger } from 'react-icons/si';

import cheerzupCouverture from '/images/projects/cheerzup/couverture.png';
import cheerzupLogin from '/images/projects/cheerzup/login.png';
import cheerzupBoundedContext from '/images/projects/cheerzup/bounded-context.png';
import cheerzupBdd from '/images/projects/cheerzup/bdd.png';
import cheerzupMoodboard from '/images/projects/cheerzup/moodboard.png';
import '../../styles/projects/cheerzup.css';

interface ModalImage {
    src: string;
    title: string;
    desc: string;
}

const Cheerzup: React.FC = () => {
    const { t } = useTranslate();
    const [selectedImage, setSelectedImage] = useState<ModalImage | null>(null);

    const techTags = [
        'Flutter', 'Dart', 'Angular', 'NestJS', 'TypeScript',
        'PostgreSQL', 'TypeORM', 'Docker', 'Docker Compose',
        'Swagger OpenAPI', 'Bruno', 'Mailjet API', 'Hexagonal Architecture'
    ];

    const openModal = (src: string, title: string, desc: string) => {
        setSelectedImage({ src, title, desc });
    };

    return (
        <div className="cheerzup-page">
            <ProjectHero
                badgeIcon={<FaGlassCheers />}
                badgeLabel={t('project.cheerzup.badge')}
                title={t('project.cheerzup.title')}
                subtitle={t('project.cheerzup.subtitle')}
                description={t('project.cheerzup.desc')}
                techTags={techTags}
                theme="purple"
                actions={
                    <a
                        href="https://poc-cheerzup.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaExternalLinkAlt />
                        <span>{t('project.cheerzup.btnPoc')}</span>
                    </a>
                }
            />

            <main className="cheerzup-main-content">
                {/* Team organization */}
                <section>
                    <header className="cheerzup-section-header">
                        <h2>
                            {t('project.cheerzup.teamTitle')}
                        </h2>
                        <p>
                            {t('project.cheerzup.teamSubtitle')}
                        </p>
                    </header>

                    <div className="cheerzup-team-grid">
                        <article>
                            <header>
                                <span>
                                    <FaServer />
                                </span>
                                <span>3 Devs</span>
                            </header>
                            <h3>
                                {t('project.cheerzup.teamBackendTitle')}
                            </h3>
                            <p>
                                {t('project.cheerzup.teamBackendDesc')}
                            </p>
                        </article>

                        <article>
                            <header>
                                <span>
                                    <FaMobileAlt />
                                </span>
                                <span>3 Devs</span>
                            </header>
                            <h3>
                                {t('project.cheerzup.teamFrontendTitle')}
                            </h3>
                            <p>
                                {t('project.cheerzup.teamFrontendDesc')}
                            </p>
                        </article>

                        <article>
                            <header>
                                <span>
                                    <FaLaptopCode />
                                </span>
                                <span>2 Devs</span>
                            </header>
                            <h3>
                                {t('project.cheerzup.teamBoTitle')}
                            </h3>
                            <p>
                                {t('project.cheerzup.teamBoDesc')}
                            </p>
                        </article>
                    </div>
                </section>

                {/* Mobile POC Showcase */}
                <section>
                    <header className="cheerzup-section-header">
                        <h2>
                            {t('project.cheerzup.pocSectionTitle')}
                        </h2>
                        <p>
                            {t('project.cheerzup.pocSectionDesc')}
                        </p>
                    </header>

                    <div className="cheerzup-mockups-grid">
                        <article>
                            <div className="cheerzup-phone-frame">
                                <div className="cheerzup-phone-notch"></div>
                                <div
                                    className="project-zoomable-container"
                                    onClick={() => openModal(
                                        cheerzupCouverture,
                                        t('project.cheerzup.pocCardWelcome'),
                                        t('project.cheerzup.pocCardWelcomeDesc')
                                    )}
                                >
                                    <img
                                        src={cheerzupCouverture}
                                        alt={t('project.cheerzup.pocCardWelcome')}
                                        className="project-zoomable-img"
                                    />
                                    <div className="project-zoomable-overlay">
                                        <FaSearchPlus />
                                        <span>{t('project.cheerzup.btnZoom')}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3>
                                    {t('project.cheerzup.pocCardWelcome')}
                                </h3>
                                <p>
                                    {t('project.cheerzup.pocCardWelcomeDesc')}
                                </p>
                            </div>
                        </article>

                        <article>
                            <div className="cheerzup-phone-frame">
                                <div className="cheerzup-phone-notch"></div>
                                <div
                                    className="project-zoomable-container"
                                    onClick={() => openModal(
                                        cheerzupLogin,
                                        t('project.cheerzup.pocCardLogin'),
                                        t('project.cheerzup.pocCardLoginDesc')
                                    )}
                                >
                                    <img
                                        src={cheerzupLogin}
                                        alt={t('project.cheerzup.pocCardLogin')}
                                        className="project-zoomable-img"
                                    />
                                    <div className="project-zoomable-overlay">
                                        <FaSearchPlus />
                                        <span>{t('project.cheerzup.btnZoom')}</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3>
                                    {t('project.cheerzup.pocCardLogin')}
                                </h3>
                                <p>
                                    {t('project.cheerzup.pocCardLoginDesc')}
                                </p>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Key Features */}
                <section className="cheerzup-features-section">
                    <header className="cheerzup-section-header">
                        <h2>
                            {t('project.cheerzup.featuresTitle')}
                        </h2>
                        <p>
                            {t('project.cheerzup.featuresSubtitle')}
                        </p>
                    </header>

                    {/* Part 1: Mobile App */}
                    <div className="cheerzup-features-category">
                        <header>
                            <FaMobileAlt />
                            <span>{t('project.cheerzup.featuresMobileTitle')}</span>
                        </header>

                        <div className="cheerzup-features-grid">
                            <article>
                                <span><FaGamepad /></span>
                                <h3>{t('project.cheerzup.featMobileGamesTitle')}</h3>
                                <p>{t('project.cheerzup.featMobileGamesDesc')}</p>
                            </article>

                            <article>
                                <span><FaGlassCheers /></span>
                                <h3>{t('project.cheerzup.featMobileCardsTitle')}</h3>
                                <p>{t('project.cheerzup.featMobileCardsDesc')}</p>
                            </article>

                            <article>
                                <span><FaCocktail /></span>
                                <h3>{t('project.cheerzup.featMobileBarsTitle')}</h3>
                                <p>{t('project.cheerzup.featMobileBarsDesc')}</p>
                            </article>

                            <article>
                                <span><FaUserCheck /></span>
                                <h3>{t('project.cheerzup.featMobileAuthTitle')}</h3>
                                <p>{t('project.cheerzup.featMobileAuthDesc')}</p>
                            </article>
                        </div>
                    </div>

                    {/* Part 2: Back-office Web Portal */}
                    <div className="cheerzup-features-category">
                        <header>
                            <FaLaptopCode />
                            <span>{t('project.cheerzup.featuresBoTitle')}</span>
                        </header>

                        <div className="cheerzup-features-grid">
                            <article>
                                <span><FaStore /></span>
                                <h3>{t('project.cheerzup.featBoVenueTitle')}</h3>
                                <p>{t('project.cheerzup.featBoVenueDesc')}</p>
                            </article>

                            <article>
                                <span><FaGlassCheers /></span>
                                <h3>{t('project.cheerzup.featBoCatalogTitle')}</h3>
                                <p>{t('project.cheerzup.featBoCatalogDesc')}</p>
                            </article>

                            <article>
                                <span><FaCalendarAlt /></span>
                                <h3>{t('project.cheerzup.featBoEventsTitle')}</h3>
                                <p>{t('project.cheerzup.featBoEventsDesc')}</p>
                            </article>

                            <article>
                                <span><FaUserShield /></span>
                                <h3>{t('project.cheerzup.featBoRbacTitle')}</h3>
                                <p>{t('project.cheerzup.featBoRbacDesc')}</p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Architecture Bento Grid */}
                <section>
                    <header className="cheerzup-section-header">
                        <h2>
                            {t('project.cheerzup.archTitle')}
                        </h2>
                        <p>
                            {t('project.cheerzup.archSubtitle')}
                        </p>
                    </header>

                    <div className="cheerzup-bento-grid">
                        <article>
                            <span><FaCubes /></span>
                            <div>
                                <h3>Hexagonal & DDD</h3>
                                <p>{t('project.cheerzup.archHexa')}</p>
                            </div>
                        </article>

                        <article>
                            <span><SiPostgresql /></span>
                            <div>
                                <h3>PostgreSQL & TypeORM</h3>
                                <p>{t('project.cheerzup.archBdd')}</p>
                            </div>
                        </article>

                        <article>
                            <span><FaKey /></span>
                            <div>
                                <h3>Double Authentification</h3>
                                <p>{t('project.cheerzup.archAuth')}</p>
                            </div>
                        </article>

                        <article>
                            <span><FaDocker /></span>
                            <div>
                                <h3>Docker Compose</h3>
                                <p>{t('project.cheerzup.archDocker')}</p>
                            </div>
                        </article>

                        <article>
                            <span><SiSwagger /></span>
                            <div>
                                <h3>Swagger & Bruno</h3>
                                <p>{t('project.cheerzup.archSwagger')}</p>
                            </div>
                        </article>

                        <article>
                            <span><FaEnvelope /></span>
                            <div>
                                <h3>Mailjet & Pipeline</h3>
                                <p>{t('project.cheerzup.archMail')}</p>
                            </div>
                        </article>
                    </div>
                </section>

                {/* High Definition Architecture Diagrams */}
                <section>
                    <header className="cheerzup-section-header">
                        <h2>
                            {t('project.cheerzup.diagramsTitle')}
                        </h2>
                        <p>
                            {t('project.cheerzup.diagramsSubtitle')}
                        </p>
                    </header>

                    <div className="cheerzup-diagrams-grid">
                        <article
                            onClick={() => openModal(
                                cheerzupBoundedContext,
                                t('project.cheerzup.diagramContextTitle'),
                                t('project.cheerzup.diagramContextDesc')
                            )}
                        >
                            <figure className="project-zoomable-container">
                                <img
                                    src={cheerzupBoundedContext}
                                    alt={t('project.cheerzup.diagramContextTitle')}
                                    className="project-zoomable-img"
                                />
                                <div className="project-zoomable-overlay">
                                    <FaSearchPlus />
                                    <span>{t('project.cheerzup.btnZoom')}</span>
                                </div>
                            </figure>
                            <div>
                                <h3>
                                    {t('project.cheerzup.diagramContextTitle')}
                                </h3>
                                <p>
                                    {t('project.cheerzup.diagramContextDesc')}
                                </p>
                            </div>
                        </article>

                        <article
                            onClick={() => openModal(
                                cheerzupBdd,
                                t('project.cheerzup.diagramBddTitle'),
                                t('project.cheerzup.diagramBddDesc')
                            )}
                        >
                            <figure className="project-zoomable-container">
                                <img
                                    src={cheerzupBdd}
                                    alt={t('project.cheerzup.diagramBddTitle')}
                                    className="project-zoomable-img"
                                />
                                <div className="project-zoomable-overlay">
                                    <FaSearchPlus />
                                    <span>{t('project.cheerzup.btnZoom')}</span>
                                </div>
                            </figure>
                            <div>
                                <h3>
                                    {t('project.cheerzup.diagramBddTitle')}
                                </h3>
                                <p>
                                    {t('project.cheerzup.diagramBddDesc')}
                                </p>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Moodboard & Visual Identity */}
                <section>
                    <header className="cheerzup-section-header">
                        <h2>
                            {t('project.cheerzup.moodboardTitle')}
                        </h2>
                        <p>
                            {t('project.cheerzup.moodboardSubtitle')}
                        </p>
                    </header>

                    <article
                        className="cheerzup-moodboard-card"
                        onClick={() => openModal(
                            cheerzupMoodboard,
                            t('project.cheerzup.moodboardTitle'),
                            t('project.cheerzup.moodboardDesc')
                        )}
                    >
                        <figure className="project-zoomable-container">
                            <img
                                src={cheerzupMoodboard}
                                alt={t('project.cheerzup.moodboardTitle')}
                                className="project-zoomable-img"
                            />
                            <div className="project-zoomable-overlay">
                                <FaSearchPlus />
                                <span>{t('project.cheerzup.btnZoom')}</span>
                            </div>
                        </figure>
                        <div>
                            <h3>
                                {t('project.cheerzup.moodboardTitle')}
                            </h3>
                            <p>
                                {t('project.cheerzup.moodboardDesc')}
                            </p>
                        </div>
                    </article>
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

export default Cheerzup;
