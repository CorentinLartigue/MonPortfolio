import React from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaGithub, FaDocker, FaDatabase, FaCamera } from 'react-icons/fa';
import { SiNestjs } from 'react-icons/si';
import '../../styles/projects/cheerzup.css';

const Cheerzup: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="cheerzup-page">
            <div className="cheerzup-nav-wrapper">
                <ReturnButton />
            </div>

            <div className="cheerzup-main-content">
                {/* Minimal Header */}
                <div className="cheerzup-header">
                    <div className="cheerzup-badge">Backend Architecture</div>
                    <h1 className="cheerzup-title">
                        {t('project.cheerzup.title')}
                    </h1>
                    <p className="cheerzup-subtitle">
                        {t('project.cheerzup.desc')}
                    </p>
                </div>

                {/* Tech Terminal block */}
                <div className="cheerzup-terminal">
                    <div className="cheerzup-terminal-bar">
                        <div className="cheerzup-terminal-title">{t('project.cheerzup.techTitle')}</div>
                        <div className="cheerzup-terminal-icons">
                            <SiNestjs className="text-red-500" />
                            <FaDatabase className="text-blue-400" />
                            <FaDocker className="text-blue-600" />
                        </div>
                    </div>
                    <div className="cheerzup-terminal-body">
                        <div className="cheerzup-terminal-item">
                            <div className="cheerzup-terminal-cmd">~ $ architecture</div>
                            <div className="cheerzup-terminal-out">{t('project.cheerzup.techHexa')}</div>
                        </div>
                        <div className="cheerzup-terminal-item">
                            <div className="cheerzup-terminal-cmd">~ $ framework</div>
                            <div className="cheerzup-terminal-out">{t('project.cheerzup.techFramework')}</div>
                        </div>
                        <div className="cheerzup-terminal-item">
                            <div className="cheerzup-terminal-cmd">~ $ database</div>
                            <div className="cheerzup-terminal-out">{t('project.cheerzup.techDb')}</div>
                        </div>
                        <div className="cheerzup-terminal-item">
                            <div className="cheerzup-terminal-cmd">~ $ deployment</div>
                            <div className="cheerzup-terminal-out">{t('project.cheerzup.techDocker')}</div>
                        </div>
                    </div>
                </div>

                {/* Features & Description */}
                <div className="cheerzup-split-grid">
                    <div className="cheerzup-col">
                        <h2 className="cheerzup-section-title">{t('project.cheerzup.introTitle')}</h2>
                        <p className="cheerzup-text">
                            {t('project.cheerzup.introText')}
                        </p>
                        
                        <a href="https://github.com/Cheerz-up/cheerzup_backend" target="_blank" rel="noopener noreferrer" 
                           className="cheerzup-btn-github">
                            <FaGithub className="text-xl" /> Code Source
                        </a>
                    </div>

                    <div className="cheerzup-col">
                        <h2 className="cheerzup-section-title">{t('project.cheerzup.featTitle')}</h2>
                        <ul className="cheerzup-feat-list">
                            {[1, 2, 3, 4].map(num => (
                                <li key={num} className="cheerzup-feat-item">
                                    <div className="cheerzup-feat-bullet"></div>
                                    <span className="cheerzup-feat-text">{t(`project.cheerzup.feat${num}`)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Placeholder Image */}
                <div className="cheerzup-placeholder group">
                    <FaCamera className="cheerzup-placeholder-icon" />
                    <span className="cheerzup-placeholder-label">Diagramme ou Capture Cheerzup</span>
                </div>
            </div>
        </div>
    );
};

export default Cheerzup;
