import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { projects, ProjectCategory } from '../../data/projects';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Project: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);

  const projectsPerPage = 6;

  // Extraire dynamiquement les catégories uniques présentes dans les projets
  const categories: ProjectCategory[] = Array.from(new Set(projects.map(p => p.category)));

  const categoryParam = searchParams.get('category');
  const activeCategory: ProjectCategory | 'tous' =
    (categoryParam && (categoryParam === 'tous' || categories.includes(categoryParam as ProjectCategory)))
      ? (categoryParam as ProjectCategory | 'tous')
      : 'tous';

  // Récupérer la page active de l'URL (1 par défaut)
  const urlPage = parseInt(searchParams.get('page') || '1', 10);
  const currentPage = isNaN(urlPage) || urlPage < 1 ? 1 : urlPage;

  // Préchargement de toutes les images pour éviter les clignotements
  useEffect(() => {
    let loadedImages = 0;
    const totalImages = projects.length;

    projects.forEach((projet) => {
      const img = new Image();
      img.src = projet.image;
      img.onload = () => {
        loadedImages += 1;
        if (loadedImages === totalImages) {
          setIsImagesLoaded(true);
        }
      };
    });
  }, []);

  // 1. Filtrer les projets
  const filteredProjects = activeCategory === 'tous'
    ? projects
    : projects.filter((projet) => projet.category === activeCategory);

  // 2. Calculer la pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage) || 1;
  
  // Ajuster la page courante si elle dépasse le total des pages suite à un filtrage
  const activePage = currentPage > totalPages ? totalPages : currentPage;

  const startIndex = (activePage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, endIndex);

  const handleFilterChange = (category: ProjectCategory | 'tous') => {
    setSearchParams({ category, page: '1' }, { replace: true });
  };

  // Gérer le changement de page
  const handlePageChange = (pageNumber: number) => {
    setSearchParams({ category: activeCategory, page: String(pageNumber) }, { replace: true });
  };

  return (
    <div className="projects-page-container">
      <div className="projects-wrapper">
        
        {/* Titre et introduction */}
        <div>
          <h1 className="projects-title">
            Mes projets
          </h1>
          <p className="projects-subtitle">
            Découvrez la liste de mes réalisations, filtrables par catégorie technique.
          </p>
        </div>

        {/* Barre de Filtres */}
        <div className="filters-container">
          <button
            onClick={() => handleFilterChange('tous')}
            className={`filter-tab ${activeCategory === 'tous' ? 'filter-tab-active' : ''}`}
          >
            Tous ({projects.length})
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`filter-tab ${activeCategory === category ? 'filter-tab-active' : ''}`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)} ({projects.filter(p => p.category === category).length})
            </button>
          ))}
        </div>

        {/* Liste des Projets avec animation d'entrée douce */}
        {/* Liste des Projets en Grille avec animation d'entrée douce */}
        <div 
          key={`${activeCategory}-${activePage}`} 
          className="projects-grid animate-list-fade"
        >
          {paginatedProjects.length === 0 ? (
            <p className="text-center text-gray-500 py-12">Aucun projet trouvé dans cette catégorie.</p>
          ) : (
            paginatedProjects.map((project) => (
              <div 
                key={project.id}
                className="project-grid-card"
              >
                {/* Section Visuelle (Haut) */}
                <div className="project-grid-image-container">
                  {!isImagesLoaded ? (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.titre}
                      className="project-grid-image"
                    />
                  )}
                  {/* Overlay discret */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/20 to-transparent"></div>
                </div>

                {/* Section Contenu (Bas) */}
                <div className="project-grid-content">
                  <div className="space-y-4">
                    {/* En-tête */}
                    <div className="project-grid-title-area">
                      <h2 className="project-grid-title">
                        {project.titre}
                      </h2>
                      <span className="project-grid-badge">
                        {project.category}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="project-grid-desc text-justify">
                      {project.description}
                    </p>

                    {/* Technologies */}
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
                                <IconComponent className={`tech-icon ${tech.color || 'text-gray-600'}`} />
                              ) : (
                                <div className="w-3.5 h-3.5 bg-gray-200 rounded-full"></div>
                              )}
                              <span className="tech-name">
                                {tech.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Actions de redirection */}
                  <div className="flex justify-end pt-4 border-t border-gray-50">
                    <Link
                      to={project.lien}
                      className="btn-view-project w-full"
                    >
                      Détails du projet
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination Premium */}
        {totalPages > 1 && (
          <div className="pagination-container">
            {/* Bouton Précédent */}
            <button
              onClick={() => handlePageChange(activePage - 1)}
              disabled={activePage === 1}
              className="pagination-btn"
              aria-label="Page précédente"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>

            {/* Numéros de Page */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`page-num-btn ${activePage === pageNum ? 'page-num-btn-active' : ''}`}
              >
                {pageNum}
              </button>
            ))}

            {/* Bouton Suivant */}
            <button
              onClick={() => handlePageChange(activePage + 1)}
              disabled={activePage === totalPages}
              className="pagination-btn"
              aria-label="Page suivante"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Project;