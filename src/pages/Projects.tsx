import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import {projects, ProjectCategory} from '../data/projects.ts';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import {useTranslate} from '../hooks/useTranslate.ts';
import '../styles/projects.css';

const Projects: React.FC = () => {
    const {t} = useTranslate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [isImagesLoaded, setIsImagesLoaded] = useState(false);

    const projectsPerPage = 6;

    const categories: ProjectCategory[] = Array.from(new Set(projects.map(p => p.category)));

    const categoryParam = searchParams.get('category');
    const activeCategory: ProjectCategory | 'tous' =
        (categoryParam && (categoryParam === 'tous' || categories.includes(categoryParam as ProjectCategory)))
            ? (categoryParam as ProjectCategory | 'tous')
            : 'tous';

    const urlPage = parseInt(searchParams.get('page') || '1', 10);
    const currentPage = isNaN(urlPage) || urlPage < 1 ? 1 : urlPage;

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

    const filteredProjects = activeCategory === 'tous' ? projects : projects.filter((projet) => projet.category === activeCategory);
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage) || 1;
    const activePage = currentPage > totalPages ? totalPages : currentPage;
    const startIndex = (activePage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

    const handleFilterChange = (category: ProjectCategory | 'tous') => {
        setSearchParams({category, page: '1'}, {replace: true});
    };

    const handlePageChange = (pageNumber: number) => {
        setSearchParams({category: activeCategory, page: String(pageNumber)}, {replace: true});
    };

    return (
        <div className="projects-page-container">
            <div className="projects-wrapper">

                <div>
                    <h1 className="projects-title">
                        {t('project.title')}
                    </h1>
                    <p className="projects-subtitle">
                        {t('project.subtitle')}
                    </p>
                </div>

                <div className="filters-container">
                    <button
                        onClick={() => handleFilterChange('tous')}
                        className={`filter-tab ${activeCategory === 'tous' ? 'filter-tab-active' : ''}`}
                    >
                        {t('project.filterAll')} ({projects.length})
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleFilterChange(category)}
                            className={`filter-tab ${activeCategory === category ? 'filter-tab-active' : ''}`}
                        >
                            {t(`project.categories.${category}`)} ({projects.filter(p => p.category === category).length})
                        </button>
                    ))}
                </div>

                <div
                    key={`${activeCategory}-${activePage}`}
                    className="projects-grid animate-list-fade"
                >
                    {paginatedProjects.length === 0 ? (
                        <p className="projects-no-results">{t('project.emptyMessage')}</p>
                    ) : (
                        paginatedProjects.map((project) => (
                            <div
                                key={project.id}
                                className="project-grid-card"
                            >
                                <div className="project-grid-image-container">
                                    {!isImagesLoaded ? (
                                        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                                    ) : (
                                        <img
                                            src={project.image}
                                            alt={t(project.titreKey)}
                                            className="project-grid-image"
                                        />
                                    )}
                                    <div className="project-grid-image-shadow"></div>
                                </div>

                                <div className="project-grid-content">
                                    <div className="project-grid-info">
                                        <div className="project-grid-title-area">
                                            <h2 className="project-grid-title">
                                                {t(project.titreKey)}
                                            </h2>
                                            <span
                                                className="project-grid-badge">{t(`project.categories.${project.category}`)}</span>
                                        </div>

                                        <p className="project-grid-desc">
                                            {t(project.descriptionKey)}
                                        </p>

                                        <div>
                                            <div className="tech-list">
                                                {project.technologies.map((tech, idx) => {
                                                    const IconComponent = tech.icon;
                                                    return (
                                                        <div
                                                            key={idx}
                                                            className="tech-badge"
                                                            title={tech.name}
                                                        >
                                                            {IconComponent ? (
                                                                <IconComponent
                                                                    className={`tech-icon ${tech.color || 'text-gray-600'}`}/>
                                                            ) : (
                                                                <div className="tech-badge-placeholder-icon"></div>
                                                            )}
                                                            <span className="tech-name">{tech.name}</span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="project-grid-action">
                                        <Link
                                            to={project.lien}
                                            className="btn-view-project w-full"
                                        >
                                            {t('project.btnDetails')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {totalPages > 1 && (
                    <div className="pagination-container">
                        <button
                            onClick={() => handlePageChange(activePage - 1)}
                            disabled={activePage === 1}
                            className="pagination-btn"
                            aria-label="Page précédente"
                        >
                            <FaChevronLeft className="pagination-btn-icon"/>
                        </button>

                        {Array.from({length: totalPages}, (_, i) => i + 1).map((pageNum) => (
                            <button
                                key={pageNum}
                                onClick={() => handlePageChange(pageNum)}
                                className={`page-num-btn ${activePage === pageNum ? 'page-num-btn-active' : ''}`}
                            >
                                {pageNum}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(activePage + 1)}
                            disabled={activePage === totalPages}
                            className="pagination-btn"
                            aria-label="Page suivante"
                        >
                            <FaChevronRight className="pagination-btn-icon"/>
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Projects;