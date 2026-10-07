import React from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaLeaf, FaSeedling, FaTractor, FaAppleAlt } from 'react-icons/fa';
import '../../styles/projects/biorelai.css';

const Biorelai: React.FC = () => {
    const {t} = useTranslate();

    const roles = [
        { icon: <FaSeedling />, title: t('project.biorelai.role1'), b1: t('project.biorelai.role1Bullet1'), b2: t('project.biorelai.role1Bullet2') },
        { icon: <FaTractor />, title: t('project.biorelai.role2'), b1: t('project.biorelai.role2Bullet1'), b2: t('project.biorelai.role2Bullet2') },
        { icon: <FaAppleAlt />, title: t('project.biorelai.role3'), b1: t('project.biorelai.role3Bullet1'), b2: t('project.biorelai.role3Bullet2') },
        { icon: <FaLeaf />, title: t('project.biorelai.role4'), b1: t('project.biorelai.role4Bullet1'), b2: t('project.biorelai.role4Bullet2') },
    ];

    return (
        <div className="biorelai-page">
            <div className="biorelai-nav-wrapper">
                <ReturnButton />
            </div>

            {/* Header */}
            <div className="biorelai-header">
                <div className="biorelai-header-bg-icon">
                    <FaLeaf className="text-[20rem]" />
                </div>
                <div className="biorelai-header-content">
                    <div className="biorelai-badge-icon">
                        <FaLeaf className="text-3xl text-blue-400" />
                    </div>
                    <h1 className="biorelai-title">
                        {t('project.biorelai.title')}
                    </h1>
                    <p className="biorelai-subtitle">
                        {t('project.biorelai.desc')}
                    </p>
                </div>
            </div>

            <div className="biorelai-main-content">
                
                {/* Intro */}
                <div className="biorelai-intro-card">
                    <h2 className="biorelai-intro-title">{t('project.biorelai.introTitle')}</h2>
                    <p className="biorelai-intro-text">
                        {t('project.biorelai.introText')}
                    </p>
                </div>

                {/* Features / Roles Grid */}
                <div>
                    <h2 className="biorelai-section-title">{t('project.biorelai.featuresTitle')}</h2>
                    <div className="biorelai-roles-grid">
                        {roles.map((role, idx) => (
                            <div key={idx} className="biorelai-role-card group">
                                <div className="biorelai-role-icon">{role.icon}</div>
                                <h3 className="biorelai-role-title">{role.title}</h3>
                                <ul className="biorelai-role-list">
                                    <li className="biorelai-role-item">
                                        <div className="biorelai-role-bullet"></div>
                                        {role.b1}
                                    </li>
                                    <li className="biorelai-role-item">
                                        <div className="biorelai-role-bullet"></div>
                                        {role.b2}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech & Method */}
                <div className="biorelai-split-grid">
                    <div className="biorelai-tech-card">
                        <h2 className="biorelai-tech-title">{t('project.biorelai.techTitle')}</h2>
                        <div className="biorelai-tech-tags">
                            {['PHP Objet', 'MySQL', 'Modèle MVC', 'HTML / CSS', 'API REST'].map(tech => (
                                <span key={tech} className="biorelai-tech-tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="biorelai-method-card">
                        <h2 className="biorelai-method-title">{t('project.biorelai.methodTitle')}</h2>
                        <p className="biorelai-method-text">
                            {t('project.biorelai.methodText')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Biorelai;