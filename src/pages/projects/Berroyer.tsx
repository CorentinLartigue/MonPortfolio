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
import '../../styles/projects/berroyer.css';

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
        <div className="berroyer-step-wrapper">
            {/* Timeline dot */}
            <div className="berroyer-step-dot">
                {num}
            </div>
            <div className={`berroyer-step-row ${num % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="berroyer-step-card">
                    <div className="berroyer-step-header">
                        <span className="berroyer-step-badge-mobile">{num}</span>
                        <h2 className="berroyer-step-title">{title}</h2>
                    </div>
                    <img src={img} alt={`Step ${num}`} className="berroyer-step-img" />
                    <p className="berroyer-step-desc">{desc}</p>
                    {bullets.length > 0 && (
                        <ul className="berroyer-step-bullets">
                            {bullets.map((b: string, i: number) => (
                                <li key={i} className="berroyer-step-bullet-item">
                                    <div className="berroyer-step-bullet-dot"></div>
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
        <div className="berroyer-container">
            <div className="berroyer-return-wrapper">
                <ReturnButton />
            </div>

            {/* Header */}
            <div className="berroyer-header">
                <div className="berroyer-header-pattern"></div>
                <div className="berroyer-header-content">
                    <div className="berroyer-header-icon-box">
                        <FaCogs className="berroyer-header-icon" />
                    </div>
                    <h1 className="berroyer-header-title">
                        {t('project.berroyer.title')}
                    </h1>
                    <p className="berroyer-header-desc">
                        {t('project.berroyer.desc')}
                    </p>
                </div>
            </div>

            <div className="berroyer-main">
                
                {/* Intro & Tech */}
                <div className="berroyer-intro-grid">
                    <div className="berroyer-intro-card">
                        <h2 className="berroyer-intro-title">Introduction</h2>
                        <p className="berroyer-intro-text">
                            {t('project.berroyer.intro')}
                        </p>
                    </div>
                    
                    <div className="berroyer-tech-card">
                        <h2 className="berroyer-tech-title">
                            <FaSitemap /> {t('project.berroyer.techTitle')}
                        </h2>
                        <div className="berroyer-tech-list">
                            {['PHP', 'JavaScript', 'Jquery', 'Ajax', 'Twig', 'HTML/CSS', 'Font Awesome', 'Bootstrap', t('project.berroyer.techEasyframe')].map(tech => (
                                <span key={tech} className="berroyer-tech-pill">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Steps Timeline */}
                <div className="berroyer-timeline">
                    <div className="berroyer-timeline-line"></div>
                    
                    <StepBlock num={1} title={t('project.berroyer.step1Title')} desc={t('project.berroyer.step1Desc')} img={step1} bullets={[t('project.berroyer.step1Bullet1'), t('project.berroyer.step1Bullet2'), t('project.berroyer.step1Bullet3'), t('project.berroyer.step1Bullet4')]} />
                    <StepBlock num={2} title={t('project.berroyer.step2Title')} desc={t('project.berroyer.step2Desc')} img={step2} bullets={[t('project.berroyer.step2Bullet1'), t('project.berroyer.step2Bullet2'), t('project.berroyer.step2Bullet3'), t('project.berroyer.step2Bullet4')]} />
                    <StepBlock num={3} title={t('project.berroyer.step3Title')} desc={t('project.berroyer.step3Desc')} img={step3} />
                    <StepBlock num={4} title={t('project.berroyer.step4Title')} desc={t('project.berroyer.step4Desc')} img={step4} bullets={[t('project.berroyer.step4Bullet1'), t('project.berroyer.step4Bullet2'), t('project.berroyer.step4Bullet3')]} />
                    <StepBlock num={5} title={t('project.berroyer.step5Title')} desc={t('project.berroyer.step5Desc')} img={step5} bullets={[t('project.berroyer.step5Bullet1'), t('project.berroyer.step5Bullet2'), t('project.berroyer.step5Bullet3'), t('project.berroyer.step5Bullet4')]} />
                    <StepBlock num={6} title={t('project.berroyer.step6Title')} desc={t('project.berroyer.step6Desc')} img={step6} bullets={[t('project.berroyer.step6Bullet1'), t('project.berroyer.step6Bullet2'), t('project.berroyer.step6Bullet3')]} />
                </div>

                {/* Additional Info */}
                <div className="berroyer-info-grid">
                    <div className="berroyer-info-card">
                        <h3 className="berroyer-info-title">{t('project.berroyer.hierarchyTitle')}</h3>
                        <p className="berroyer-info-text">{t('project.berroyer.hierarchyDesc')}</p>
                        <ol className="berroyer-info-list">
                            <li>{t('project.berroyer.hierarchyItem1')}</li>
                            <li>{t('project.berroyer.hierarchyItem2')}</li>
                            <li>{t('project.berroyer.hierarchyItem3')}</li>
                            <li>{t('project.berroyer.hierarchyItem4')}</li>
                            <li>{t('project.berroyer.hierarchyItem5')}</li>
                        </ol>
                    </div>
                    <div className="berroyer-info-card">
                        <h3 className="berroyer-info-title">{t('project.berroyer.agileTitle')}</h3>
                        <p className="berroyer-info-lead">{t('project.berroyer.agileDesc')}</p>
                    </div>
                    <div className="berroyer-info-card">
                        <div className="flex items-center gap-3 mb-4">
                            <FaBook className="text-blue-400 text-xl" />
                            <h3 className="berroyer-info-title">{t('project.berroyer.docTitle')}</h3>
                        </div>
                        <p className="berroyer-info-lead">{t('project.berroyer.docDesc')}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Berroyer;