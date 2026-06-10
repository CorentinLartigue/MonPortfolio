import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslate} from '../hooks/useTranslate.ts';
import '../styles/app.css';

const Footer: React.FC = () => {
    const {t} = useTranslate();

    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-copyright">
                    {t('app.footer.copyright')}
                </p>

                <div className="footer-links">
                    <Link to="/terms" className="footer-link">
                        {t('app.footer.terms')}
                    </Link>
                    <Link to="/privacy" className="footer-link">
                        {t('app.footer.privacy')}
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;