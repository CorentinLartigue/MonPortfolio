import React, { useState } from 'react';
import ProjectHero from '../../components/ProjectHero.tsx';
import ImageModal from '../../components/ImageModal.tsx';
import { useTranslate } from '../../hooks/useTranslate';
import {
    FaShopify, FaReact, FaExternalLinkAlt, FaExchangeAlt,
    FaShieldAlt, FaSlidersH, FaBolt, FaSearchPlus,
    FaYoutube, FaInstagram
} from 'react-icons/fa';
import { SiLaravel, SiRedis } from 'react-icons/si';
import locprioritySchema from '/images/projects/locpriority/schema-priorite.png';
import locpriorityDashboard from '/images/projects/locpriority/dashboard.png';
import locpriorityRules from '/images/projects/locpriority/rules-priority.png';
import locpriorityEditRule from '/images/projects/locpriority/edit-rule-priority.png';
import '../../styles/projects/locpriority.css';

interface GalleryItem {
    id: string;
    image: string;
    titleKey: string;
    descKey: string;
    tag: string;
}

const LocPriority: React.FC = () => {
    const { t } = useTranslate();
    const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

    const galleryScreens: GalleryItem[] = [
        {
            id: 'dashboard',
            image: locpriorityDashboard,
            titleKey: 'project.locpriority.screenDashboardTitle',
            descKey: 'project.locpriority.screenDashboardDesc',
            tag: 'Supervision'
        },
        {
            id: 'rules',
            image: locpriorityRules,
            titleKey: 'project.locpriority.screenRulesTitle',
            descKey: 'project.locpriority.screenRulesDesc',
            tag: 'Priorisation'
        },
        {
            id: 'edit',
            image: locpriorityEditRule,
            titleKey: 'project.locpriority.screenEditTitle',
            descKey: 'project.locpriority.screenEditDesc',
            tag: 'Paramétrage'
        }
    ];

    const engineFeatures = [
        {
            icon: FaBolt,
            titleKey: 'project.locpriority.featDynamicTitle',
            descKey: 'project.locpriority.featDynamicDesc'
        },
        {
            icon: FaSlidersH,
            titleKey: 'project.locpriority.featQuotasTitle',
            descKey: 'project.locpriority.featQuotasDesc'
        },
        {
            icon: FaShieldAlt,
            titleKey: 'project.locpriority.featExclusionsTitle',
            descKey: 'project.locpriority.featExclusionsDesc'
        },
        {
            icon: FaExchangeAlt,
            titleKey: 'project.locpriority.featLedgerTitle',
            descKey: 'project.locpriority.featLedgerDesc'
        },
        {
            icon: SiRedis,
            titleKey: 'project.locpriority.featDryRunTitle',
            descKey: 'project.locpriority.featDryRunDesc'
        },
        {
            icon: SiLaravel,
            titleKey: 'project.locpriority.featFailedJobsTitle',
            descKey: 'project.locpriority.featFailedJobsDesc'
        }
    ];

    return (
        <div className="locpriority-container">
            <ProjectHero
                badgeIcon={<FaShopify />}
                badgeLabel={t('project.locpriority.badge')}
                title={t('project.locpriority.title')}
                subtitle={t('project.locpriority.subtitle')}
                description={t('project.locpriority.desc')}
                techTags={['Laravel', 'React & Inertia', 'Shopify App Bridge', 'Redis Queues & Cache', 'Tailwind CSS']}
                theme="emerald"
            />

            {
                // Main project showcase content
            }
            <main className="locpriority-main">

                {
                    // Architecture and context bento grid
                }
                <section className="locpriority-bento-grid">
                    <article className="locpriority-bento-main">
                        <div>
                            <h2>
                                <span></span>
                                {t('project.locpriority.introTitle')}
                            </h2>
                            <p>
                                {t('project.locpriority.introText')}
                            </p>
                        </div>
                        <div className="locpriority-bento-meta">
                            <div>
                                <span>Mode d'exécution</span>
                                <span>Asynchrone post-achat</span>
                            </div>
                            <div>
                                <span>Intégration</span>
                                <span>Shopify Embedded App</span>
                            </div>
                        </div>
                    </article>

                    <article className="locpriority-bento-side">
                        <h2>
                            {t('project.locpriority.archTitle')}
                        </h2>
                        <p>
                            {t('project.locpriority.archDesc')}
                        </p>
                        <ul>
                            <li>
                                <SiLaravel />
                                <span>{t('project.locpriority.techLaravel')}</span>
                            </li>
                            <li>
                                <FaReact />
                                <span>{t('project.locpriority.techReact')}</span>
                            </li>
                            <li>
                                <FaExchangeAlt />
                                <span>{t('project.locpriority.techLedger')}</span>
                            </li>
                            <li>
                                <FaBolt />
                                <span>{t('project.locpriority.techRealtime')}</span>
                            </li>
                        </ul>
                    </article>
                </section>

                {
                    // Orchestration scheme
                }
                <section className="locpriority-schema-section">
                    <header className="locpriority-schema-header">
                        <h2>
                            {t('project.locpriority.schemaTitle')}
                        </h2>
                        <p>
                            {t('project.locpriority.schemaSubtitle')}
                        </p>
                        <p>
                            {t('project.locpriority.schemaDesc')}
                        </p>
                    </header>

                    <figure
                        onClick={() => setSelectedImage({ src: locprioritySchema, title: t('project.locpriority.schemaTitle') })}
                        className="project-zoomable-container locpriority-schema-card"
                    >
                        <img
                            src={locprioritySchema}
                            alt={t('project.locpriority.schemaTitle')}
                            className="project-zoomable-img"
                        />
                        <div className="project-zoomable-overlay">
                            <FaSearchPlus />
                            <span>Agrandir le schéma</span>
                        </div>
                    </figure>
                </section>

                {
                    // Merchant screens gallery
                }
                <section className="locpriority-gallery-section">
                    <header className="locpriority-gallery-header">
                        <h2>
                            {t('project.locpriority.galleryTitle')}
                        </h2>
                        <p>
                            {t('project.locpriority.gallerySubtitle')}
                        </p>
                    </header>

                    <div className="locpriority-gallery-grid">
                        {galleryScreens.map((screen) => (
                            <article
                                key={screen.id}
                                className="locpriority-gallery-card group"
                            >
                                <figure
                                    onClick={() => setSelectedImage({ src: screen.image, title: t(screen.titleKey) })}
                                    className="project-zoomable-container"
                                >
                                    <img
                                        src={screen.image}
                                        alt={t(screen.titleKey)}
                                        className="project-zoomable-img"
                                    />
                                    <figcaption>
                                        {screen.tag}
                                    </figcaption>
                                    <div className="project-zoomable-overlay">
                                        <FaSearchPlus />
                                        <span>Agrandir</span>
                                    </div>
                                </figure>
                                <div>
                                    <h3>
                                        {t(screen.titleKey)}
                                    </h3>
                                    <p>
                                        {t(screen.descKey)}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {
                    // Core engine features grid
                }
                <section className="locpriority-features-section">
                    <h2>
                        {t('project.locpriority.featuresTitle')}
                    </h2>
                    <div className="locpriority-features-grid">
                        {engineFeatures.map((feat, idx) => {
                            const IconComponent = feat.icon;
                            return (
                                <article
                                    key={idx}
                                    className="group"
                                >
                                    <span>
                                        <IconComponent />
                                    </span>
                                    <h3>
                                        {t(feat.titleKey)}
                                    </h3>
                                    <p>
                                        {t(feat.descKey)}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </section>

                {
                    // Multichannel marketing and outreach
                }
                <section className="locpriority-marketing-section">
                    <header className="locpriority-marketing-header">
                        <h2>
                            {t('project.locpriority.marketingTitle')}
                        </h2>
                        <p>
                            {t('project.locpriority.marketingSubtitle')}
                        </p>
                    </header>

                    <div className="locpriority-marketing-grid">
                        {
                            // YouTube card
                        }
                        <a
                            href="https://www.youtube.com/@Home-Made-IO"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="locpriority-marketing-card-yt group"
                        >
                            <header>
                                <span>
                                    <FaYoutube />
                                </span>
                                <FaExternalLinkAlt />
                            </header>
                            <h3>
                                {t('project.locpriority.marketingYtTitle')}
                            </h3>
                            <p>
                                {t('project.locpriority.marketingYtDesc')}
                            </p>
                            <footer>
                                <span>{t('project.locpriority.marketingYtLink')}</span>
                            </footer>
                        </a>

                        {
                            // Instagram card
                        }
                        <a
                            href="https://www.instagram.com/homemade.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="locpriority-marketing-card-insta group"
                        >
                            <header>
                                <span>
                                    <FaInstagram />
                                </span>
                                <FaExternalLinkAlt />
                            </header>
                            <h3>
                                {t('project.locpriority.marketingInstaTitle')}
                            </h3>
                            <p>
                                {t('project.locpriority.marketingInstaDesc')}
                            </p>
                            <footer>
                                <span>{t('project.locpriority.marketingInstaLink')}</span>
                            </footer>
                        </a>

                        {
                            // Shopify app ads card
                        }
                        <article className="locpriority-marketing-card-shopify group">
                            <header>
                                <span>
                                    <FaShopify />
                                </span>
                            </header>
                            <h3>
                                {t('project.locpriority.marketingShopifyTitle')}
                            </h3>
                            <p>
                                {t('project.locpriority.marketingShopifyDesc')}
                            </p>
                        </article>
                    </div>
                </section>

                {
                    // External production links
                }
                <section className="locpriority-links-section">
                    <h2>
                        {t('project.locpriority.linksTitle')}
                    </h2>
                    <nav className="locpriority-links-grid" aria-label="Liens externes de production">
                        <a
                            href="https://apps.shopify.com/location-priority?locale=fr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <FaShopify />
                            <span>{t('project.locpriority.linkAppStore')}</span>
                            <small>apps.shopify.com</small>
                        </a>

                        <a
                            href="https://www.home-made.io/portfolio/location-priority/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <FaExternalLinkAlt />
                            <span>{t('project.locpriority.linkPortfolio')}</span>
                            <small>home-made.io</small>
                        </a>

                        <a
                            href="https://www.home-made.io/welcome-location-priority"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <FaExternalLinkAlt />
                            <span>{t('project.locpriority.linkWelcome')}</span>
                            <small>Documentation onboarding</small>
                        </a>
                    </nav>
                </section>
            </main>

            <ImageModal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(null)}
                src={selectedImage?.src || ''}
                title={selectedImage?.title || ''}
            />
        </div>
    );
};

export default LocPriority;
