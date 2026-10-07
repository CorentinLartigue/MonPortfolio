import React from 'react';
import ReturnButton from '../../components/ReturnButton.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaCode, FaRocket, FaTools, FaBrain, FaTerminal } from 'react-icons/fa';
import '../../styles/projects/portfolio.css';

const Portfolio: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="portfolio-container">
            <div className="portfolio-return-wrapper">
                <ReturnButton />
            </div>

            {/* Terminal Header */}
            <div className="portfolio-terminal-wrapper">
                <div className="portfolio-terminal-bar">
                    <div className="portfolio-terminal-dot-red"></div>
                    <div className="portfolio-terminal-dot-yellow"></div>
                    <div className="portfolio-terminal-dot-green"></div>
                    <div className="portfolio-terminal-path">~/projects/portfolio</div>
                </div>
                <div className="portfolio-terminal-body">
                    <FaTerminal className="portfolio-terminal-bg-icon" />
                    <div className="portfolio-terminal-content">
                        <div className="portfolio-terminal-command">$ ./start_project.sh --name "Portfolio"</div>
                        <h1 className="portfolio-terminal-title">
                            {t('project.portfolio.title')}
                        </h1>
                        <p className="portfolio-terminal-desc">
                            {t('project.portfolio.desc')}
                        </p>
                    </div>
                </div>
            </div>

            <div className="portfolio-main">
                
                {/* Objective */}
                <div className="portfolio-objective-grid">
                    <div className="portfolio-objective-aside">
                        <FaRocket className="portfolio-objective-icon" />
                        <h2 className="portfolio-objective-title">{t('project.portfolio.objectiveTitle')}</h2>
                    </div>
                    <div className="portfolio-objective-body">
                        {t('project.portfolio.objectiveText')}
                    </div>
                </div>

                {/* Features */}
                <div className="portfolio-features-section">
                    <h2 className="portfolio-features-header">
                        <FaCode className="portfolio-features-icon" /> {t('project.portfolio.featuresTitle')}
                    </h2>
                    <div className="portfolio-features-grid">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="portfolio-feature-card group">
                                <h3 className="portfolio-feature-title">
                                    <span className="portfolio-feature-arrow">&gt;</span>{t(`project.portfolio.feature${i}Title`)}
                                </h3>
                                <p className="portfolio-feature-desc">{t(`project.portfolio.feature${i}Text`)}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="portfolio-stack-box">
                    <h2 className="portfolio-stack-title">
                        <FaTools className="portfolio-features-icon" /> {t('project.portfolio.techTitle')}
                    </h2>
                    <div className="portfolio-stack-grid">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="portfolio-stack-item">
                                <div className="portfolio-stack-num">
                                    {i}
                                </div>
                                <h3 className="portfolio-stack-item-title">{t(`project.portfolio.tech${i}Title`)}</h3>
                                <p className="portfolio-stack-item-desc">{t(`project.portfolio.tech${i}Text`)}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Challenges & Learning */}
                <div className="portfolio-insights-grid">
                    <div className="portfolio-challenges-box">
                        <h2 className="portfolio-challenges-title">{t('project.portfolio.challengesTitle')}</h2>
                        <div className="portfolio-challenges-list">
                            {[1, 2, 3].map(i => (
                                <div key={i}>
                                    <strong className="portfolio-challenge-label">{t(`project.portfolio.challenge${i}Title`)}</strong>
                                    <span className="portfolio-challenge-text">{t(`project.portfolio.challenge${i}Text`)}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="portfolio-learning-card">
                        <FaBrain className="portfolio-learning-icon" />
                        <h2 className="portfolio-learning-title">{t('project.portfolio.learnedTitle')}</h2>
                        <p className="portfolio-learning-desc">
                            {t('project.portfolio.learnedText')}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Portfolio;