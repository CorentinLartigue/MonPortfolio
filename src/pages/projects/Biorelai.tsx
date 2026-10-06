import React from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaLeaf, FaSeedling, FaTractor, FaAppleAlt } from 'react-icons/fa';
import '../../styles/projects.css';

const Biorelai: React.FC = () => {
    const {t} = useTranslate();

    const roles = [
        { icon: <FaSeedling />, title: t('project.biorelai.role1'), b1: t('project.biorelai.role1Bullet1'), b2: t('project.biorelai.role1Bullet2') },
        { icon: <FaTractor />, title: t('project.biorelai.role2'), b1: t('project.biorelai.role2Bullet1'), b2: t('project.biorelai.role2Bullet2') },
        { icon: <FaAppleAlt />, title: t('project.biorelai.role3'), b1: t('project.biorelai.role3Bullet1'), b2: t('project.biorelai.role3Bullet2') },
        { icon: <FaLeaf />, title: t('project.biorelai.role4'), b1: t('project.biorelai.role4Bullet1'), b2: t('project.biorelai.role4Bullet2') },
    ];

    return (
        <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-blue-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <ReturnButton />
            </div>

            {/* Header */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-green-950 text-white py-32 px-6 rounded-b-[4rem] shadow-2xl">
                <div className="absolute -top-24 -right-24 text-white/5">
                    <FaLeaf className="text-[20rem]" />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-flex items-center justify-center p-4 bg-white/10 backdrop-blur-md rounded-full mb-8">
                        <FaLeaf className="text-3xl text-blue-400" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                        {t('project.biorelai.title')}
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
                        {t('project.biorelai.desc')}
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
                
                {/* Intro */}
                <div className="bg-white p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                    <h2 className="text-3xl font-bold text-green-900 mb-6">{t('project.biorelai.introTitle')}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                        {t('project.biorelai.introText')}
                    </p>
                </div>

                {/* Features / Roles Grid */}
                <div>
                    <h2 className="text-3xl font-bold text-center text-green-900 mb-12">{t('project.biorelai.featuresTitle')}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {roles.map((role, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 group">
                                <div className="text-4xl text-blue-600 mb-6 group-hover:scale-110 transition-transform origin-left">{role.icon}</div>
                                <h3 className="text-xl font-bold text-slate-800 mb-4">{role.title}</h3>
                                <ul className="space-y-3 text-slate-600">
                                    <li className="flex items-start gap-2">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                                        {role.b1}
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                                        {role.b2}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech & Method */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-blue-50 p-10 rounded-3xl border border-blue-100">
                        <h2 className="text-2xl font-bold text-green-900 mb-6">{t('project.biorelai.techTitle')}</h2>
                        <div className="flex flex-wrap gap-3">
                            {['PHP Objet', 'MySQL', 'Modèle MVC', 'HTML / CSS', 'API REST'].map(tech => (
                                <span key={tech} className="px-5 py-2.5 bg-white text-green-800 font-bold rounded-full shadow-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="bg-green-900 p-10 rounded-3xl text-white shadow-xl shadow-green-900/20">
                        <h2 className="text-2xl font-bold text-blue-400 mb-6">{t('project.biorelai.methodTitle')}</h2>
                        <p className="text-green-50 leading-relaxed text-lg">
                            {t('project.biorelai.methodText')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Biorelai;