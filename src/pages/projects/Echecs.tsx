import React from 'react';
import echecs_regles from '/images/projects/echecs-regles.png';
import echecs_jeux from '/images/projects/echecs-jeux.png';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaChessKnight, FaChessBoard, FaTrophy, FaLightbulb } from 'react-icons/fa';
import '../../styles/projects.css';

const Echecs: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <ReturnButton />
            </div>

            {/* Checkerboard Header */}
            <div className="relative py-32 px-6 flex flex-col items-center justify-center text-center border-b-8 border-slate-100 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)', backgroundPosition: '0 0, 40px 40px', backgroundSize: '80px 80px'}}></div>
                <FaChessKnight className="text-7xl text-blue-500 mb-8 z-10 drop-shadow-2xl" />
                <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight z-10 uppercase">
                    {t('project.echecs.title')}
                </h1>
                <p className="text-xl md:text-3xl text-slate-400 font-light max-w-3xl z-10">
                    {t('project.echecs.desc')}
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-20 space-y-24">
                
                {/* About & Game Preview */}
                <div className="grid md:grid-cols-2 gap-12 items-center bg-slate-900 p-8 rounded-2xl border border-slate-800">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-blue-500 mb-2">
                            <FaChessBoard className="text-3xl" />
                            <h2 className="text-2xl font-bold uppercase tracking-widest">{t('project.echecs.aboutTitle')}</h2>
                        </div>
                        <p className="text-lg leading-relaxed text-slate-400">
                            {t('project.echecs.aboutText')}
                        </p>
                    </div>
                    <div>
                        <img src={echecs_jeux} alt="Plateau de jeu" className="w-full rounded-xl border-4 border-slate-800 shadow-2xl hover:border-blue-500 transition-colors duration-500" />
                    </div>
                </div>

                {/* Features */}
                <div>
                    <h2 className="text-3xl font-bold text-white mb-10 text-center uppercase tracking-widest border-b border-slate-800 pb-6">{t('project.echecs.featuresTitle')}</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div className="space-y-8">
                            {[
                                { title: t('project.echecs.feature1Title'), text: t('project.echecs.feature1Text') },
                                { title: t('project.echecs.feature2Title'), text: t('project.echecs.feature2Text') },
                                { title: t('project.echecs.feature3Title'), text: t('project.echecs.feature3Text') },
                                { title: t('project.echecs.feature4Title'), text: t('project.echecs.feature4Text') }
                            ].map((feat, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="text-blue-500 font-bold text-xl group-hover:text-white transition-colors">0{i+1}.</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{feat.title}</h3>
                                        <p className="text-slate-400">{feat.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <img src={echecs_regles} alt="Règles" className="w-full rounded-xl border-4 border-slate-800 shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500" />
                        </div>
                    </div>
                </div>

                {/* Challenges & Learning */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-slate-100 text-slate-900 p-10 rounded-2xl">
                        <div className="flex items-center gap-4 mb-8">
                            <FaTrophy className="text-3xl text-blue-600" />
                            <h2 className="text-2xl font-black uppercase">{t('project.echecs.challengesTitle')}</h2>
                        </div>
                        <ul className="space-y-6">
                            {[
                                { title: t('project.echecs.challenge1Title'), text: t('project.echecs.challenge1Text') },
                                { title: t('project.echecs.challenge2Title'), text: t('project.echecs.challenge2Text') },
                                { title: t('project.echecs.challenge3Title'), text: t('project.echecs.challenge3Text') }
                            ].map((c, i) => (
                                <li key={i}>
                                    <strong className="block text-lg font-bold mb-1">{c.title}</strong>
                                    <span className="text-slate-700">{c.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-slate-900 p-10 rounded-2xl border border-slate-800 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <FaLightbulb className="text-3xl text-blue-500" />
                                <h2 className="text-2xl font-black text-white uppercase">{t('project.echecs.learnedTitle')}</h2>
                            </div>
                            <p className="text-lg leading-relaxed text-slate-400 italic">
                                "{t('project.echecs.learnedText')}"
                            </p>
                        </div>
                        
                        <div className="mt-12 pt-8 border-t border-slate-800">
                            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">{t('project.echecs.techTitle')}</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm text-slate-300">
                                <div><strong className="block text-white">{t('project.echecs.tech1Title')}</strong> {t('project.echecs.tech1Text')}</div>
                                <div><strong className="block text-white">{t('project.echecs.tech2Title')}</strong> {t('project.echecs.tech2Text')}</div>
                                <div><strong className="block text-white">{t('project.echecs.tech3Title')}</strong> {t('project.echecs.tech3Text')}</div>
                                <div><strong className="block text-white">{t('project.echecs.tech4Title')}</strong> {t('project.echecs.tech4Text')}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Echecs;