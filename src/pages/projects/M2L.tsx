import React from 'react';
import M2L_statique_ligue from '/images/projects/m2l-statique-ligue.png';
import M2L_dynamique_ligue from '/images/projects/m2l-dynamique-ligue.png';
import M2L_trello from '/images/projects/m2l-trello.png';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaRunning, FaDesktop, FaServer, FaTasks } from 'react-icons/fa';
import '../../styles/projects.css';

const M2L: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-cyan-500/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <ReturnButton />
            </div>

            {/* Header */}
            <div className="relative bg-gradient-to-r from-blue-900 to-cyan-900 py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
                <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                        <FaRunning className="text-4xl text-slate-900" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 uppercase italic">
                        {t('project.m2l.title')}
                    </h1>
                    <p className="text-xl text-cyan-100 max-w-3xl font-medium">
                        {t('project.m2l.desc')}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
                
                {/* Intro */}
                <div className="bg-slate-800 p-10 rounded-2xl border-l-8 border-cyan-500 shadow-xl">
                    <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-wider">{t('project.m2l.introTitle')}</h2>
                    <p className="text-lg text-slate-300 leading-relaxed">
                        {t('project.m2l.introText')}
                    </p>
                </div>

                {/* Compare Section */}
                <div>
                    <h2 className="text-4xl font-black text-white text-center mb-16 uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{t('project.m2l.compareTitle')}</h2>
                    
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Static */}
                        <div className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl group hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-blue-950 p-6 flex items-center gap-4 border-b border-blue-900">
                                <FaDesktop className="text-3xl text-blue-400" />
                                <h3 className="text-2xl font-bold text-white uppercase">{t('project.m2l.staticTitle')}</h3>
                            </div>
                            <div className="p-8 space-y-6">
                                <img src={M2L_statique_ligue} alt="Site statique" className="w-full rounded-xl border-4 border-slate-700 shadow-lg group-hover:border-blue-500 transition-colors" />
                                <p className="text-slate-300">{t('project.m2l.staticText')}</p>
                                <ul className="space-y-3 bg-slate-900 p-6 rounded-xl">
                                    {[1, 2, 3, 4].map(i => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1.5 w-2 h-2 rounded bg-blue-500 shrink-0"></div>
                                            <span className="text-sm text-slate-400">{t(`project.m2l.staticBullet${i}`)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Dynamic */}
                        <div className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl group hover:-translate-y-2 transition-transform duration-300">
                            <div className="bg-cyan-950 p-6 flex items-center gap-4 border-b border-cyan-900">
                                <FaServer className="text-3xl text-cyan-400" />
                                <h3 className="text-2xl font-bold text-white uppercase">{t('project.m2l.dynamicTitle')}</h3>
                            </div>
                            <div className="p-8 space-y-6">
                                <img src={M2L_dynamique_ligue} alt="Site dynamique" className="w-full rounded-xl border-4 border-slate-700 shadow-lg group-hover:border-cyan-500 transition-colors" />
                                <p className="text-slate-300">{t('project.m2l.dynamicText')}</p>
                                <ul className="space-y-3 bg-slate-900 p-6 rounded-xl">
                                    {[1, 2, 3, 4].map(i => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1.5 w-2 h-2 rounded bg-cyan-500 shrink-0"></div>
                                            <span className="text-sm text-slate-400">{t(`project.m2l.dynamicBullet${i}`)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-blue-900/20 p-8 rounded-2xl border border-blue-800">
                        <h3 className="text-xl font-bold text-blue-400 mb-6 uppercase tracking-widest">{t('project.m2l.staticTitle')} Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {[t('project.m2l.techStatic1'), t('project.m2l.techStatic2'), t('project.m2l.techStatic3')].map(tech => (
                                <span key={tech} className="px-4 py-2 bg-slate-800 rounded-full text-sm font-medium border border-slate-600">{tech}</span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-cyan-900/20 p-8 rounded-2xl border border-cyan-800">
                        <h3 className="text-xl font-bold text-cyan-400 mb-6 uppercase tracking-widest">{t('project.m2l.dynamicTitle')} Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {[t('project.m2l.techDynamic1'), t('project.m2l.techDynamic2'), t('project.m2l.techDynamic3')].map(tech => (
                                <span key={tech} className="px-4 py-2 bg-slate-800 rounded-full text-sm font-medium border border-slate-600">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Methodology */}
                <div className="bg-slate-800 p-10 md:p-16 rounded-3xl border border-slate-700 text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-slate-900 rounded-full mb-8">
                        <FaTasks className="text-3xl text-cyan-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-10 uppercase tracking-widest">{t('project.m2l.methodTitle')}</h2>
                    <img src={M2L_trello} alt="Trello" className="max-w-2xl w-full mx-auto rounded-xl shadow-2xl mb-10 border-4 border-slate-700" />
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        {t('project.m2l.methodText')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default M2L;