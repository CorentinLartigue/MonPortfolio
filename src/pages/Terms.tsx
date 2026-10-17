import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslate} from '../hooks/useTranslate';
import '../styles/terms.css';

const Terms: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container">
            <main className="content-card terms-page">
                <h1 className="page-title">{t('terms.title')}</h1>

                <p>
                    {t('terms.subtitle')}
                </p>

                <section>
                    <h2>{t('terms.sec1Title')}</h2>
                    <p>
                        {t('terms.sec1Text')}
                    </p>
                </section>

                <section>
                    <h2>{t('terms.sec2Title')}</h2>
                    <p>
                        {t('terms.sec2Text')}
                    </p>
                </section>

                <section>
                    <h2>{t('terms.sec3Title')}</h2>
                    <p>
                        {t('terms.sec3Text')}
                    </p>
                </section>

                <section>
                    <h2>{t('terms.sec4Title')}</h2>
                    <p>
                        {t('terms.sec4Text')}
                    </p>
                </section>

                <section>
                    <h2>{t('terms.sec5Title')}</h2>
                    <p>
                        {t('terms.sec5Text1')}
                        <Link to="/contact">{t('terms.sec5LinkText')}</Link>
                        {t('terms.sec5Text2')}
                    </p>
                </section>
            </main>
        </div>
    );
};

export default Terms;