import React from 'react';
import { skillCategories } from '../data/skills';

const SkillPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Titre principal */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
            Compétences
          </h1>
          <p className="mt-3 text-base sm:text-lg text-gray-500 max-w-xl mx-auto font-normal">
            Aperçu des technologies, outils et compétences transversales que je maîtrise et mets en pratique au quotidien.
          </p>
        </div>

        {/* Grille des catégories - 2 blocs par ligne sur grand écran */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <section 
              key={index}
              className="bg-white border border-gray-100 p-6 sm:p-8 shadow-md rounded-2xl flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <div>
                {/* En-tête de catégorie */}
                <h2 className="text-xl font-bold text-gray-800 border-l-4 border-blue-600 pl-3 mb-6">
                  {category.title}
                </h2>
                
                {/* Grille des compétences compactes à 2 colonnes */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, idx) => {
                    const IconComponent = skill.icon;
                    return (
                      <div 
                        key={idx}
                        className="flex items-center gap-3 bg-gray-50/50 hover:bg-gray-100/70 px-3.5 py-3 rounded-xl border border-gray-100/30 hover:border-gray-200/60 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all duration-300 group"
                      >
                        {/* Wrapper d'icône */}
                        <div className={`flex-shrink-0 p-1.5 bg-white rounded-lg border border-gray-100 shadow-sm ${skill.color} group-hover:scale-105 transition-transform duration-300`}>
                          {IconComponent ? (
                            <IconComponent className="w-5 h-5" />
                          ) : (
                            <div className="w-5 h-5 bg-gray-100 rounded"></div>
                          )}
                        </div>
                        {/* Nom de la compétence */}
                        <span className="text-xs sm:text-sm font-semibold text-gray-700 leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SkillPage;
