import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {FiMenu, FiX, FiHome, FiFolder, FiBriefcase, FiAward, FiCpu, FiMail, FiGlobe} from 'react-icons/fi';
import {useTranslate} from '../hooks/useTranslate.ts';
import logo from '/images/logos/logo.png';
import '../styles/app.css';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const {t, changeLanguage, currentLanguage} = useTranslate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        {name: t('app.nav.home'), path: '/', icon: <FiHome />},
        {name: t('app.nav.projects'), path: '/projects', icon: <FiFolder />},
        {name: t('app.nav.experiences'), path: '/experiences', icon: <FiBriefcase />},
        {name: t('app.nav.formations'), path: '/formations', icon: <FiAward />},
        {name: t('app.nav.skills'), path: '/competences', icon: <FiCpu />},
        {name: t('app.nav.contact'), path: '/contact', icon: <FiMail />},
    ];

    const isActive = (path: string) => {
        if (path === '/') {
            return location.pathname === '/' || location.pathname === '';
        }
        return location.pathname.startsWith(path);
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : 'navbar-default'}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo-wrapper group">
                    <div className="navbar-logo-box">
                        <div className="navbar-logo-glow"></div>
                        <img
                            src={logo}
                            alt="Logo"
                            className="navbar-logo-img"
                        />
                    </div>
                    <div className="navbar-brand-text">
                        <span className="navbar-brand-name">Corentin Lartigue</span>
                        <span className="navbar-brand-sub">Portfolio</span>
                    </div>
                </Link>

                <div className="navbar-menu-desktop">
                    {navLinks.map((link) => {
                        const active = isActive(link.path);
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`navbar-link ${active ? 'navbar-link-active' : 'navbar-link-inactive'}`}
                            >
                                <span>{link.name}</span>
                                {active && (
                                    <span className="navbar-link-indicator"></span>
                                )}
                            </Link>
                        );
                    })}

                    <div className="navbar-lang-selector">
                        <FiGlobe className="navbar-lang-icon"/>
                        <button
                            onClick={() => changeLanguage('fr')}
                            className={`navbar-lang-btn ${currentLanguage.startsWith('fr') ? 'active' : ''}`}
                        >
                            FR
                        </button>
                        <span className="navbar-lang-separator">|</span>
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`navbar-lang-btn ${currentLanguage.startsWith('en') ? 'active' : ''}`}
                        >
                            EN
                        </button>
                    </div>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="navbar-toggle-btn"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            <div
                className={`navbar-menu-mobile ${isOpen ? 'navbar-menu-mobile-open' : 'navbar-menu-mobile-closed'}`}
            >
                <div className="navbar-mobile-links-container">
                    {navLinks.map((link) => {
                        const active = isActive(link.path);
                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`navbar-mobile-link ${active ? 'navbar-mobile-link-active' : 'navbar-mobile-link-inactive'}`}
                            >
                                {link.icon}
                                <span>{link.name}</span>
                            </Link>
                        );
                    })}

                    <div className="navbar-lang-selector-mobile">
                        <FiGlobe className="navbar-lang-icon"/>
                        <button
                            onClick={() => changeLanguage('fr')}
                            className={`navbar-lang-btn-mobile ${currentLanguage.startsWith('fr') ? 'active' : ''}`}
                        >
                            FR
                        </button>
                        <span className="navbar-lang-separator-mobile">|</span>
                        <button
                            onClick={() => changeLanguage('en')}
                            className={`navbar-lang-btn-mobile ${currentLanguage.startsWith('en') ? 'active' : ''}`}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;