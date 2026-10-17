import React from 'react';
import cv from '/CV.pdf';
import {FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaDownload, FaExternalLinkAlt} from 'react-icons/fa';
import {useTranslate} from '../hooks/useTranslate';
import '../styles/contact.css';

const Contact: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container">
            <main className="content-card contact-page">

                <header>
                    <h1 className="page-title">
                        {t('contact.title')}
                    </h1>
                    <p className="page-subtitle">
                        {t('contact.subtitle')}
                    </p>
                </header>

                <section>
                    <h2 className="section-title">
                        {t('contact.infoTitle')}
                    </h2>
                    <div className="contact-info-grid">

                        <article>
                            <span>
                                <FaPhoneAlt />
                            </span>
                            <div>
                                <label>{t('contact.phoneLabel')}</label>
                                <a href="tel:+33642167647">
                                    +33 6 42 16 76 47
                                </a>
                            </div>
                        </article>

                        <article>
                            <span>
                                <FaEnvelope />
                            </span>
                            <div>
                                <label>{t('contact.emailLabel')}</label>
                                <a href="mailto:corentin.lartigue.cl@gmail.com">
                                    corentin.lartigue.cl@gmail.com
                                </a>
                            </div>
                        </article>

                    </div>
                </section>

                <section>
                    <h2 className="section-title">
                        {t('contact.socialTitle')}
                    </h2>
                    <p className="section-text">
                        {t('contact.socialDesc')}
                    </p>

                    <nav aria-label="Réseaux sociaux">
                        <a
                            href="https://www.linkedin.com/in/corentin-lartigue"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>
                                <FaLinkedin />
                            </span>
                            <strong>LinkedIn</strong>
                        </a>

                        <a
                            href="https://github.com/CorentinLartigue"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>
                                <FaGithub />
                            </span>
                            <strong>GitHub</strong>
                        </a>
                    </nav>
                </section>

                <footer>
                    <a
                        href={cv}
                        download="CV_Corentin_Lartigue.pdf"
                    >
                        <FaDownload />
                        <span>{t('contact.btnDownloadCV')}</span>
                    </a>

                    <a
                        href="https://www.canva.com/design/DAGgf_qHmnY/hIU_ywK-VuoQ8L2-zw7WhQ/view?utm_content=DAGgf_qHmnY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf94ecbf562"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaExternalLinkAlt />
                        <span>{t('contact.btnOnlineCV')}</span>
                    </a>
                </footer>

                <aside>
                    <h3>{t('contact.ctaTitle')}</h3>
                    <p>{t('contact.ctaDesc')}</p>
                </aside>
            </main>
        </div>
    );
};

export default Contact;