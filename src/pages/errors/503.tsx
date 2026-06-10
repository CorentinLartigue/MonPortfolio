import React from 'react';
import {FiCpu, FiMail, FiLinkedin, FiGithub} from 'react-icons/fi';
import {useTranslate} from '../../hooks/useTranslate';
import '../../styles/errors.css';

const Error503: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container error503-container">
            <div className="error503-glow-1"></div>
            <div className="error503-glow-2"></div>

            <div className="content-card error503-card">

                <div className="error503-icon-wrapper">
                    <FiCpu className="error503-icon animate-spin-slow"/>
                    <div className="error503-icon-pulse"></div>
                </div>

                <div className="error503-text-wrapper">
                    <h1 className="error503-title">
                        {t('error503.title')}
                    </h1>
                    <p className="error503-desc">
                        {t('error503.description')}
                    </p>
                </div>

                <div className="error503-progress-container">
                    <div className="error503-progress-header">
                        <span>{t('error503.status')}</span>
                        <span className="error503-progress-status-label">{t('error503.statusLabel')}</span>
                    </div>
                    <div className="error503-progress-track">
                        <div
                            className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full error503-progress-bar"></div>
                    </div>
                </div>

                <div className="error503-contact-section">
                    <p className="error503-contact-title">
                        {t('error503.contactTitle')}
                    </p>
                    <div className="error503-social-icons">
                        <a
                            href="https://www.linkedin.com/in/corentin-lartigue"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="error503-social-btn"
                            title="LinkedIn"
                        >
                            <FiLinkedin className="error503-social-icon"/>
                        </a>
                        <a
                            href="https://github.com/CorentinLartigue"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="error503-social-btn"
                            title="GitHub"
                        >
                            <FiGithub className="error503-social-icon"/>
                        </a>
                        <a
                            href="mailto:corentin.lartigue.cl@gmail.com"
                            className="error503-social-btn"
                            title="Email"
                        >
                            <FiMail className="error503-social-icon"/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Error503;