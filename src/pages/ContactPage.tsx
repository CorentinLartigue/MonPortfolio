import React from 'react';
import cv from '/CV.pdf';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white border border-gray-100 p-8 shadow-xl rounded-2xl space-y-10">
        
        {/* En-tête */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Contactez-moi
          </h1>
          <p className="text-sm sm:text-base text-gray-500 max-w-lg mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets ou pour toute opportunité de collaboration. Je serais ravi d'échanger avec vous !
          </p>
        </div>

        {/* Informations de contact directes */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-gray-800 border-l-4 border-blue-600 pl-3">
            Informations de contact
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Téléphone */}
            <div className="flex items-center gap-4 p-5 bg-gray-50/70 border border-gray-100 rounded-xl hover:bg-gray-100/50 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                <FaPhoneAlt className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Téléphone</p>
                <a
                  href="tel:+33642167647"
                  className="text-base sm:text-lg font-bold text-gray-700 hover:text-blue-600 transition-colors break-all"
                >
                  +33 6 42 16 76 47
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-5 bg-gray-50/70 border border-gray-100 rounded-xl hover:bg-gray-100/50 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm">
                <FaEnvelope className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Email</p>
                <a
                  href="mailto:corentin.lartigue.cl@gmail.com"
                  className="text-base sm:text-lg font-bold text-gray-700 hover:text-blue-600 transition-colors break-all"
                >
                  corentin.lartigue.cl@gmail.com
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Réseaux sociaux */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-gray-800 border-l-4 border-blue-600 pl-3">
            Réseaux sociaux
          </h2>
          <p className="text-sm text-gray-500 max-w-xl leading-relaxed">
            Retrouvez-moi également en ligne pour suivre mes contributions, mes projets personnels et mon actualité professionnelle.
          </p>
          
          <div className="flex justify-center gap-8 sm:gap-12">
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/corentin-lartigue"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group transition duration-300 transform hover:scale-105"
            >
              <div className="w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-2xl flex items-center justify-center mb-2 shadow-md group-hover:shadow-lg transition-all duration-300">
                <FaLinkedin className="w-7 h-7 text-white" />
              </div>
              <span className="text-sm font-bold text-gray-600 group-hover:text-blue-600 transition-colors">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/CorentinLartigue?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group transition duration-300 transform hover:scale-105"
            >
              <div className="w-14 h-14 bg-gray-800 hover:bg-gray-900 rounded-2xl flex items-center justify-center mb-2 shadow-md group-hover:shadow-lg transition-all duration-300">
                <FaGithub className="w-7 h-7 text-white" />
              </div>
              <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">GitHub</span>
            </a>

          </div>
        </section>

        {/* Actions CV */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6 border-t border-gray-100">
          
          {/* Télécharger CV */}
          <a
            href={cv}
            download="CV_Corentin_Lartigue.pdf"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95 text-sm sm:text-base w-full sm:w-auto"
          >
            <FaDownload className="w-4 h-4" />
            <span>Télécharger mon CV</span>
          </a>

          {/* Consulter en ligne */}
          <a
            href="https://www.canva.com/design/DAGgf_qHmnY/hIU_ywK-VuoQ8L2-zw7WhQ/view?utm_content=DAGgf_qHmnY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf94ecbf562"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform active:scale-95 text-sm sm:text-base w-full sm:w-auto"
          >
            <FaExternalLinkAlt className="w-4 h-4" />
            <span>Consulter mon CV en ligne</span>
          </a>

        </div>

        {/* Call to Action */}
        <section className="text-center bg-gray-50/70 border border-gray-100 p-6 rounded-2xl">
          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1">Prêt à collaborer ?</h3>
          <p className="text-xs sm:text-sm text-gray-500">
            Je suis à l'écoute de nouveaux défis techniques et d'opportunités de projets innovants.
          </p>
        </section>

      </div>
    </div>
  );
};

export default ContactPage;
