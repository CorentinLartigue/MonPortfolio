import React from 'react';
import {Link} from 'react-router-dom';
import {FiCompass, FiHome, FiArrowRight} from 'react-icons/fi';
import {useTranslate} from '../../hooks/useTranslate';
import '../../styles/errors.css';

const Error404: React.FC = () => {
    const {t} = useTranslate();

    return (
        <main className="page-container error404-container">
            <article className="content-card error404-card">

                <div className="error404-icon-wrapper">
                    <FiCompass className="animate-spin-slow"/>
                    <div className="error404-icon-pulse"></div>
                </div>

                <div className="error404-code-container">
                    <h1>404</h1>
                    <div aria-hidden="true">404</div>
                </div>

                <div>
                    <h2>
                        {t('error404.title')}
                    </h2>
                    <p>
                        {t('error404.description')}
                    </p>
                </div>

                <nav aria-label="Actions de retour">
                    <Link to="/">
                        <FiHome />
                        <span>{t('error404.btnHome')}</span>
                    </Link>
                    <Link to="/projects">
                        <span>{t('error404.btnProjects')}</span>
                        <FiArrowRight />
                    </Link>
                </nav>

            </article>
        </main>
    );
};

export default Error404;