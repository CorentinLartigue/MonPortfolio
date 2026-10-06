import React from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaGithub, FaReact, FaDatabase } from 'react-icons/fa';
import { SiNestjs } from 'react-icons/si';
import dovinyle_home from '/images/projects/dovinyle-home.png';
import dovinyle_catalog from '/images/projects/dovinyle-catalog.png';
import dovinyle_collection from '/images/projects/dovinyle-collection.png';
import dovinyle_cart from '/images/projects/dovinyle-cart.png';
import '../../styles/projects.css';

const Dovinyle: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="min-h-screen bg-[#020617] text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-12">
                {/* Header */}
                <div className="relative">
                    <div className="absolute top-0 left-0">
                        <ReturnButton />
                    </div>
                    <div className="text-center pt-16">
                        <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 mb-6 tracking-tight">
                            {t('project.dovinyle.title')}
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            {t('project.dovinyle.desc')}
                        </p>
                    </div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    {/* Intro Card */}
                    <div className="md:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-800 shadow-xl hover:shadow-cyan-900/20 transition-all">
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                            <span className="w-2 h-8 bg-cyan-500 rounded-full"></span>
                            {t('project.dovinyle.introTitle')}
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {t('project.dovinyle.introText')}
                        </p>
                    </div>

                    {/* Tech Stack Card */}
                    <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 flex flex-col justify-center shadow-xl">
                        <h2 className="text-xl font-bold mb-6 text-gray-100">{t('project.dovinyle.techTitle')}</h2>
                        <div className="space-y-5">
                            <div className="flex items-center gap-4 text-cyan-400">
                                <FaReact className="text-3xl drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                                <span className="text-gray-300 font-medium">{t('project.dovinyle.techFront')}</span>
                            </div>
                            <div className="flex items-center gap-4 text-red-500">
                                <SiNestjs className="text-3xl drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                                <span className="text-gray-300 font-medium">{t('project.dovinyle.techBack')}</span>
                            </div>
                            <div className="flex items-center gap-4 text-blue-400">
                                <FaDatabase className="text-3xl drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
                                <span className="text-gray-300 font-medium">{t('project.dovinyle.techDb')}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((num) => (
                        <div key={num} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:bg-gray-800 transition-colors shadow-lg group">
                            <div className="text-cyan-500 font-black text-4xl mb-4 opacity-30 group-hover:opacity-100 transition-opacity">0{num}</div>
                            <p className="text-gray-300 font-medium leading-relaxed">
                                {t(`project.dovinyle.feat${num}`)}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Screenshots Gallery */}
                <div className="space-y-12 pt-12">
                    <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-4">
                        <span className="h-px w-16 bg-gray-700"></span>
                        Interface & Expérience
                        <span className="h-px w-16 bg-gray-700"></span>
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="group space-y-4">
                            <div className="overflow-hidden rounded-xl border-2 border-gray-800 shadow-lg group-hover:border-cyan-500/50 transition-colors">
                                <img src={dovinyle_home} alt="Dovinyle Home" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{t('project.dovinyle.homeTitle')}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t('project.dovinyle.homeDesc')}</p>
                        </div>
                        
                        <div className="group space-y-4">
                            <div className="overflow-hidden rounded-xl border-2 border-gray-800 shadow-lg group-hover:border-cyan-500/50 transition-colors">
                                <img src={dovinyle_catalog} alt="Dovinyle Catalog" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{t('project.dovinyle.catalogTitle')}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t('project.dovinyle.catalogDesc')}</p>
                        </div>
                        
                        <div className="group space-y-4">
                            <div className="overflow-hidden rounded-xl border-2 border-gray-800 shadow-lg group-hover:border-cyan-500/50 transition-colors">
                                <img src={dovinyle_collection} alt="Dovinyle Collection" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{t('project.dovinyle.collectionTitle')}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t('project.dovinyle.collectionDesc')}</p>
                        </div>
                        
                        <div className="group space-y-4">
                            <div className="overflow-hidden rounded-xl border-2 border-gray-800 shadow-lg group-hover:border-cyan-500/50 transition-colors">
                                <img src={dovinyle_cart} alt="Dovinyle Cart" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{t('project.dovinyle.cartTitle')}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{t('project.dovinyle.cartDesc')}</p>
                        </div>
                    </div>
                </div>

                {/* Repository Links */}
                <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-700 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                    <div>
                        <h2 className="text-2xl font-bold mb-2 text-white">Code Source</h2>
                        <p className="text-gray-400">Explorez l'architecture de ce projet sur GitHub</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="https://github.com/CorentinLartigue/vinyle-front" target="_blank" rel="noopener noreferrer" 
                           className="flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full border border-gray-600 transition-colors group">
                            <FaGithub className="text-xl group-hover:text-cyan-400 transition-colors" />
                            <span className="font-medium text-gray-200 group-hover:text-white transition-colors">Frontend</span>
                        </a>
                        <a href="https://github.com/kilbertusrobin/vinyl_backend" target="_blank" rel="noopener noreferrer"
                           className="flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full border border-gray-600 transition-colors group">
                            <FaGithub className="text-xl group-hover:text-red-400 transition-colors" />
                            <span className="font-medium text-gray-200 group-hover:text-white transition-colors">Backend</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dovinyle;
