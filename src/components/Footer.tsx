import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslate} from '../hooks/useTranslate.ts';
import '../styles/app.css';

const Footer: React.FC = () => {
    const {t} = useTranslate();

    return (
        <footer className="footer">
            <div className="footer-container">
                <p>
                    {t('app.footer.copyright')}
                </p>

                <nav aria-label="Liens de pied de page">
                    <Link to="/terms">
                        {t('app.footer.terms')}
                    </Link>
                    <Link to="/privacy">
                        {t('app.footer.privacy')}
                    </Link>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;