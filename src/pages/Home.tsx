import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiMail, FiCode } from 'react-icons/fi';
import { FaReact, FaAngular, FaLaravel } from 'react-icons/fa';
import { SiNestjs } from 'react-icons/si';
import { useTranslate } from '../hooks/useTranslate.ts';
import photoProfil from '/images/profile/photo-profil.jpg';
import '../styles/home.css';

const Home: React.FC = () => {
    const { t } = useTranslate();

    return (
        <section className="home-hero">
            <div className="home-glow-blue"></div>
            <div className="home-glow-indigo"></div>

            <div className="home-container">
                <article>
                    <header>
                        <span className="home-badge">
                            <span className="dot"></span>
                            {t('home.badge')}
                        </span>

                        <h1>
                            {t('home.welcome')}{' '}
                            <span>{t('home.portfolio')}</span>
                        </h1>
                        <p>
                            {t('home.paragraph1_1')}
                            <strong>{t('home.paragraph1_highlight')}</strong>
                            {t('home.paragraph1_2')}
                        </p>
                        <p>
                            {t('home.paragraph2_1')}
                            <strong>{t('home.paragraph2_highlight1')}</strong>
                            {t('home.paragraph2_2')}
                            <strong>{t('home.paragraph2_highlight2')}</strong>
                            {t('home.paragraph2_3')}
                        </p>
                    </header>

                    <nav>
                        <Link to="/projects">
                            {t('home.btnProjects')}
                            <FiArrowRight />
                        </Link>
                        <Link to="/contact">
                            <FiMail />
                            {t('home.btnContact')}
                        </Link>
                    </nav>

                    <footer>
                        <p>{t('home.techsTitle')}</p>
                        <ul>
                            <li>
                                <FaReact className="home-icon-react" />
                                <span>React.js</span>
                            </li>
                            <li>
                                <FaAngular className="home-icon-angular" />
                                <span>Angular</span>
                            </li>
                            <li>
                                <FaLaravel className="home-icon-laravel" />
                                <span>Laravel</span>
                            </li>
                            <li>
                                <SiNestjs className="home-icon-nestjs" />
                                <span>Nest.js</span>
                            </li>
                        </ul>
                    </footer>
                </article>

                <figure>
                    <div className="home-image-glow"></div>
                    <div className="home-image-frame">
                        <div className="home-image-inner">
                            <img
                                src={photoProfil}
                                alt="Photo de profil de Corentin"
                            />
                            <div className="home-image-overlay"></div>
                        </div>
                    </div>

                    <figcaption className="animate-bounce-slow">
                        <span>
                            <FiCode />
                        </span>
                        <div>
                            <p>{t('home.floatingRole')}</p>
                            <p>{t('home.floatingTitle')}</p>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
};

export default Home;