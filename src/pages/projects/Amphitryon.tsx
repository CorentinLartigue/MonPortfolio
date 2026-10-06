import React from 'react';
import amphitryon_acces from '/images/projects/amphitryon-acces.png';
import amphitryon_plats from '/images/projects/amphitryon-plats.png';
import amphitryon_plat_detail from '/images/projects/amphitryon-plat-detail.png';
import amphitryon_services from '/images/projects/amphitryon-services.png';
import amphitryon_plats_service from '/images/projects/amphitryon-plats-service.png';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaUtensils, FaConciergeBell, FaListAlt } from 'react-icons/fa';
import '../../styles/projects.css';

const AmphitryonPage: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="min-h-screen bg-[#0f172a] text-[#e2e8f0] font-serif selection:bg-blue-900/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <ReturnButton />
            </div>

            {/* Hero Section */}
            <div className="relative w-full h-[60vh] flex flex-col items-center justify-center bg-[#292524] border-b-4 border-blue-800 overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-700 via-[#0f172a] to-[#0f172a]"></div>
                <FaUtensils className="text-5xl text-blue-700 mb-6 z-10" />
                <h1 className="text-6xl md:text-8xl font-black text-[#fafaf9] mb-4 text-center z-10 uppercase tracking-widest drop-shadow-lg">
                    {t('project.amphitryon.title')}
                </h1>
                <div className="w-24 h-1 bg-blue-700 mb-6 z-10"></div>
                <p className="text-xl md:text-2xl text-[#d6d3d1] font-sans max-w-2xl text-center z-10 italic">
                    {t('project.amphitryon.desc')}
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">
                
                {/* Intro & Roles */}
                <div className="space-y-12">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wider">{t('project.amphitryon.introTitle')}</h2>
                        <p className="text-lg text-[#a8a29e] font-sans leading-relaxed">
                            {t('project.amphitryon.introText')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mt-16 font-sans">
                        <div className="bg-[#292524] p-8 rounded-sm border-t-2 border-blue-700 hover:-translate-y-2 transition-transform duration-300">
                            <FaConciergeBell className="text-3xl text-blue-500 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">{t('project.amphitryon.role1Title')}</h3>
                            <p className="text-[#a8a29e]">{t('project.amphitryon.role1Desc')}</p>
                        </div>
                        <div className="bg-[#292524] p-8 rounded-sm border-t-2 border-blue-700 hover:-translate-y-2 transition-transform duration-300">
                            <FaUtensils className="text-3xl text-blue-500 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">{t('project.amphitryon.role2Title')}</h3>
                            <p className="text-[#a8a29e]">{t('project.amphitryon.role2Desc')}</p>
                        </div>
                        <div className="bg-[#292524] p-8 rounded-sm border-t-2 border-blue-700 hover:-translate-y-2 transition-transform duration-300">
                            <FaListAlt className="text-3xl text-blue-500 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-3">{t('project.amphitryon.role3Title')}</h3>
                            <p className="text-[#a8a29e]">{t('project.amphitryon.role3Desc')}</p>
                        </div>
                    </div>
                </div>

                {/* Features / Cards */}
                <div className="space-y-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-white uppercase tracking-widest">{t('project.amphitryon.sectionTitle')}</h2>
                    
                    {/* Card 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-12 bg-[#292524] p-8 md:p-12 border border-[#44403c] shadow-2xl">
                        <div className="md:w-1/2">
                            <img src={amphitryon_acces} alt="Chef Cuisinier" className="w-full rounded-sm border-4 border-[#0f172a] shadow-xl grayscale hover:grayscale-0 transition-all duration-500" />
                        </div>
                        <div className="md:w-1/2 space-y-6">
                            <h3 className="text-3xl font-bold text-blue-500">{t('project.amphitryon.card1Title')}</h3>
                            <p className="text-lg text-[#d6d3d1] font-sans leading-relaxed">
                                {t('project.amphitryon.card1Desc')}
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 bg-[#292524] p-8 md:p-12 border border-[#44403c] shadow-2xl">
                        <div className="md:w-1/2 flex gap-4">
                            <img src={amphitryon_plats} alt="Gestion des plats" className="w-1/2 rounded-sm border-4 border-[#0f172a] shadow-xl object-cover hover:scale-105 transition-transform" />
                            <img src={amphitryon_plat_detail} alt="Détail" className="w-1/2 rounded-sm border-4 border-[#0f172a] shadow-xl object-cover hover:scale-105 transition-transform mt-8" />
                        </div>
                        <div className="md:w-1/2 space-y-6">
                            <h3 className="text-3xl font-bold text-blue-500">{t('project.amphitryon.card2Title')}</h3>
                            <ul className="space-y-3 font-sans text-lg text-[#d6d3d1]">
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span>{t('project.amphitryon.card2Bullet1')}</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span>{t('project.amphitryon.card2Bullet2')}</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span>{t('project.amphitryon.card2Bullet3')}</li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col md:flex-row items-center gap-12 bg-[#292524] p-8 md:p-12 border border-[#44403c] shadow-2xl">
                        <div className="md:w-1/2 flex gap-4">
                            <img src={amphitryon_services} alt="Gestion services" className="w-1/2 rounded-sm border-4 border-[#0f172a] shadow-xl object-cover hover:scale-105 transition-transform" />
                            <img src={amphitryon_plats_service} alt="Plats par service" className="w-1/2 rounded-sm border-4 border-[#0f172a] shadow-xl object-cover hover:scale-105 transition-transform mt-8" />
                        </div>
                        <div className="md:w-1/2 space-y-6">
                            <h3 className="text-3xl font-bold text-blue-500">{t('project.amphitryon.card3Title')}</h3>
                            <ul className="space-y-3 font-sans text-lg text-[#d6d3d1]">
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span>{t('project.amphitryon.card3Bullet1')}</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span>{t('project.amphitryon.card3Bullet2')}</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-full"></span>{t('project.amphitryon.card3Bullet3')}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="py-16 border-t border-[#44403c]">
                    <h2 className="text-center text-blue-700 font-bold uppercase tracking-[0.3em] mb-12">{t('project.amphitryon.techTitle')}</h2>
                    <div className="flex flex-wrap justify-center gap-6 font-sans">
                        {['Java', 'Android Studio', 'MySQL', 'PHP (Backend)', 'API REST', 'XML / JSON'].map(tech => (
                            <div key={tech} className="px-6 py-3 border border-[#44403c] rounded-full text-[#d6d3d1] bg-[#292524] hover:bg-blue-900/30 hover:border-blue-700 transition-colors">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AmphitryonPage;