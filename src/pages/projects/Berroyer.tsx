import React from 'react';
import step1 from '/images/projects/step-1.png';
import step2 from '/images/projects/step-2.png';
import step3 from '/images/projects/step-3.png';
import step4 from '/images/projects/step-4.png';
import step5 from '/images/projects/step-5.png';
import step6 from '/images/projects/step-6.png';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaCogs, FaSitemap, FaBook } from 'react-icons/fa';
import '../../styles/projects.css';

const Berroyer: React.FC = () => {
    const {t} = useTranslate();

    interface StepBlockProps {
        title: string;
        desc: string;
        img: string;
        bullets?: string[];
        num: number;
    }

    const StepBlock = ({ title, desc, img, bullets = [], num }: StepBlockProps) => (
        <div className="relative pl-12 md:pl-0">
            {/* Timeline dot */}
            <div className="hidden md:flex absolute left-1/2 -ml-5 top-8 w-10 h-10 rounded-full bg-blue-600 border-4 border-slate-900 items-center justify-center text-white font-bold z-10">
                {num}
            </div>
            <div className={`md:flex items-center justify-between w-full ${num % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-[45%] bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl hover:border-blue-500 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="md:hidden flex w-8 h-8 rounded-full bg-blue-600 text-white font-bold items-center justify-center">{num}</span>
                        <h2 className="text-2xl font-bold text-white">{title}</h2>
                    </div>
                    <img src={img} alt={`Step ${num}`} className="w-full h-auto rounded-xl mb-6 shadow-md border border-slate-700" />
                    <p className="text-slate-300 mb-4 leading-relaxed">{desc}</p>
                    {bullets.length > 0 && (
                        <ul className="space-y-2">
                            {bullets.map((b: string, i: number) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></div>
                                    {b}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
                <ReturnButton />
            </div>

            {/* Header */}
            <div className="bg-slate-950 py-24 border-b border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMzMzQxNTUiLz48L3N2Zz4=')] opacity-20"></div>
                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-blue-900/30 rounded-2xl mb-8 border border-blue-500/30">
                        <FaCogs className="text-4xl text-blue-400" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                        {t('project.berroyer.title')}
                    </h1>
                    <p className="text-xl text-blue-200/70 max-w-2xl mx-auto">
                        {t('project.berroyer.desc')}
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
                
                {/* Intro & Tech */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700">
                        <h2 className="text-2xl font-bold text-white mb-4 border-b border-slate-700 pb-4">Introduction</h2>
                        <p className="text-slate-300 leading-relaxed text-lg">
                            {t('project.berroyer.intro')}
                        </p>
                    </div>
                    
                    <div className="bg-blue-900/20 p-8 rounded-3xl border border-blue-500/30">
                        <h2 className="text-2xl font-bold text-blue-300 mb-6 flex items-center gap-3">
                            <FaSitemap /> {t('project.berroyer.techTitle')}
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {['PHP', 'JavaScript', 'Jquery', 'Ajax', 'Twig', 'HTML/CSS', 'Font Awesome', 'Bootstrap', t('project.berroyer.techEasyframe')].map(tech => (
                                <span key={tech} className="px-4 py-2 bg-slate-900 rounded-lg text-sm font-medium text-slate-300 border border-slate-700">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Steps Timeline */}
                <div className="relative space-y-16 py-12">
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-800 -translate-x-1/2"></div>
                    
                    <StepBlock num={1} title={t('project.berroyer.step1Title')} desc={t('project.berroyer.step1Desc')} img={step1} bullets={[t('project.berroyer.step1Bullet1'), t('project.berroyer.step1Bullet2'), t('project.berroyer.step1Bullet3'), t('project.berroyer.step1Bullet4')]} />
                    <StepBlock num={2} title={t('project.berroyer.step2Title')} desc={t('project.berroyer.step2Desc')} img={step2} bullets={[t('project.berroyer.step2Bullet1'), t('project.berroyer.step2Bullet2'), t('project.berroyer.step2Bullet3'), t('project.berroyer.step2Bullet4')]} />
                    <StepBlock num={3} title={t('project.berroyer.step3Title')} desc={t('project.berroyer.step3Desc')} img={step3} />
                    <StepBlock num={4} title={t('project.berroyer.step4Title')} desc={t('project.berroyer.step4Desc')} img={step4} bullets={[t('project.berroyer.step4Bullet1'), t('project.berroyer.step4Bullet2'), t('project.berroyer.step4Bullet3')]} />
                    <StepBlock num={5} title={t('project.berroyer.step5Title')} desc={t('project.berroyer.step5Desc')} img={step5} bullets={[t('project.berroyer.step5Bullet1'), t('project.berroyer.step5Bullet2'), t('project.berroyer.step5Bullet3'), t('project.berroyer.step5Bullet4')]} />
                    <StepBlock num={6} title={t('project.berroyer.step6Title')} desc={t('project.berroyer.step6Desc')} img={step6} bullets={[t('project.berroyer.step6Bullet1'), t('project.berroyer.step6Bullet2'), t('project.berroyer.step6Bullet3')]} />
                </div>

                {/* Additional Info */}
                <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-slate-800">
                    <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                        <h3 className="text-xl font-bold text-white mb-4 text-blue-400">{t('project.berroyer.hierarchyTitle')}</h3>
                        <p className="text-sm text-slate-400 mb-4">{t('project.berroyer.hierarchyDesc')}</p>
                        <ol className="list-decimal list-inside space-y-2 text-slate-300 text-sm">
                            <li>{t('project.berroyer.hierarchyItem1')}</li>
                            <li>{t('project.berroyer.hierarchyItem2')}</li>
                            <li>{t('project.berroyer.hierarchyItem3')}</li>
                            <li>{t('project.berroyer.hierarchyItem4')}</li>
                            <li>{t('project.berroyer.hierarchyItem5')}</li>
                        </ol>
                    </div>
                    <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                        <h3 className="text-xl font-bold text-white mb-4 text-blue-400">{t('project.berroyer.agileTitle')}</h3>
                        <p className="text-slate-300 leading-relaxed">{t('project.berroyer.agileDesc')}</p>
                    </div>
                    <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                        <div className="flex items-center gap-3 mb-4">
                            <FaBook className="text-blue-400 text-xl" />
                            <h3 className="text-xl font-bold text-white text-blue-400">{t('project.berroyer.docTitle')}</h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed">{t('project.berroyer.docDesc')}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Berroyer;