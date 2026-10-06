import React, { useState } from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import { useTranslate } from '../../hooks/useTranslate';
import {
    FaShopify, FaReact, FaExternalLinkAlt, FaExchangeAlt,
    FaShieldAlt, FaSlidersH, FaBolt, FaTimes, FaSearchPlus
} from 'react-icons/fa';
import { SiLaravel, SiRedis, SiTailwindcss } from 'react-icons/si';
import locprioritySchema from '/images/projects/locpriority/schema_priorite.png';
import locpriorityDashboard from '/images/projects/locpriority/dashboard.png';
import locpriorityRules from '/images/projects/locpriority/rules_priority.png';
import locpriorityEditRule from '/images/projects/locpriority/edit_rule_priority.png';
import '../../styles/projects.css';

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
        <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <ReturnButton />
            </div>

            {/* Hero Section */}
            <header className="relative pt-24 pb-20 px-6 lg:px-12 flex flex-col items-center text-center border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6 z-10">
                    <FaShopify className="text-sm" />
                    <span>{t('project.locpriority.badge')}</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-3 tracking-tight z-10">
                    {t('project.locpriority.title')}
                </h1>

                <p className="text-xl md:text-2xl font-medium text-cyan-400 mb-6 tracking-wide z-10">
                    {t('project.locpriority.subtitle')}
                </p>

                <p className="text-base md:text-lg text-slate-400 max-w-3xl leading-relaxed z-10">
                    {t('project.locpriority.desc')}
                </p>

                {/* Stack Badges */}
                <div className="flex flex-wrap justify-center gap-2.5 mt-8 z-10">
                    <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <SiLaravel className="text-red-500" /> Laravel 13
                    </span>
                    <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <FaReact className="text-cyan-400" /> React 19 & Inertia 2
                    </span>
                    <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <FaShopify className="text-green-500" /> App Bridge v4
                    </span>
                    <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <SiRedis className="text-red-400" /> Redis Queues & Cache
                    </span>
                    <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <SiTailwindcss className="text-sky-400" /> Tailwind CSS
                    </span>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto px-6 py-20 space-y-28">

                {/* Architecture & Context Bento Grid */}
                <section className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="md:col-span-3 bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                                <span className="w-1.5 h-7 bg-cyan-500 rounded-full"></span>
                                {t('project.locpriority.introTitle')}
                            </h2>
                            <p className="text-slate-300 leading-relaxed text-base">
                                {t('project.locpriority.introText')}
                            </p>
                        </div>
                        <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-2 gap-4 text-xs text-slate-400">
                            <div>
                                <span className="block text-slate-500 uppercase tracking-wider font-semibold">Mode d'exécution</span>
                                <span className="text-slate-200 font-medium">Asynchrone post-achat</span>
                            </div>
                            <div>
                                <span className="block text-slate-500 uppercase tracking-wider font-semibold">Intégration</span>
                                <span className="text-slate-200 font-medium">Shopify Embedded App</span>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2 bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl">
                        <h2 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                            {t('project.locpriority.archTitle')}
                        </h2>
                        <ul className="space-y-4 text-sm text-slate-300">
                            <li className="flex items-start gap-3">
                                <SiLaravel className="text-red-500 text-lg mt-0.5 shrink-0" />
                                <span>{t('project.locpriority.techLaravel')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaReact className="text-cyan-400 text-lg mt-0.5 shrink-0" />
                                <span>{t('project.locpriority.techReact')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaExchangeAlt className="text-emerald-400 text-base mt-0.5 shrink-0" />
                                <span>{t('project.locpriority.techLedger')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <FaBolt className="text-amber-400 text-base mt-0.5 shrink-0" />
                                <span>{t('project.locpriority.techRealtime')}</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Orchestration Scheme (Full Width Highlight) */}
                <section className="space-y-6">
                    <div className="text-center max-w-3xl mx-auto space-y-3">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                            {t('project.locpriority.schemaTitle')}
                        </h2>
                        <p className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">
                            {t('project.locpriority.schemaSubtitle')}
                        </p>
                        <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                            {t('project.locpriority.schemaDesc')}
                        </p>
                    </div>

                    <div
                        onClick={() => setSelectedImage({ src: locprioritySchema, title: t('project.locpriority.schemaTitle') })}
                        className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl hover:border-cyan-500/50 transition-all p-3 md:p-6"
                    >
                        <div className="relative overflow-hidden rounded-2xl bg-slate-950">
                            <img
                                src={locprioritySchema}
                                alt={t('project.locpriority.schemaTitle')}
                                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                            />
                            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-cyan-300 font-semibold text-sm">
                                <FaSearchPlus className="text-lg" />
                                <span>Agrandir le schéma</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Merchant Screens Gallery */}
                <section className="space-y-10">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-extrabold text-white mb-2">
                            {t('project.locpriority.galleryTitle')}
                        </h2>
                        <p className="text-slate-400 text-sm">
                            {t('project.locpriority.gallerySubtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {galleryScreens.map((screen) => (
                            <article
                                key={screen.id}
                                className="group bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-lg hover:border-cyan-500/40 transition-all flex flex-col"
                            >
                                <div
                                    onClick={() => setSelectedImage({ src: screen.image, title: t(screen.titleKey) })}
                                    className="relative cursor-pointer overflow-hidden bg-slate-950 border-b border-slate-800"
                                >
                                    <img
                                        src={screen.image}
                                        alt={t(screen.titleKey)}
                                        className="w-full h-52 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md text-xs font-semibold text-cyan-400 border border-slate-700/50">
                                        {screen.tag}
                                    </div>
                                    <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs gap-1.5 font-medium">
                                        <FaSearchPlus />
                                        <span>Agrandir</span>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                                            {t(screen.titleKey)}
                                        </h3>
                                        <p className="text-slate-400 text-xs leading-relaxed">
                                            {t(screen.descKey)}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                {/* Core Engine Features Grid */}
                <section className="space-y-10">
                    <h2 className="text-3xl font-extrabold text-center text-white">
                        {t('project.locpriority.featuresTitle')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {engineFeatures.map((feat, idx) => {
                            const IconComponent = feat.icon;
                            return (
                                <div
                                    key={idx}
                                    className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900 transition-all shadow-md group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4 text-lg group-hover:scale-110 transition-transform">
                                        <IconComponent />
                                    </div>
                                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                                        {t(feat.titleKey)}
                                    </h3>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        {t(feat.descKey)}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* External Production Links */}
                <section className="pt-8">
                    <h2 className="text-2xl font-bold text-center text-white mb-8">
                        {t('project.locpriority.linksTitle')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <a
                            href="https://apps.shopify.com/location-priority?locale=fr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center p-8 bg-slate-900 hover:bg-cyan-950/30 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all text-center group shadow-lg"
                        >
                            <FaShopify className="text-3xl text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                            <span className="font-bold text-white mb-1.5">{t('project.locpriority.linkAppStore')}</span>
                            <span className="text-xs text-slate-400">apps.shopify.com</span>
                        </a>

                        <a
                            href="https://www.home-made.io/portfolio/location-priority/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center p-8 bg-slate-900 hover:bg-cyan-950/30 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all text-center group shadow-lg"
                        >
                            <FaExternalLinkAlt className="text-2xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                            <span className="font-bold text-white mb-1.5">{t('project.locpriority.linkPortfolio')}</span>
                            <span className="text-xs text-slate-400">home-made.io</span>
                        </a>

                        <a
                            href="https://www.home-made.io/welcome-location-priority"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center p-8 bg-slate-900 hover:bg-cyan-950/30 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all text-center group shadow-lg"
                        >
                            <FaExternalLinkAlt className="text-2xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                            <span className="font-bold text-white mb-1.5">{t('project.locpriority.linkWelcome')}</span>
                            <span className="text-xs text-slate-400">Documentation onboarding</span>
                        </a>
                    </div>
                </section>
            </main>

            {/* Modal Zoom Image */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-6xl max-h-[90vh] bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
                            <h3 className="text-base font-bold text-white truncate mr-4">
                                {selectedImage.title}
                            </h3>
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
                                aria-label="Fermer"
                            >
                                <FaTimes className="text-lg" />
                            </button>
                        </div>
                        <div className="overflow-auto p-4 flex items-center justify-center bg-slate-950">
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="max-h-[75vh] w-auto object-contain rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LocPriority;
