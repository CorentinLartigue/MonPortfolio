import React from 'react';
import ProjectHero from '../../components/ProjectHero.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaCode, FaRocket, FaTools, FaBrain, FaTerminal } from 'react-icons/fa';
import '../../styles/projects/portfolio.css';

const Portfolio: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="portfolio-container">
            <ProjectHero
                badgeIcon={<FaTerminal />}
                badgeLabel={t('project.portfolio.badge')}
                title={t('project.portfolio.title')}
                subtitle={t('project.portfolio.subtitle')}
                description={t('project.portfolio.desc')}
                techTags={['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'i18n', 'GitHub Pages']}
                theme="blue"
            />

            <main className="portfolio-main">
                
                <article className="portfolio-objective-grid">
                    <aside>
                        <FaRocket />
                        <h2>{t('project.portfolio.objectiveTitle')}</h2>
                    </aside>
                    <div>
                        {t('project.portfolio.objectiveText')}
                    </div>
                </article>

                <section className="portfolio-features-section">
                    <h2>
                        <FaCode /> {t('project.portfolio.featuresTitle')}
                    </h2>
                    <div className="portfolio-features-grid">
                        {[1, 2, 3, 4, 5].map(i => (
                            <article key={i} className="group">
                                <h3>
                                    <span>&gt;</span>{t(`project.portfolio.feature${i}Title`)}
                                </h3>
                                <p>{t(`project.portfolio.feature${i}Text`)}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="portfolio-stack-box">
                    <h2>
                        <FaTools /> {t('project.portfolio.techTitle')}
                    </h2>
                    <div className="portfolio-stack-grid">
                        {[1, 2, 3, 4, 5].map(i => (
                            <article key={i}>
                                <span>{i}</span>
                                <h3>{t(`project.portfolio.tech${i}Title`)}</h3>
                                <p>{t(`project.portfolio.tech${i}Text`)}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <div className="portfolio-insights-grid">
                    <section className="portfolio-challenges-box">
                        <h2>{t('project.portfolio.challengesTitle')}</h2>
                        <ul>
                            {[1, 2, 3].map(i => (
                                <li key={i}>
                                    <strong>{t(`project.portfolio.challenge${i}Title`)}</strong>
                                    <span>{t(`project.portfolio.challenge${i}Text`)}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <article className="portfolio-learning-card">
                        <FaBrain />
                        <h2>{t('project.portfolio.learnedTitle')}</h2>
                        <p>
                            {t('project.portfolio.learnedText')}
                        </p>
                    </article>
                </div>

            </main>
        </div>
    );
};

export default Portfolio;