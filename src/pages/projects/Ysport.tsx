import React from 'react';
import ysport_carte from '/images/projects/ysport-carte.png';
import ysport_filtres from '/images/projects/ysport-filtres.png';
import ysport_petit_cluster from '/images/projects/ysport-petit-cluster.png';
import ysport_grand_cluster from '/images/projects/ysport-grand-cluster.png';
import ysport_complexe from '/images/projects/ysport-complexe.png';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaMapMarkedAlt, FaFilter, FaLayerGroup, FaPlusCircle, FaCode } from 'react-icons/fa';
import '../../styles/projects.css';

const Ysport: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="min-h-screen bg-slate-50 text-slate-700 font-sans selection:bg-cyan-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <ReturnButton />
            </div>

            {/* Header Map Themed */}
            <div className="bg-cyan-900 text-white pt-32 pb-24 px-6 relative overflow-hidden rounded-b-[3rem] shadow-xl">
                <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'#ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
                <div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-cyan-800 rounded-full text-cyan-200 font-bold uppercase tracking-widest text-sm mb-4">
                            <FaMapMarkedAlt /> Application Cartographique
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
                            {t('project.ysport.title')}
                        </h1>
                        <p className="text-xl text-cyan-100 font-medium max-w-xl leading-relaxed">
                            {t('project.ysport.desc')}
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-20 space-y-32">
                
                {/* Intro & Tech */}
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 bg-white p-10 rounded-[2rem] shadow-lg shadow-slate-200/50 border border-slate-100">
                        <p className="text-xl text-slate-600 leading-relaxed font-medium">
                            {t('project.ysport.introText')}
                        </p>
                    </div>
                    <div className="md:col-span-1 bg-cyan-50 p-8 rounded-[2rem] border border-cyan-100 shadow-lg shadow-cyan-100/50">
                        <h2 className="text-xl font-bold text-cyan-900 mb-6 flex items-center gap-3">
                            <FaCode className="text-cyan-600" /> {t('project.ysport.techTitle')}
                        </h2>
                        <ul className="space-y-3">
                            {['React.js', 'Vite', t('project.ysport.techLeaflet'), t('project.ysport.techJava'), 'API REST', 'CSS / Bootstrap CSS'].map(tech => (
                                <li key={tech} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Map Feature */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <img src={ysport_carte} alt="Carte interactive" className="w-full rounded-3xl shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500" />
                    </div>
                    <div className="space-y-6 order-1 md:order-2">
                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6">
                            <FaMapMarkedAlt />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900">{t('project.ysport.mapTitle')}</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            {t('project.ysport.mapText')}
                        </p>
                    </div>
                </div>

                {/* Filter Feature */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center text-3xl mb-6">
                            <FaFilter />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900">{t('project.ysport.filterTitle')}</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            {t('project.ysport.filterText')}
                        </p>
                        <ul className="space-y-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                            {[1, 2, 3].map(i => (
                                <li key={i} className="flex items-start gap-4 text-slate-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 text-sm">{i}</div>
                                    {t(`project.ysport.filterBullet${i}`)}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <img src={ysport_filtres} alt="Filtres" className="w-full rounded-3xl shadow-2xl border-4 border-white -rotate-2 hover:rotate-0 transition-transform duration-500" />
                    </div>
                </div>

                {/* Clusters Feature */}
                <div className="bg-slate-900 text-white p-10 md:p-16 rounded-[3rem] shadow-2xl">
                    <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
                        <div className="w-16 h-16 bg-cyan-800 text-cyan-400 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
                            <FaLayerGroup />
                        </div>
                        <h2 className="text-3xl font-black">{t('project.ysport.clusterTitle')}</h2>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            {t('project.ysport.clusterText')}
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-800 p-4 rounded-3xl border border-slate-700 hover:border-cyan-500 transition-colors">
                            <img src={ysport_petit_cluster} alt="Petit Cluster" className="w-full rounded-2xl mb-4" />
                            <div className="text-center font-bold text-cyan-400 uppercase tracking-widest text-sm">Vue Rapprochée</div>
                        </div>
                        <div className="bg-slate-800 p-4 rounded-3xl border border-slate-700 hover:border-cyan-500 transition-colors">
                            <img src={ysport_grand_cluster} alt="Grand Cluster" className="w-full rounded-2xl mb-4" />
                            <div className="text-center font-bold text-cyan-400 uppercase tracking-widest text-sm">Vue Globale</div>
                        </div>
                    </div>
                </div>

                {/* Extras Feature */}
                <div className="grid md:grid-cols-2 gap-12 items-center pb-20">
                    <div>
                        <img src={ysport_complexe} alt="Extras" className="w-full rounded-3xl shadow-2xl border-4 border-white rotate-1 hover:rotate-0 transition-transform duration-500" />
                    </div>
                    <div className="space-y-6">
                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6">
                            <FaPlusCircle />
                        </div>
                        <h2 className="text-3xl font-black text-slate-900">{t('project.ysport.extraTitle')}</h2>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            {t('project.ysport.extraText')}
                        </p>
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm border-l-4 border-l-blue-500 text-slate-700 font-medium">
                            {t('project.ysport.extraBullet1')}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Ysport;