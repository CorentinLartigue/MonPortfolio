import React from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaShopify, FaReact, FaNodeJs, FaExternalLinkAlt, FaCamera } from 'react-icons/fa';
import '../../styles/projects.css';

const LocPriority: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <ReturnButton />
            </div>

            {/* Hero Section */}
            <div className="relative pt-32 pb-20 px-6 lg:px-12 flex flex-col items-center text-center border-b border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950 pointer-events-none"></div>
                <FaShopify className="text-6xl text-cyan-500 mb-6 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" />
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight z-10">
                    {t('project.locpriority.title')}
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 max-w-3xl z-10">
                    {t('project.locpriority.desc')}
                </p>
            </div>

            {/* Content Container */}
            <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">
                
                {/* Intro */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
                            <span className="w-12 h-1 bg-cyan-500"></span>
                            {t('project.locpriority.introTitle')}
                        </h2>
                        <p className="text-lg text-slate-400 leading-relaxed">
                            {t('project.locpriority.introText')}
                        </p>
                    </div>
                    <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-2xl relative group">
                        <div className="absolute inset-0 bg-cyan-500/5 rounded-3xl group-hover:bg-cyan-500/10 transition-colors"></div>
                        <h3 className="text-xl font-bold text-cyan-400 mb-6">{t('project.locpriority.techTitle')}</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4"><FaShopify className="text-cyan-500 text-2xl"/> <span className="font-medium">{t('project.locpriority.techShopify')}</span></li>
                            <li className="flex items-center gap-4"><FaReact className="text-cyan-400 text-2xl"/> <span className="font-medium">{t('project.locpriority.techFront')}</span></li>
                            <li className="flex items-center gap-4"><FaNodeJs className="text-green-500 text-2xl"/> <span className="font-medium">{t('project.locpriority.techBack')}</span></li>
                        </ul>
                    </div>
                </div>

                {/* Timeline Features */}
                <div>
                    <h2 className="text-4xl font-bold text-center text-white mb-16">{t('project.locpriority.featTitle')}</h2>
                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                        
                        {/* Feat 1 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-cyan-500 text-slate-950 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">1</div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 transition-colors shadow-lg">
                                <p className="text-slate-300 font-medium leading-relaxed">{t('project.locpriority.feat1')}</p>
                            </div>
                        </div>
                        
                        {/* Feat 2 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-cyan-500 text-slate-950 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">2</div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 transition-colors shadow-lg">
                                <p className="text-slate-300 font-medium leading-relaxed">{t('project.locpriority.feat2')}</p>
                            </div>
                        </div>

                        {/* Feat 3 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-cyan-500 text-slate-950 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">3</div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 transition-colors shadow-lg">
                                <p className="text-slate-300 font-medium leading-relaxed">{t('project.locpriority.feat3')}</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Screenshot Placeholder */}
                <div className="bg-slate-900/50 rounded-3xl p-8 border border-slate-800 text-center">
                    <div className="flex flex-col items-center justify-center w-full h-96 bg-slate-950 rounded-xl border border-dashed border-slate-700 text-slate-500 mb-6">
                        <FaCamera className="text-6xl mb-4 opacity-30" />
                        <span className="font-bold tracking-widest uppercase">Espace Capture d'écran LocPriority</span>
                    </div>
                </div>

                {/* Links */}
                <div className="grid md:grid-cols-3 gap-6">
                    <a href="https://www.home-made.io/portfolio/location-priority/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 bg-slate-900 hover:bg-cyan-900/20 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all text-center group">
                        <FaExternalLinkAlt className="text-3xl text-cyan-500 mb-4 group-hover:scale-110 transition-transform"/>
                        <span className="font-bold text-white mb-2">Project Page</span>
                        <span className="text-sm text-slate-400">home-made.io</span>
                    </a>
                    <a href="https://www.home-made.io/welcome-location-priority" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 bg-slate-900 hover:bg-cyan-900/20 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all text-center group">
                        <FaExternalLinkAlt className="text-3xl text-cyan-500 mb-4 group-hover:scale-110 transition-transform"/>
                        <span className="font-bold text-white mb-2">Welcome Page</span>
                        <span className="text-sm text-slate-400">home-made.io</span>
                    </a>
                    <a href="https://apps.shopify.com/location-priority?locale=fr" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 bg-slate-900 hover:bg-cyan-900/20 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all text-center group">
                        <FaShopify className="text-3xl text-cyan-500 mb-4 group-hover:scale-110 transition-transform"/>
                        <span className="font-bold text-white mb-2">Shopify App Store</span>
                        <span className="text-sm text-slate-400">apps.shopify.com</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LocPriority;
