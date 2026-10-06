import React from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaCode, FaRocket, FaTools, FaBrain, FaTerminal } from 'react-icons/fa';
import '../../styles/projects.css';

const Portfolio: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="min-h-screen bg-gray-950 text-gray-300 font-mono selection:bg-cyan-500/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <ReturnButton />
            </div>

            {/* Terminal Header */}
            <div className="max-w-5xl mx-auto px-6 pt-32 pb-16">
                <div className="w-full bg-gray-900 rounded-t-xl h-10 flex items-center px-4 gap-2 border border-b-0 border-gray-800">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 text-xs text-gray-500 font-sans">~/projects/portfolio</div>
                </div>
                <div className="w-full bg-gray-950 p-8 md:p-12 border border-gray-800 rounded-b-xl shadow-2xl relative overflow-hidden">
                    <FaTerminal className="absolute -bottom-10 -right-10 text-9xl text-gray-800 opacity-50" />
                    <div className="relative z-10 space-y-6">
                        <div className="text-cyan-400 font-bold">$ ./start_project.sh --name "Portfolio"</div>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                            {t('project.portfolio.title')}
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed border-l-4 border-cyan-500 pl-6">
                            {t('project.portfolio.desc')}
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 pb-32 space-y-24">
                
                {/* Objective */}
                <div className="grid md:grid-cols-3 gap-8 items-start">
                    <div className="md:col-span-1 text-cyan-500 flex flex-col gap-4">
                        <FaRocket className="text-5xl" />
                        <h2 className="text-2xl font-bold uppercase tracking-widest text-white">{t('project.portfolio.objectiveTitle')}</h2>
                    </div>
                    <div className="md:col-span-2 bg-gray-900 p-8 rounded-xl border border-gray-800 text-lg leading-relaxed">
                        {t('project.portfolio.objectiveText')}
                    </div>
                </div>

                {/* Features */}
                <div className="space-y-12">
                    <h2 className="text-3xl font-bold text-white flex items-center gap-4 border-b border-gray-800 pb-4">
                        <FaCode className="text-cyan-500" /> {t('project.portfolio.featuresTitle')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-colors group">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                    <span className="text-cyan-500 mr-2">&gt;</span>{t(`project.portfolio.feature${i}Title`)}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{t(`project.portfolio.feature${i}Text`)}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-950 p-10 rounded-2xl border border-gray-800 shadow-2xl">
                    <h2 className="text-3xl font-bold text-white mb-10 text-center flex items-center justify-center gap-4">
                        <FaTools className="text-cyan-500" /> {t('project.portfolio.techTitle')}
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="flex flex-col items-center text-center space-y-3">
                                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-xl border border-cyan-500/20">
                                    {i}
                                </div>
                                <h3 className="text-white font-bold">{t(`project.portfolio.tech${i}Title`)}</h3>
                                <p className="text-xs text-gray-500">{t(`project.portfolio.tech${i}Text`)}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Challenges & Learning */}
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8 border-l-2 border-red-500/30 pl-8">
                        <h2 className="text-2xl font-bold text-white">{t('project.portfolio.challengesTitle')}</h2>
                        <div className="space-y-6">
                            {[1, 2, 3].map(i => (
                                <div key={i}>
                                    <strong className="block text-red-400 mb-1">{t(`project.portfolio.challenge${i}Title`)}</strong>
                                    <span className="text-sm text-gray-400 leading-relaxed">{t(`project.portfolio.challenge${i}Text`)}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gray-900 p-8 rounded-xl border border-gray-800 relative">
                        <FaBrain className="absolute top-8 right-8 text-6xl text-gray-800 opacity-30" />
                        <h2 className="text-2xl font-bold text-white mb-6 relative z-10">{t('project.portfolio.learnedTitle')}</h2>
                        <p className="text-gray-400 leading-relaxed relative z-10">
                            {t('project.portfolio.learnedText')}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;