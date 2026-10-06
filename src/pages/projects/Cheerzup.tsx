import React from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaGithub, FaDocker, FaDatabase, FaCamera } from 'react-icons/fa';
import { SiNestjs } from 'react-icons/si';
import '../../styles/projects.css';

const Cheerzup: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="min-h-screen bg-black text-gray-300 font-mono">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <ReturnButton />
            </div>

            <div className="max-w-5xl mx-auto px-6 py-24 space-y-20">
                {/* Minimal Header */}
                <div className="border-l-4 border-fuchsia-500 pl-8 space-y-6 py-4">
                    <div className="text-fuchsia-500 font-bold tracking-widest uppercase text-sm">Backend Architecture</div>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                        {t('project.cheerzup.title')}
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                        {t('project.cheerzup.desc')}
                    </p>
                </div>

                {/* Tech Terminal block */}
                <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden shadow-2xl">
                    <div className="bg-gray-950 px-4 py-3 border-b border-gray-800 flex items-center justify-between">
                        <div className="text-gray-500 text-sm">{t('project.cheerzup.techTitle')}</div>
                        <div className="flex gap-2">
                            <SiNestjs className="text-red-500" />
                            <FaDatabase className="text-blue-400" />
                            <FaDocker className="text-blue-600" />
                        </div>
                    </div>
                    <div className="p-8 grid sm:grid-cols-2 gap-8 text-sm">
                        <div className="space-y-4">
                            <div className="text-fuchsia-400 font-bold">~ $ architecture</div>
                            <div className="text-gray-300 pl-4 border-l border-gray-700">{t('project.cheerzup.techHexa')}</div>
                        </div>
                        <div className="space-y-4">
                            <div className="text-fuchsia-400 font-bold">~ $ framework</div>
                            <div className="text-gray-300 pl-4 border-l border-gray-700">{t('project.cheerzup.techFramework')}</div>
                        </div>
                        <div className="space-y-4">
                            <div className="text-fuchsia-400 font-bold">~ $ database</div>
                            <div className="text-gray-300 pl-4 border-l border-gray-700">{t('project.cheerzup.techDb')}</div>
                        </div>
                        <div className="space-y-4">
                            <div className="text-fuchsia-400 font-bold">~ $ deployment</div>
                            <div className="text-gray-300 pl-4 border-l border-gray-700">{t('project.cheerzup.techDocker')}</div>
                        </div>
                    </div>
                </div>

                {/* Features & Description */}
                <div className="grid md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-white border-b border-gray-800 pb-4">{t('project.cheerzup.introTitle')}</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            {t('project.cheerzup.introText')}
                        </p>
                        
                        <a href="https://github.com/Cheerz-up/cheerzup_backend" target="_blank" rel="noopener noreferrer" 
                           className="inline-flex items-center gap-3 bg-white text-slate-900 px-6 py-3 rounded hover:bg-fuchsia-500 hover:text-white transition-colors font-bold mt-8">
                            <FaGithub className="text-xl" /> Code Source
                        </a>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-white border-b border-gray-800 pb-4">{t('project.cheerzup.featTitle')}</h2>
                        <ul className="space-y-6">
                            {[1, 2, 3, 4].map(num => (
                                <li key={num} className="flex items-start gap-4">
                                    <div className="mt-1 w-2 h-2 bg-fuchsia-500 rounded-full shrink-0"></div>
                                    <span className="text-gray-300">{t(`project.cheerzup.feat${num}`)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Placeholder Image */}
                <div className="w-full h-80 bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 flex flex-col items-center justify-center text-gray-700 group hover:border-fuchsia-500/50 transition-colors mt-12">
                    <FaCamera className="text-6xl mb-4 group-hover:text-fuchsia-500/30 transition-colors" />
                    <span className="font-bold tracking-widest uppercase">Diagramme ou Capture Cheerzup</span>
                </div>
            </div>
        </div>
    );
};

export default Cheerzup;
