import React from 'react';
import cv from '/CV.pdf';
import {FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaDownload, FaExternalLinkAlt} from 'react-icons/fa';
import {useTranslate} from '../hooks/useTranslate';
import '../styles/contact.css';

const Contact: React.FC = () => {
    const {t} = useTranslate();

    return (
        <div className="page-container">
            <div className="content-card contact-card">

                <div className="contact-header">
                    <h1 className="page-title">
                        {t('contact.title')}
                    </h1>
                    <p className="page-subtitle">
                        {t('contact.subtitle')}
                    </p>
                </div>

                <section className="contact-section-small">
                    <h2 className="section-title">
                        {t('contact.infoTitle')}
                    </h2>
                    <div className="contact-info-grid">

                        <div className="contact-card-item">
                            <div className="contact-icon-wrapper">
                                <FaPhoneAlt className="contact-icon-small"/>
                            </div>
                            <div>
                                <p className="contact-phone-label">{t('contact.phoneLabel')}</p>
                                <a
                                    href="tel:+33642167647"
                                    className="contact-phone-link"
                                >
                                    +33 6 42 16 76 47
                                </a>
                            </div>
                        </div>

                        <div className="contact-card-item">
                            <div className="contact-icon-wrapper">
                                <FaEnvelope className="contact-icon-small"/>
                            </div>
                            <div>
                                <p className="contact-email-label">{t('contact.emailLabel')}</p>
                                <a
                                    href="mailto:corentin.lartigue.cl@gmail.com"
                                    className="contact-email-link"
                                >
                                    corentin.lartigue.cl@gmail.com
                                </a>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="contact-section-large">
                    <h2 className="section-title">
                        {t('contact.socialTitle')}
                    </h2>
                    <p className="contact-section-desc">
                        {t('contact.socialDesc')}
                    </p>

                    <div className="contact-socials-row">
                        <a
                            href="https://www.linkedin.com/in/corentin-lartigue"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-social-item group"
                        >
                            <div className="contact-social-icon-blue">
                                <FaLinkedin className="contact-icon-large"/>
                            </div>
                            <span className="contact-social-label">LinkedIn</span>
                        </a>

                        <a
                            href="https://github.com/CorentinLartigue"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-social-item group"
                        >
                            <div className="contact-social-icon-dark">
                                <FaGithub className="contact-icon-large"/>
                            </div>
                            <span className="contact-social-label-dark">GitHub</span>
                        </a>
                    </div>
                </section>

                <div className="contact-cv-actions">
                    <a
                        href={cv}
                        download="CV_Corentin_Lartigue.pdf"
                        className="contact-btn-dark"
                    >
                        <FaDownload className="contact-btn-icon"/>
                        <span>{t('contact.btnDownloadCV')}</span>
                    </a>

                    <a
                        href="https://www.canva.com/design/DAGgf_qHmnY/hIU_ywK-VuoQ8L2-zw7WhQ/view?utm_content=DAGgf_qHmnY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf94ecbf562"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-btn-blue"
                    >
                        <FaExternalLinkAlt className="contact-btn-icon"/>
                        <span>{t('contact.btnOnlineCV')}</span>
                    </a>
                </div>

                <section className="contact-cta-section">
                    <h3 className="contact-cta-title">{t('contact.ctaTitle')}</h3>
                    <p className="contact-cta-text">
                        {t('contact.ctaDesc')}
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Contact;