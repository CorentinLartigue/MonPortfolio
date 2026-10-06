import React from 'react';
import maquette_sneaky from '/images/projects/maquette-sneaky.png';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaShoePrints, FaFireAlt, FaCodeBranch } from 'react-icons/fa';
import '../../styles/projects.css';

const Sneaky: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-indigo-500/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <ReturnButton />
            </div>

            {/* Massive Hero */}
            <div className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#020617] to-[#020617] -z-10"></div>
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
                    <FaShoePrints className="text-7xl text-indigo-500 -rotate-12 drop-shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                    <h1 className="text-7xl md:text-9xl font-black text-white uppercase tracking-tighter" style={{WebkitTextStroke: '2px #f97316', color: 'transparent'}}>
                        {t('project.sneaky.title')}
                    </h1>
                    <p className="text-2xl font-bold text-indigo-400 uppercase tracking-widest max-w-2xl">
                        {t('project.sneaky.desc')}
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">
                
                {/* Intro paragraphs */}
                <div className="bg-slate-900/50 p-10 md:p-16 rounded-[3rem] border border-slate-800 text-center space-y-8 shadow-2xl backdrop-blur-sm">
                    <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed max-w-4xl mx-auto">
                        {t('project.sneaky.paragraph1')}
                    </p>
                    <p className="text-lg text-slate-500 max-w-3xl mx-auto">
                        {t('project.sneaky.paragraph2')}
                    </p>
                </div>

                {/* Features & Tech */}
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-10">
                        <div className="flex items-center gap-4 border-b-2 border-indigo-500 pb-4">
                            <FaFireAlt className="text-4xl text-indigo-500" />
                            <h2 className="text-4xl font-black text-white uppercase tracking-tight">{t('project.sneaky.featuresTitle')}</h2>
                        </div>
                        <ul className="space-y-8">
                            {[1, 2, 3].map(i => (
                                <li key={i} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-colors group">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-500 transition-colors uppercase">{t(`project.sneaky.feature${i}Title`)}</h3>
                                    <p className="text-slate-400">{t(`project.sneaky.feature${i}Text`)}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-10">
                        <div className="flex items-center gap-4 border-b-2 border-indigo-500 pb-4">
                            <FaCodeBranch className="text-4xl text-indigo-500" />
                            <h2 className="text-4xl font-black text-white uppercase tracking-tight">{t('project.sneaky.techTitle')}</h2>
                        </div>
                        <ul className="space-y-8">
                            {[1, 2, 3].map(i => (
                                <li key={i} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-colors group">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-500 transition-colors uppercase">{t(`project.sneaky.tech${i}Title`)}</h3>
                                    <p className="text-slate-400">{t(`project.sneaky.tech${i}Text`)}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Mission / Design */}
                <div className="bg-indigo-500 p-1 rounded-[3rem] shadow-[0_0_50px_rgba(249,115,22,0.15)]">
                    <div className="bg-slate-950 p-10 md:p-16 rounded-[2.8rem] space-y-12">
                        <h2 className="text-5xl font-black text-center text-white uppercase tracking-tighter mb-12">
                            {t('project.sneaky.missionTitle')}
                        </h2>
                        
                        <div className="overflow-hidden rounded-2xl border border-slate-800 shadow-2xl">
                            <img src={maquette_sneaky} alt="Maquette Sneaky" className="w-full hover:scale-105 transition-transform duration-700" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 text-lg">
                            <div className="space-y-6">
                                <p className="text-slate-300 leading-relaxed font-medium">
                                    {t('project.sneaky.missionText1')}
                                </p>
                                <p className="text-slate-500 leading-relaxed">
                                    {t('project.sneaky.missionText2')}
                                </p>
                            </div>
                            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 flex flex-col justify-center">
                                <ul className="space-y-4">
                                    {[1, 2, 3].map(i => (
                                        <li key={i} className="flex items-center gap-4 text-slate-300 font-bold uppercase tracking-wider">
                                            <span className="w-8 h-8 rounded-full bg-indigo-500 text-slate-950 flex items-center justify-center shrink-0">0{i}</span>
                                            {t(`project.sneaky.bullet${i}`)}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sneaky;