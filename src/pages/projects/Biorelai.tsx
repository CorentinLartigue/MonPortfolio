import React from 'react';
import ProjectHero from '../../components/ProjectHero.tsx';
import {useTranslate} from '../../hooks/useTranslate';
import { FaLeaf, FaSeedling, FaTractor, FaAppleAlt } from 'react-icons/fa';
import '../../styles/projects/biorelai.css';

const Biorelai: React.FC = () => {
    const {t} = useTranslate();

    const roles = [
        { icon: <FaSeedling />, title: t('project.biorelai.role1'), b1: t('project.biorelai.role1Bullet1'), b2: t('project.biorelai.role1Bullet2') },
        { icon: <FaTractor />, title: t('project.biorelai.role2'), b1: t('project.biorelai.role2Bullet1'), b2: t('project.biorelai.role2Bullet2') },
        { icon: <FaAppleAlt />, title: t('project.biorelai.role3'), b1: t('project.biorelai.role3Bullet1'), b2: t('project.biorelai.role3Bullet2') },
        { icon: <FaLeaf />, title: t('project.biorelai.role4'), b1: t('project.biorelai.role4Bullet1'), b2: t('project.biorelai.role4Bullet2') },
    ];

    return (
        <div className="biorelai-page">
            <ProjectHero
                badgeIcon={<FaLeaf />}
                badgeLabel={t('project.biorelai.badge')}
                title={t('project.biorelai.title')}
                subtitle={t('project.biorelai.subtitle')}
                description={t('project.biorelai.desc')}
                techTags={['PHP', 'HTML5', 'CSS3', 'Trello', 'Architecture MVC']}
                theme="emerald"
            />

            <main className="biorelai-main-content">
                {
                    // Introduction context card
                }
                <article className="biorelai-intro-card">
                    <h2>{t('project.biorelai.introTitle')}</h2>
                    <p>{t('project.biorelai.introText')}</p>
                </article>

                <section>
                    <h2>{t('project.biorelai.featuresTitle')}</h2>
                    <div className="biorelai-roles-grid">
                        {roles.map((role, idx) => (
                            <article key={idx} className="biorelai-role-card group">
                                <div className="biorelai-role-icon">{role.icon}</div>
                                <h3>{role.title}</h3>
                                <ul>
                                    <li>
                                        <span></span>
                                        {role.b1}
                                    </li>
                                    <li>
                                        <span></span>
                                        {role.b2}
                                    </li>
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="biorelai-method-card">
                    <h2>{t('project.biorelai.methodTitle')}</h2>
                    <p>
                        {t('project.biorelai.methodText')}
                    </p>
                    <h3>{t('project.biorelai.methodTitle_2')}</h3>
                    <p>
                        {t('project.biorelai.methodText_2')}
                    </p>
                </section>
            </main>
        </div>
    );
};

export default Biorelai;