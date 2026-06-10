import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslate} from '../hooks/useTranslate';
import '../styles/terms.css';

const Terms: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container">
            <div className="content-card terms-card-content">
                <h1 className="page-title">{t('terms.title')}</h1>

                <p className="terms-subtitle">
                    {t('terms.subtitle')}
                </p>

                <section>
                    <h2 className="terms-section-title">{t('terms.sec1Title')}</h2>
                    <p className="terms-section-text">
                        {t('terms.sec1Text')}
                    </p>
                </section>

                <section>
                    <h2 className="terms-section-title">{t('terms.sec2Title')}</h2>
                    <p className="terms-section-text">
                        {t('terms.sec2Text')}
                    </p>
                </section>

                <section>
                    <h2 className="terms-section-title">{t('terms.sec3Title')}</h2>
                    <p className="terms-section-text">
                        {t('terms.sec3Text')}
                    </p>
                </section>

                <section>
                    <h2 className="terms-section-title">{t('terms.sec4Title')}</h2>
                    <p className="privacy-section-text">
                        {t('terms.sec4Text')}
                    </p>
                </section>

                <section>
                    <h2 className="terms-section-title">{t('terms.sec5Title')}</h2>
                    <p className="terms-section-text">
                        {t('terms.sec5Text1')}
                        <Link to="/contact" className="terms-link">{t('terms.sec5LinkText')}</Link>
                        {t('terms.sec5Text2')}
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Terms;