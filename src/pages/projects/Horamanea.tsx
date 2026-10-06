import React from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaGithub, FaReact, FaNodeJs, FaCamera } from 'react-icons/fa';
import '../../styles/projects.css';

const Horamanea: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <ReturnButton />
            </div>

            <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 space-y-16">
                
                {/* Header Dashboard Style */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                    <div className="z-10 max-w-2xl">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 font-bold text-sm mb-6 uppercase tracking-widest">
                            Plateforme Collaborative
                        </div>
                        <h1 className="text-5xl font-black text-white mb-6">
                            {t('project.horamanea.title')}
                        </h1>
                        <p className="text-xl text-slate-400">
                            {t('project.horamanea.desc')}
                        </p>
                    </div>
                    <div className="z-10 flex flex-col gap-4 w-full md:w-auto">
                        <a href="https://github.com/YanJoe72/HoramaneaFront" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-slate-800 hover:bg-blue-600 hover:text-white transition-all text-slate-300 px-6 py-4 rounded-xl font-bold border border-slate-700">
                            <FaGithub className="text-xl" /> Frontend Repo
                        </a>
                        <a href="https://github.com/YanJoe72/HoramaneaBack" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-slate-800 hover:bg-blue-600 hover:text-white transition-all text-slate-300 px-6 py-4 rounded-xl font-bold border border-slate-700">
                            <FaGithub className="text-xl" /> Backend Repo
                        </a>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="md:col-span-1 space-y-8">
                        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
                            <h2 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-4">{t('project.horamanea.introTitle')}</h2>
                            <p className="text-slate-400 leading-relaxed">
                                {t('project.horamanea.introText')}
                            </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-slate-800">
                            <h2 className="text-xl font-bold text-blue-400 mb-6">{t('project.horamanea.techTitle')}</h2>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-slate-950/50 p-4 rounded-xl">
                                    <FaReact className="text-cyan-400 text-2xl" />
                                    <span className="font-semibold text-slate-200">{t('project.horamanea.techFront')}</span>
                                </div>
                                <div className="flex items-center gap-4 bg-slate-950/50 p-4 rounded-xl">
                                    <FaNodeJs className="text-green-500 text-2xl" />
                                    <span className="font-semibold text-slate-200">{t('project.horamanea.techBack')}</span>
                                </div>
                                <div className="flex items-center gap-4 bg-slate-950/50 p-4 rounded-xl border border-blue-500/20">
                                    <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs font-black text-slate-900">C</span>
                                    <span className="font-semibold text-blue-400">{t('project.horamanea.techCollab')}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-2 space-y-8">
                        <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">
                            <h2 className="text-2xl font-bold text-white mb-8">{t('project.horamanea.featTitle')}</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors">
                                    <div className="text-blue-500 font-bold mb-2">01</div>
                                    <p className="text-slate-300 font-medium">{t('project.horamanea.feat1')}</p>
                                </div>
                                <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors">
                                    <div className="text-blue-500 font-bold mb-2">02</div>
                                    <p className="text-slate-300 font-medium">{t('project.horamanea.feat2')}</p>
                                </div>
                                <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-colors sm:col-span-2">
                                    <div className="text-blue-500 font-bold mb-2">03</div>
                                    <p className="text-slate-300 font-medium">{t('project.horamanea.feat3')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Screenshot Dashboard */}
                        <div className="bg-slate-900 rounded-3xl p-2 border border-slate-800 shadow-2xl">
                            <div className="bg-slate-950 rounded-[1.25rem] border border-slate-800 h-96 flex flex-col items-center justify-center text-slate-700 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-12 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-blue-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                </div>
                                <FaCamera className="text-6xl mb-4 group-hover:text-blue-500/50 transition-colors" />
                                <span className="font-bold tracking-widest uppercase">Aperçu Interface Horamanea</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Horamanea;
