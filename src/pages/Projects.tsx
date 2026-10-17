import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { projects, ProjectCategory } from '../data/projects.ts';
import { useTranslate } from '../hooks/useTranslate.ts';
import '../styles/projects.css';

const STORAGE_KEY_CATEGORY = 'portfolio_active_category';
const STORAGE_KEY_VISIBLE_COUNT = 'portfolio_visible_count';
const INITIAL_BATCH = 6;
const BATCH_SIZE = 6;

// Retrieve initial active category from session storage
const getInitialCategory = (categories: ProjectCategory[]): ProjectCategory | 'tous' => {
    try {
        const saved = sessionStorage.getItem(STORAGE_KEY_CATEGORY);
        if (saved && (saved === 'tous' || categories.includes(saved as ProjectCategory))) {
            return saved as ProjectCategory | 'tous';
        }
    } catch {
        // Fallback silently if session storage is unavailable
    }
    return 'tous';
};

// Retrieve initial visible count from session storage
const getInitialVisibleCount = (): number => {
    try {
        const saved = sessionStorage.getItem(STORAGE_KEY_VISIBLE_COUNT);
        const parsed = saved ? parseInt(saved, 10) : INITIAL_BATCH;
        return isNaN(parsed) || parsed < INITIAL_BATCH ? INITIAL_BATCH : parsed;
    } catch {
        return INITIAL_BATCH;
    }
};

const Projects: React.FC = () => {
    const { t } = useTranslate();
    const [isImagesLoaded, setIsImagesLoaded] = useState(false);

    const categories: ProjectCategory[] = Array.from(new Set(projects.map(p => p.category)));

    const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'tous'>(() => getInitialCategory(categories));
    const [visibleCount, setVisibleCount] = useState<number>(() => getInitialVisibleCount());

    // Intersection observer watching for the bottom scroll sentinel
    const { ref: sentinelRef, inView } = useInView({
        rootMargin: '200px',
    });

    // Preload project covers
    useEffect(() => {
        let loadedImages = 0;
        const totalImages = projects.length;

        if (totalImages === 0) {
            setIsImagesLoaded(true);
            return;
        }

        const handleImageLoad = () => {
            loadedImages += 1;
            if (loadedImages === totalImages) {
                setIsImagesLoaded(true);
            }
        };

        projects.forEach((projet) => {
            const img = new Image();
            img.src = projet.image;
            img.onload = handleImageLoad;
            img.onerror = handleImageLoad;
        });
    }, []);

    const filteredProjects = activeCategory === 'tous'
        ? projects
        : projects.filter((projet) => projet.category === activeCategory);

    // Increment visible projects progressively as user scrolls down
    useEffect(() => {
        if (inView && visibleCount < filteredProjects.length) {
            setVisibleCount((prev) => {
                const next = Math.min(prev + BATCH_SIZE, filteredProjects.length);
                try {
                    sessionStorage.setItem(STORAGE_KEY_VISIBLE_COUNT, String(next));
                } catch {
                    // Ignore storage errors
                }
                return next;
            });
        }
    }, [inView, visibleCount, filteredProjects.length]);

    const displayedProjects = filteredProjects.slice(0, visibleCount);

    const handleFilterChange = (category: ProjectCategory | 'tous') => {
        setActiveCategory(category);
        setVisibleCount(INITIAL_BATCH);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        try {
            sessionStorage.setItem(STORAGE_KEY_CATEGORY, category);
            sessionStorage.setItem(STORAGE_KEY_VISIBLE_COUNT, String(INITIAL_BATCH));
        } catch {
            // Ignore storage errors
        }
    };

    return (
        <div className="projects-page-container">
            <div className="projects-wrapper">

                <header>
                    <h1 className="projects-title">
                        {t('project.title')}
                    </h1>
                    <p className="projects-subtitle">
                        {t('project.subtitle')}
                    </p>
                </header>

                <nav className="projects-filters" aria-label="Filtres de catégories">
                    <button
                        onClick={() => handleFilterChange('tous')}
                        className={activeCategory === 'tous' ? 'active' : ''}
                    >
                        {t('project.filterAll')} ({projects.length})
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleFilterChange(category)}
                            className={activeCategory === category ? 'active' : ''}
                        >
                            {t(`project.categories.${category}`)} ({projects.filter(p => p.category === category).length})
                        </button>
                    ))}
                </nav>

                <main
                    key={activeCategory}
                    className="projects-grid animate-list-fade"
                >
                    {displayedProjects.length === 0 ? (
                        <p className="projects-no-results">{t('project.emptyMessage')}</p>
                    ) : (
                        displayedProjects.map((project) => (
                            <article key={project.id}>
                                <figure>
                                    {!isImagesLoaded ? (
                                        <div className="project-grid-skeleton"></div>
                                    ) : (
                                        <img
                                            src={project.image}
                                            alt={t(project.titreKey)}
                                            loading="lazy"
                                        />
                                    )}
                                    <div className="project-grid-shadow"></div>
                                </figure>

                                <div>
                                    <div>
                                        <header>
                                            <h2>{t(project.titreKey)}</h2>
                                            <span>{t(`project.categories.${project.category}`)}</span>
                                        </header>

                                        <p>{t(project.descriptionKey)}</p>

                                        <ul>
                                            {project.technologies.map((tech, idx) => {
                                                const IconComponent = tech.icon;
                                                return (
                                                    <li
                                                        key={idx}
                                                        title={tech.name}
                                                    >
                                                        {IconComponent ? (
                                                            <IconComponent
                                                                className={tech.color || 'text-gray-600'}
                                                            />
                                                        ) : (
                                                            <div></div>
                                                        )}
                                                        <span>{tech.name}</span>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>

                                    <footer>
                                        <Link to={project.lien}>
                                            {t('project.btnDetails')}
                                        </Link>
                                    </footer>
                                </div>
                            </article>
                        ))
                    )}
                </main>

                {
                    // Bottom sentinel triggers next batch; displays completion indicator once all are shown
                }
                {visibleCount < filteredProjects.length ? (
                    <div ref={sentinelRef} className="projects-scroll-sentinel" aria-hidden="true" />
                ) : (
                    displayedProjects.length > 0 && (
                        <footer className="projects-end-indicator">
                            <p>{t('project.endMessage', { count: filteredProjects.length })}</p>
                        </footer>
                    )
                )}

            </div>
        </div>
    );
};

export default Projects;