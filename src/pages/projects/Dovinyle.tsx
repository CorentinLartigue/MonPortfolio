import React, { useState } from 'react';
import ProjectHero from '../../components/ProjectHero.tsx';
import ImageModal from '../../components/ImageModal.tsx';
import { useTranslate } from '../../hooks/useTranslate';
import {
    FaGithub, FaSearchPlus, FaCompactDisc,
    FaShoppingCart, FaHeart, FaEnvelope, FaNewspaper,
    FaUserCheck
} from 'react-icons/fa';
import {
    SiNextdotjs, SiNestjs, SiPostgresql,
    SiSupabase, SiFigma, SiStripe, SiDocker
} from 'react-icons/si';

import dovinyleCouverture from '/images/projects/dovinyle/couverture.png';
import dovinyleHome from '/images/projects/dovinyle/home.png';
import dovinyleCatalog from '/images/projects/dovinyle/catalog.png';
import dovinyleCollection from '/images/projects/dovinyle/collection.png';
import dovinyleCart from '/images/projects/dovinyle/cart.png';
import dovinyleMaquette from '/images/projects/dovinyle/maquette.png';
import '../../styles/projects/dovinyle.css';

interface ModalImage {
    src: string;
    title: string;
    desc: string;
}

const Dovinyle: React.FC = () => {
    const { t } = useTranslate();
    const [selectedImage, setSelectedImage] = useState<ModalImage | null>(null);

    const techTags = [
        'Next.js', 'React', 'TypeScript', 'NestJS',
        'PostgreSQL', 'TypeORM', 'Stripe API', 'Mailjet',
        'Docker Compose', 'Tailwind CSS', 'Supabase Storage', 'Figma'
    ];

    const openModal = (src: string, title: string, desc: string) => {
        setSelectedImage({ src, title, desc });
    };

    return (
        <div className="dovinyle-container">
            <ProjectHero
                badgeIcon={<FaCompactDisc />}
                badgeLabel={t('project.dovinyle.badge')}
                title={t('project.dovinyle.title')}
                subtitle={t('project.dovinyle.subtitle')}
                description={t('project.dovinyle.desc')}
                techTags={techTags}
                theme="amber"
                actions={
                    <>
                        <a
                            href="https://github.com/CorentinLartigue/vinyle-front"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span>{t('project.dovinyle.btnFront')}</span>
                        </a>

                        <a
                            href="https://github.com/kilbertusrobin/vinyl_backend"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub />
                            <span>{t('project.dovinyle.btnBack')}</span>
                        </a>
                    </>
                }
            />

            <main className="dovinyle-main-content">
                {/* Context & Introduction */}
                <article className="dovinyle-intro-card">
                    <h2>
                        <span></span>
                        <span>{t('project.dovinyle.introTitle')}</span>
                    </h2>
                    <p>
                        {t('project.dovinyle.introText')}
                    </p>
                </article>

                {/* Architecture & Stack Bento Grid */}
                <section>
                    <header className="dovinyle-section-header">
                        <h2>
                            {t('project.dovinyle.archTitle')}
                        </h2>
                        <p>
                            {t('project.dovinyle.archSubtitle')}
                        </p>
                    </header>

                    <div className="dovinyle-bento-grid">
                        <article>
                            <div className="dovinyle-bento-icon-group">
                                <SiNextdotjs />
                                <SiDocker />
                            </div>
                            <div>
                                <h3>Next.js & Docker</h3>
                                <p>{t('project.dovinyle.archFront')}</p>
                            </div>
                        </article>

                        <article>
                            <span><SiNestjs /></span>
                            <div>
                                <h3>NestJS REST API</h3>
                                <p>{t('project.dovinyle.archBack')}</p>
                            </div>
                        </article>

                        <article>
                            <span><SiPostgresql /></span>
                            <div>
                                <h3>PostgreSQL & TypeORM</h3>
                                <p>{t('project.dovinyle.archDb')}</p>
                            </div>
                        </article>

                        <article>
                            <div className="dovinyle-bento-icon-group">
                                <SiStripe />
                                <SiSupabase />
                            </div>
                            <div>
                                <h3>Stripe, Mailjet & Supabase</h3>
                                <p>{t('project.dovinyle.archServices')}</p>
                            </div>
                        </article>
                    </div>
                </section>

                {/* Key Features */}
                <section>
                    <header className="dovinyle-section-header">
                        <h2>
                            {t('project.dovinyle.featuresTitle')}
                        </h2>
                        <p>
                            {t('project.dovinyle.featuresSubtitle')}
                        </p>
                    </header>

                    <div className="dovinyle-features-grid">
                        <article>
                            <span><FaCompactDisc /></span>
                            <h3>{t('project.dovinyle.feat1Title')}</h3>
                            <p>{t('project.dovinyle.feat1Desc')}</p>
                        </article>

                        <article>
                            <span><FaHeart /></span>
                            <h3>{t('project.dovinyle.feat2Title')}</h3>
                            <p>{t('project.dovinyle.feat2Desc')}</p>
                        </article>

                        <article>
                            <span><FaUserCheck /></span>
                            <h3>{t('project.dovinyle.feat3Title')}</h3>
                            <p>{t('project.dovinyle.feat3Desc')}</p>
                        </article>

                        <article>
                            <span><FaShoppingCart /></span>
                            <h3>{t('project.dovinyle.feat4Title')}</h3>
                            <p>{t('project.dovinyle.feat4Desc')}</p>
                        </article>

                        <article>
                            <span><FaEnvelope /></span>
                            <h3>{t('project.dovinyle.feat5Title')}</h3>
                            <p>{t('project.dovinyle.feat5Desc')}</p>
                        </article>

                        <article>
                            <span><FaNewspaper /></span>
                            <h3>{t('project.dovinyle.feat6Title')}</h3>
                            <p>{t('project.dovinyle.feat6Desc')}</p>
                        </article>
                    </div>
                </section>

                {/* Graphic Conception & UI Mockup */}
                <section>
                    <header className="dovinyle-section-header">
                        <h2>
                            {t('project.dovinyle.mockupTitle')}
                        </h2>
                        <p>
                            {t('project.dovinyle.mockupSubtitle')}
                        </p>
                    </header>

                    <article className="dovinyle-mockup-card">
                        <figure
                            className="project-zoomable-container"
                            onClick={() => openModal(
                                dovinyleMaquette,
                                t('project.dovinyle.screenMaquetteTitle'),
                                t('project.dovinyle.screenMaquetteDesc')
                            )}
                        >
                            <img
                                src={dovinyleMaquette}
                                alt={t('project.dovinyle.screenMaquetteTitle')}
                                className="project-zoomable-img"
                            />
                            <div className="project-zoomable-overlay">
                                <FaSearchPlus />
                                <span>{t('project.dovinyle.btnZoom')}</span>
                            </div>
                        </figure>
                        <div>
                            <h3>
                                <SiFigma />
                                <span>{t('project.dovinyle.screenMaquetteTitle')}</span>
                            </h3>
                            <p>
                                {t('project.dovinyle.mockupDesc')}
                            </p>
                        </div>
                    </article>
                </section>

                {/* Desktop Browser Application Gallery */}
                <section>
                    <header className="dovinyle-section-header">
                        <h2>
                            {t('project.dovinyle.galleryTitle')}
                        </h2>
                        <p>
                            {t('project.dovinyle.gallerySubtitle')}
                        </p>
                    </header>

                    {/* Panoramic View */}
                    <article className="dovinyle-panoramic-wrapper">
                        <figure
                            className="project-zoomable-container"
                            onClick={() => openModal(
                                dovinyleCouverture,
                                t('project.dovinyle.screenCouvertureTitle'),
                                t('project.dovinyle.screenCouvertureDesc')
                            )}
                        >
                            <img
                                src={dovinyleCouverture}
                                alt={t('project.dovinyle.screenCouvertureTitle')}
                                className="project-zoomable-img"
                            />
                            <div className="project-zoomable-overlay">
                                <FaSearchPlus />
                                <span>{t('project.dovinyle.btnZoom')}</span>
                            </div>
                        </figure>
                        <div>
                            <h3>
                                {t('project.dovinyle.screenCouvertureTitle')}
                            </h3>
                            <p>
                                {t('project.dovinyle.screenCouvertureDesc')}
                            </p>
                        </div>
                    </article>

                    {/* 4 Application Browser Screens */}
                    <div className="dovinyle-gallery-grid">
                        {/* 1. Home Screen */}
                        <article
                            className="dovinyle-browser-card"
                            onClick={() => openModal(
                                dovinyleHome,
                                t('project.dovinyle.screenHomeTitle'),
                                t('project.dovinyle.screenHomeDesc')
                            )}
                        >
                            <header>
                                <div>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span>dovinyle.fr/accueil</span>
                            </header>
                            <figure className="project-zoomable-container">
                                <img
                                    src={dovinyleHome}
                                    alt={t('project.dovinyle.screenHomeTitle')}
                                    className="project-zoomable-img"
                                />
                                <div className="project-zoomable-overlay">
                                    <FaSearchPlus />
                                    <span>{t('project.dovinyle.btnZoom')}</span>
                                </div>
                            </figure>
                            <div>
                                <h3>
                                    {t('project.dovinyle.screenHomeTitle')}
                                </h3>
                                <p>
                                    {t('project.dovinyle.screenHomeDesc')}
                                </p>
                            </div>
                        </article>

                        {/* 2. Catalog Screen */}
                        <article
                            className="dovinyle-browser-card"
                            onClick={() => openModal(
                                dovinyleCatalog,
                                t('project.dovinyle.screenCatalogTitle'),
                                t('project.dovinyle.screenCatalogDesc')
                            )}
                        >
                            <header>
                                <div>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span>dovinyle.fr/catalogue</span>
                            </header>
                            <figure className="project-zoomable-container">
                                <img
                                    src={dovinyleCatalog}
                                    alt={t('project.dovinyle.screenCatalogTitle')}
                                    className="project-zoomable-img"
                                />
                                <div className="project-zoomable-overlay">
                                    <FaSearchPlus />
                                    <span>{t('project.dovinyle.btnZoom')}</span>
                                </div>
                            </figure>
                            <div>
                                <h3>
                                    {t('project.dovinyle.screenCatalogTitle')}
                                </h3>
                                <p>
                                    {t('project.dovinyle.screenCatalogDesc')}
                                </p>
                            </div>
                        </article>

                        {/* 3. Favorites / Collection Screen */}
                        <article
                            className="dovinyle-browser-card"
                            onClick={() => openModal(
                                dovinyleCollection,
                                t('project.dovinyle.screenCollectionTitle'),
                                t('project.dovinyle.screenCollectionDesc')
                            )}
                        >
                            <header>
                                <div>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span>dovinyle.fr/favoris</span>
                            </header>
                            <figure className="project-zoomable-container">
                                <img
                                    src={dovinyleCollection}
                                    alt={t('project.dovinyle.screenCollectionTitle')}
                                    className="project-zoomable-img"
                                />
                                <div className="project-zoomable-overlay">
                                    <FaSearchPlus />
                                    <span>{t('project.dovinyle.btnZoom')}</span>
                                </div>
                            </figure>
                            <div>
                                <h3>
                                    {t('project.dovinyle.screenCollectionTitle')}
                                </h3>
                                <p>
                                    {t('project.dovinyle.screenCollectionDesc')}
                                </p>
                            </div>
                        </article>

                        {/* 4. Cart Screen */}
                        <article
                            className="dovinyle-browser-card"
                            onClick={() => openModal(
                                dovinyleCart,
                                t('project.dovinyle.screenCartTitle'),
                                t('project.dovinyle.screenCartDesc')
                            )}
                        >
                            <header>
                                <div>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <span>dovinyle.fr/panier</span>
                            </header>
                            <figure className="project-zoomable-container">
                                <img
                                    src={dovinyleCart}
                                    alt={t('project.dovinyle.screenCartTitle')}
                                    className="project-zoomable-img"
                                />
                                <div className="project-zoomable-overlay">
                                    <FaSearchPlus />
                                    <span>{t('project.dovinyle.btnZoom')}</span>
                                </div>
                            </figure>
                            <div>
                                <h3>
                                    {t('project.dovinyle.screenCartTitle')}
                                </h3>
                                <p>
                                    {t('project.dovinyle.screenCartDesc')}
                                </p>
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

export default Dovinyle;
