import githubIcon from 'src/assets/github.png';
import linkedinIcon from 'src/assets/linkedin.png';
import phoneIcon from 'src/assets/tel.png'; // Assurez-vous d'avoir l'icône de téléphone
import emailIcon from 'src/assets/email.png'; // Assurez-vous d'avoir l'icône d'email
import cvIcon from 'src/assets/cv.png';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-lg p-8 space-y-8">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800">Connectons-nous</h2>
          <p className="mt-4 text-lg text-gray-600">
            Suivez-moi sur les réseaux sociaux pour des mises à jour de mon profil, ou pour découvrir mes derniers projets !
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-12 mt-8">
          <a href="https://www.linkedin.com/in/corentin-lartigue" className="flex flex-col items-center text-center group hover:scale-110 transform transition duration-300">
            <img 
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full shadow-lg object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
            />
            <span className="mt-4 text-lg font-semibold text-blue-500 group-hover:text-blue-700">LinkedIn</span>
          </a>
          <a href="https://github.com/CorentinLartigue?tab=repositories" className="flex flex-col items-center text-center group hover:scale-110 transform transition duration-300">
            <img 
              src={githubIcon}
              alt="GitHub"
              className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full shadow-lg object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl"
            />
            <span className="mt-4 text-lg font-semibold text-gray-600 group-hover:text-gray-800">GitHub</span>
          </a>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg text-gray-600">Vous pouvez également me contacter directement :</p>
          
          <div className="flex justify-center items-center space-x-4 mt-4">
            <img 
              src={phoneIcon}
              alt="Phone"
              className="w-8 h-8"
            />
            <a href="tel:+33642167647" className="text-lg font-semibold text-gray-800 hover:text-gray-600">
              +33 6 42 16 76 47
            </a>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-4">
            <img 
              src={emailIcon}
              alt="Email"
              className="w-8 h-8"
            />
            <a href="mailto:corentin.lartigue.cl@gmail.com" className="text-lg font-semibold text-gray-800 hover:text-gray-600">
                corentin.lartigue.cl@gmail.com            
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
            <p className="text-lg text-gray-600">Envie de découvrir mon parcours ? Téléchargez mon CV en un clic !</p>
            <a href="src/assets/CV.pdf" download="Corentin_Lartigue_CV.pdf" className="flex justify-center items-center space-x-4 mt-4 text-lg font-semibold text-blue-500 hover:text-blue-700">
              <img 
                src={cvIcon}
                alt="Download CV"
                className="w-8 h-8"
              />
              <span>Télécharger le CV</span>
            </a>
          </div>
      </div>
    </div>
  );
};

export default ContactPage;
