import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslate} from '../hooks/useTranslate';
import '../styles/privacy.css';

const Privacy: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container">
            <div className="content-card privacy-card-content">
                <h1 className="page-title">{t('privacy.title')}</h1>

                <p className="privacy-subtitle">
                    {t('privacy.subtitle')}
                </p>

                <section>
                    <h2 className="privacy-section-title">{t('privacy.sec1Title')}</h2>
                    <p className="privacy-section-text">
                        {t('privacy.sec1Text')}
                    </p>
                </section>

                <section>
                    <h2 className="privacy-section-title">{t('privacy.sec2Title')}</h2>
                    <p className="privacy-section-text">
                        {t('privacy.sec2Text')}
                    </p>
                </section>

                <section>
                    <h2 className="privacy-section-title">{t('privacy.sec3Title')}</h2>
                    <p className="privacy-section-text">
                        {t('privacy.sec3Text')}
                    </p>
                </section>

                <section>
                    <h2 className="privacy-section-title">{t('privacy.sec4Title')}</h2>
                    <p className="privacy-section-text">
                        {t('privacy.sec4Text')}
                    </p>
                </section>

                <section>
                    <h2 className="privacy-section-title">{t('privacy.sec5Title')}</h2>
                    <p className="privacy-section-text">
                        {t('privacy.sec5Text1')}
                        <Link to="/contact" className="privacy-link">{t('privacy.sec5LinkText')}</Link>
                        {t('privacy.sec5Text2')}
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Privacy;