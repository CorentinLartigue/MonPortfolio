import React from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaGithub, FaAngular, FaDocker, FaCamera } from 'react-icons/fa';
import { SiNestjs } from 'react-icons/si';
import '../../styles/projects.css';

const Placeholder = () => (
    <div className="flex flex-col items-center justify-center w-full h-72 bg-indigo-900/20 rounded-2xl border-2 border-dashed border-indigo-500/30 text-indigo-400 group-hover:border-indigo-400/60 group-hover:bg-indigo-900/40 transition-all duration-300">
        <FaCamera className="text-5xl mb-4 opacity-50" />
        <span className="font-medium tracking-widest text-sm uppercase">Aperçu Ytellerie</span>
    </div>
);

const Ytellerie: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <ReturnButton />
            </div>
            
            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* Left Fixed Panel */}
                <div className="lg:w-1/3 lg:sticky lg:top-0 lg:h-screen p-12 flex flex-col justify-center border-r border-indigo-900/30 bg-slate-950/80 backdrop-blur-xl z-10">
                    <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-purple-600 mb-6">
                        {t('project.ytellerie.title')}
                    </h1>
                    <p className="text-lg text-slate-400 leading-relaxed mb-12">
                        {t('project.ytellerie.desc')}
                    </p>
                    
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold tracking-widest uppercase text-indigo-500">{t('project.ytellerie.techTitle')}</h3>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 bg-indigo-950/50 px-4 py-2 rounded-full border border-indigo-800/50 text-indigo-300">
                                <FaAngular className="text-xl" /> <span>{t('project.ytellerie.techFront')}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-indigo-950/50 px-4 py-2 rounded-full border border-indigo-800/50 text-indigo-300">
                                <SiNestjs className="text-xl" /> <span>{t('project.ytellerie.techBack')}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-indigo-950/50 px-4 py-2 rounded-full border border-indigo-800/50 text-indigo-300">
                                <FaDocker className="text-xl" /> <span>{t('project.ytellerie.techDocker')}</span>
                            </div>
                        </div>
                    </div>
                    
                    <a href="https://github.com/Ynov-projects-CYCA/Y.tellerie" target="_blank" rel="noopener noreferrer" 
                       className="mt-auto inline-flex items-center gap-3 text-slate-300 hover:text-white group pt-12">
                        <div className="p-3 bg-slate-900 rounded-full group-hover:bg-indigo-600 transition-colors">
                            <FaGithub className="text-xl" />
                        </div>
                        <span className="font-semibold underline decoration-indigo-500/30 group-hover:decoration-indigo-500 transition-all">Voir le code source</span>
                    </a>
                </div>

                {/* Right Scrollable Content */}
                <div className="lg:w-2/3 p-8 md:p-16 lg:p-24 space-y-24 mt-12 lg:mt-0">
                    <section>
                        <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-indigo-500 pl-4">
                            {t('project.ytellerie.introTitle')}
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
                            {t('project.ytellerie.introText')}
                        </p>
                    </section>

                    <section className="space-y-12">
                        <div className="group space-y-6">
                            <Placeholder />
                            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                                <h3 className="text-xl font-bold text-indigo-400 mb-3">{t('project.ytellerie.featTitle')} - 01</h3>
                                <p className="text-slate-300">{t('project.ytellerie.feat1')}</p>
                            </div>
                        </div>

                        <div className="group space-y-6">
                            <Placeholder />
                            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                                <h3 className="text-xl font-bold text-indigo-400 mb-3">{t('project.ytellerie.featTitle')} - 02</h3>
                                <p className="text-slate-300">{t('project.ytellerie.feat2')}</p>
                            </div>
                        </div>

                        <div className="group space-y-6">
                            <Placeholder />
                            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
                                <h3 className="text-xl font-bold text-indigo-400 mb-3">{t('project.ytellerie.featTitle')} - 03</h3>
                                <p className="text-slate-300">{t('project.ytellerie.feat3')}</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Ytellerie;
