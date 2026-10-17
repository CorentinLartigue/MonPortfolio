import React from 'react';
import {FiCpu, FiMail, FiLinkedin, FiGithub} from 'react-icons/fi';
import {useTranslate} from '../../hooks/useTranslate';
import '../../styles/errors.css';

const Error503: React.FC = () => {
    const {t} = useTranslate();

    return (
        <main className="page-container error503-container">
            <div className="error503-glow-1"></div>
            <div className="error503-glow-2"></div>

            <article className="content-card error503-card">

                <div className="error503-icon-wrapper">
                    <FiCpu className="animate-spin-slow"/>
                    <div className="error503-icon-pulse"></div>
                </div>

                <div>
                    <h1>
                        {t('error503.title')}
                    </h1>
                    <p>
                        {t('error503.description')}
                    </p>
                </div>

                <div className="error503-progress-container" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
                    <div className="error503-progress-header">
                        <span>{t('error503.status')}</span>
                        <span>{t('error503.statusLabel')}</span>
                    </div>
                    <div className="error503-progress-track">
                        <div className="error503-progress-bar"></div>
                    </div>
                </div>

                <section>
                    <p>
                        {t('error503.contactTitle')}
                    </p>
                    <nav aria-label="Réseaux de contact">
                        <a
                            href="https://www.linkedin.com/in/corentin-lartigue"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="LinkedIn"
                        >
                            <FiLinkedin />
                        </a>
                        <a
                            href="https://github.com/CorentinLartigue"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="GitHub"
                        >
                            <FiGithub />
                        </a>
                        <a
                            href="mailto:corentin.lartigue.cl@gmail.com"
                            title="Email"
                        >
                            <FiMail />
                        </a>
                    </nav>
                </section>

            </article>
        </main>
    );
};

export default Error503;