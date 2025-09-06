import cv from '/CV.pdf';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-xl rounded-lg space-y-8">
        {/* Section Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center">
          Contactez-moi
        </h1>
        <p className="text-gray-600 text-center">
          N'hésitez pas à me contacter pour discuter de vos projets ou pour toute question. 
          Je serais ravi d'échanger avec vous !
        </p>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Informations de contact</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Téléphone</p>
                <a href="tel:+33642167647" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                  +33 6 42 16 76 47
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:corentin.lartigue.cl@gmail.com" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                  corentin.lartigue.cl@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Social Networks */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Réseaux sociaux</h2>
          <p className="mt-2 text-gray-600">
            Suivez-moi sur les réseaux sociaux pour découvrir mes derniers projets et rester informé de mes activités.
          </p>
          <div className="mt-6 flex justify-center space-x-8">
            <a 
              href="https://www.linkedin.com/in/corentin-lartigue" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center group hover:scale-105 transform transition duration-300"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-700 transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <span className="text-lg font-semibold text-blue-600 group-hover:text-blue-700">LinkedIn</span>
            </a>
            
            <a 
              href="https://github.com/CorentinLartigue?tab=repositories" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center group hover:scale-105 transform transition duration-300"
            >
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-900 transition-colors duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <span className="text-lg font-semibold text-gray-600 group-hover:text-gray-800">GitHub</span>
            </a>
          </div>
        </section>

        {/* CV Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Mon CV</h2>
          <p className="mt-2 text-gray-600">
            Voici mon CV pour découvrir mon parcours professionnel et mes compétences.
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            {/* Télécharger CV */}
            <a 
              href={cv} 
              download="CV_Corentin_Lartigue.pdf"
              className="inline-flex items-center space-x-3 px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-colors"
            >
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span>Télécharger</span>
            </a>

            {/* Consulter en ligne */}
            <a 
              href="https://www.canva.com/design/DAGgf_qHmnY/hIU_ywK-VuoQ8L2-zw7WhQ/view?utm_content=DAGgf_qHmnY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hf94ecbf562" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
            >
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <span>Consulter en ligne</span>
            </a>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Prêt à collaborer ?</h3>
          <p className="text-gray-600">
            Je suis toujours intéressé par de nouveaux projets et défis. N'hésitez pas à me contacter !
          </p>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
