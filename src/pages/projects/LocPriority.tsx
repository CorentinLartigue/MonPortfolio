import React, { useState } from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import { useTranslate } from '../../hooks/useTranslate';
import {
    FaShopify, FaReact, FaExternalLinkAlt, FaExchangeAlt,
    FaShieldAlt, FaSlidersH, FaBolt, FaTimes, FaSearchPlus,
    FaYoutube, FaInstagram
} from 'react-icons/fa';
import { SiLaravel, SiRedis, SiTailwindcss } from 'react-icons/si';
import locprioritySchema from '/images/projects/locpriority/schema_priorite.png';
import locpriorityDashboard from '/images/projects/locpriority/dashboard.png';
import locpriorityRules from '/images/projects/locpriority/rules_priority.png';
import locpriorityEditRule from '/images/projects/locpriority/edit_rule_priority.png';
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
            <div className="locpriority-return-wrapper">
                <ReturnButton />
            </div>

            {/* Hero Section */}
            <header className="locpriority-hero">
                <div className="locpriority-hero-glow"></div>
                
                <div className="locpriority-hero-badge">
                    <FaShopify className="text-sm" />
                    <span>{t('project.locpriority.badge')}</span>
                </div>

                <h1 className="locpriority-hero-title">
                    {t('project.locpriority.title')}
                </h1>

                <p className="locpriority-hero-subtitle">
                    {t('project.locpriority.subtitle')}
                </p>

                <p className="locpriority-hero-desc">
                    {t('project.locpriority.desc')}
                </p>

                {/* Stack Badges */}
                <div className="locpriority-hero-tech-list">
                    <span className="locpriority-hero-tech-pill">
                        <SiLaravel className="text-red-500" /> Laravel
                    </span>
                    <span className="locpriority-hero-tech-pill">
                        <FaReact className="text-cyan-400" /> React & Inertia
                    </span>
                    <span className="locpriority-hero-tech-pill">
                        <FaShopify className="text-green-500" /> Shopify App Bridge
                    </span>
                    <span className="locpriority-hero-tech-pill">
                        <SiRedis className="text-red-400" /> Redis Queues & Cache
                    </span>
                    <span className="locpriority-hero-tech-pill">
                        <SiTailwindcss className="text-sky-400" /> Tailwind CSS
                    </span>
                </div>
            </header>

            {/* Main Content */}
            <main className="locpriority-main">

                {/* Architecture & Context Bento Grid */}
                <section className="locpriority-bento-grid">
                    <div className="locpriority-bento-main">
                        <div>
                            <h2 className="locpriority-bento-title">
                                <span className="locpriority-bento-bar"></span>
                                {t('project.locpriority.introTitle')}
                            </h2>
                            <p className="locpriority-bento-text">
                                {t('project.locpriority.introText')}
                            </p>
                        </div>
                        <div className="locpriority-bento-meta">
                            <div>
                                <span className="locpriority-bento-meta-label">Mode d'exécution</span>
                                <span className="locpriority-bento-meta-val">Asynchrone post-achat</span>
                            </div>
                            <div>
                                <span className="locpriority-bento-meta-label">Intégration</span>
                                <span className="locpriority-bento-meta-val">Shopify Embedded App</span>
                            </div>
                        </div>
                    </div>

                    <div className="locpriority-bento-side">
                        <h2 className="locpriority-bento-side-title">
                            {t('project.locpriority.archTitle')}
                        </h2>
                        <ul className="locpriority-bento-list">
                            <li className="locpriority-bento-list-item">
                                <SiLaravel className="text-red-500 text-lg mt-0.5 shrink-0" />
                                <span>{t('project.locpriority.techLaravel')}</span>
                            </li>
                            <li className="locpriority-bento-list-item">
                                <FaReact className="text-cyan-400 text-lg mt-0.5 shrink-0" />
                                <span>{t('project.locpriority.techReact')}</span>
                            </li>
                            <li className="locpriority-bento-list-item">
                                <FaExchangeAlt className="text-emerald-400 text-base mt-0.5 shrink-0" />
                                <span>{t('project.locpriority.techLedger')}</span>
                            </li>
                            <li className="locpriority-bento-list-item">
                                <FaBolt className="text-amber-400 text-base mt-0.5 shrink-0" />
                                <span>{t('project.locpriority.techRealtime')}</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Orchestration Scheme (Full Width Highlight) */}
                <section className="locpriority-schema-section">
                    <div className="locpriority-schema-header">
                        <h2 className="locpriority-schema-title">
                            {t('project.locpriority.schemaTitle')}
                        </h2>
                        <p className="locpriority-schema-subtitle">
                            {t('project.locpriority.schemaSubtitle')}
                        </p>
                        <p className="locpriority-schema-desc">
                            {t('project.locpriority.schemaDesc')}
                        </p>
                    </div>

                    <div
                        onClick={() => setSelectedImage({ src: locprioritySchema, title: t('project.locpriority.schemaTitle') })}
                        className="locpriority-schema-card group"
                    >
                        <div className="locpriority-schema-inner">
                            <img
                                src={locprioritySchema}
                                alt={t('project.locpriority.schemaTitle')}
                                className="locpriority-schema-img"
                            />
                            <div className="locpriority-schema-overlay">
                                <FaSearchPlus className="text-lg" />
                                <span>Agrandir le schéma</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Merchant Screens Gallery */}
                <section className="locpriority-gallery-section">
                    <div className="locpriority-gallery-header">
                        <h2 className="locpriority-gallery-title">
                            {t('project.locpriority.galleryTitle')}
                        </h2>
                        <p className="locpriority-gallery-subtitle">
                            {t('project.locpriority.gallerySubtitle')}
                        </p>
                    </div>

                    <div className="locpriority-gallery-grid">
                        {galleryScreens.map((screen) => (
                            <article
                                key={screen.id}
                                className="locpriority-gallery-card group"
                            >
                                <div
                                    onClick={() => setSelectedImage({ src: screen.image, title: t(screen.titleKey) })}
                                    className="locpriority-gallery-thumb"
                                >
                                    <img
                                        src={screen.image}
                                        alt={t(screen.titleKey)}
                                        className="locpriority-gallery-img"
                                    />
                                    <div className="locpriority-gallery-tag">
                                        {screen.tag}
                                    </div>
                                    <div className="locpriority-gallery-zoom">
                                        <FaSearchPlus />
                                        <span>Agrandir</span>
                                    </div>
                                </div>
                                <div className="locpriority-gallery-body">
                                    <div>
                                        <h3 className="locpriority-gallery-item-title">
                                            {t(screen.titleKey)}
                                        </h3>
                                        <p className="locpriority-gallery-item-desc">
                                            {t(screen.descKey)}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Core Engine Features Grid */}
                <section className="locpriority-features-section">
                    <h2 className="locpriority-features-title">
                        {t('project.locpriority.featuresTitle')}
                    </h2>
                    <div className="locpriority-features-grid">
                        {engineFeatures.map((feat, idx) => {
                            const IconComponent = feat.icon;
                            return (
                                <div
                                    key={idx}
                                    className="locpriority-feature-card group"
                                >
                                    <div className="locpriority-feature-icon-box">
                                        <IconComponent />
                                    </div>
                                    <h3 className="locpriority-feature-title">
                                        {t(feat.titleKey)}
                                    </h3>
                                    <p className="locpriority-feature-desc">
                                        {t(feat.descKey)}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Multichannel Marketing & Outreach */}
                <section className="locpriority-marketing-section">
                    <div className="locpriority-marketing-header">
                        <h2 className="locpriority-marketing-title">
                            {t('project.locpriority.marketingTitle')}
                        </h2>
                        <p className="locpriority-marketing-subtitle">
                            {t('project.locpriority.marketingSubtitle')}
                        </p>
                    </div>

                    <div className="locpriority-marketing-grid">
                        {/* YouTube Card */}
                        <a
                            href="https://www.youtube.com/@Home-Made-IO"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="locpriority-marketing-card-yt group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="locpriority-marketing-icon-yt">
                                        <FaYoutube />
                                    </div>
                                    <FaExternalLinkAlt className="text-xs text-slate-500 group-hover:text-red-400 transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                                    {t('project.locpriority.marketingYtTitle')}
                                </h3>
                                <p className="text-slate-400 text-xs leading-relaxed">
                                    {t('project.locpriority.marketingYtDesc')}
                                </p>
                            </div>
                            <div className="locpriority-marketing-link-yt">
                                <span>{t('project.locpriority.marketingYtLink')}</span>
                            </div>
                        </a>

                        {/* Instagram Card */}
                        <a
                            href="https://www.instagram.com/homemade.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="locpriority-marketing-card-insta group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="locpriority-marketing-icon-insta">
                                        <FaInstagram />
                                    </div>
                                    <FaExternalLinkAlt className="text-xs text-slate-500 group-hover:text-pink-400 transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                                    {t('project.locpriority.marketingInstaTitle')}
                                </h3>
                                <p className="text-slate-400 text-xs leading-relaxed">
                                    {t('project.locpriority.marketingInstaDesc')}
                                </p>
                            </div>
                            <div className="locpriority-marketing-link-insta">
                                <span>{t('project.locpriority.marketingInstaLink')}</span>
                            </div>
                        </a>

                        {/* Shopify Ads Card */}
                        <div className="locpriority-marketing-card-shopify group">
                            <div>
                                <div className="locpriority-marketing-icon-shopify">
                                    <FaShopify />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                                    {t('project.locpriority.marketingShopifyTitle')}
                                </h3>
                                <p className="text-slate-400 text-xs leading-relaxed">
                                    {t('project.locpriority.marketingShopifyDesc')}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* External Production Links */}
                <section className="locpriority-links-section">
                    <h2 className="locpriority-links-title">
                        {t('project.locpriority.linksTitle')}
                    </h2>
                    <div className="locpriority-links-grid">
                        <a
                            href="https://apps.shopify.com/location-priority?locale=fr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="locpriority-link-card group"
                        >
                            <FaShopify className="locpriority-link-icon-store" />
                            <span className="locpriority-link-label">{t('project.locpriority.linkAppStore')}</span>
                            <span className="locpriority-link-sub">apps.shopify.com</span>
                        </a>

                        <a
                            href="https://www.home-made.io/portfolio/location-priority/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="locpriority-link-card group"
                        >
                            <FaExternalLinkAlt className="locpriority-link-icon-ext" />
                            <span className="locpriority-link-label">{t('project.locpriority.linkPortfolio')}</span>
                            <span className="locpriority-link-sub">home-made.io</span>
                        </a>

                        <a
                            href="https://www.home-made.io/welcome-location-priority"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="locpriority-link-card group"
                        >
                            <FaExternalLinkAlt className="locpriority-link-icon-ext" />
                            <span className="locpriority-link-label">{t('project.locpriority.linkWelcome')}</span>
                            <span className="locpriority-link-sub">Documentation onboarding</span>
                        </a>
                    </div>
                </section>
            </main>

            {/* Modal Zoom Image */}
            {selectedImage && (
                <div
                    className="locpriority-modal-backdrop"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="locpriority-modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="locpriority-modal-header">
                            <h3 className="locpriority-modal-title">
                                {selectedImage.title}
                            </h3>
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="locpriority-modal-close-btn"
                                aria-label="Fermer"
                            >
                                <FaTimes className="text-lg" />
                            </button>
                        </div>
                        <div className="locpriority-modal-body">
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="locpriority-modal-img"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LocPriority;
