import React from 'react';
import {Link} from 'react-router-dom';
import {FiCompass, FiHome, FiArrowRight} from 'react-icons/fi';
import {useTranslate} from '../../hooks/useTranslate';
import '../../styles/errors.css';

const Error404: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container error404-container">
            <div className="content-card error404-card">

                <div className="error404-icon-wrapper">
                    <FiCompass className="error404-icon animate-spin-slow"/>
                    <div className="error404-icon-pulse"></div>
                </div>

                <div className="error404-code-container">
                    <h1 className="error404-code">404</h1>
                    <div className="error404-code-shadow">404</div>
                </div>

                <div className="error404-text-wrapper">
                    <h2 className="error404-title">
                        {t('error404.title')}
                    </h2>
                    <p className="error404-desc">
                        {t('error404.description')}
                    </p>
                </div>

                <div className="error404-actions">
                    <Link to="/" className="error404-btn-primary">
                        <FiHome className="error404-btn-icon"/>
                        <span>{t('error404.btnHome')}</span>
                    </Link>
                    <Link to="/projects" className="error404-btn-secondary">
                        <span>{t('error404.btnProjects')}</span>
                        <FiArrowRight className="error404-btn-icon"/>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Error404;