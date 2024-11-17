import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        {/* Copyright */}
        <p className="text-sm text-gray-400 mb-4 sm:mb-0 sm:ml-10">
          @2024 Mon Portfolio. Tous droits réservés.
        </p>
        
        {/* Liens de politique */}
        <div className="flex flex-col sm:flex-row sm:space-x-8 mt-4 sm:mt-0 text-center sm:text-left sm:mr-10">
          <Link to="/terms" className="text-sm text-gray-400 hover:text-gray-200">
            Conditions d'utilisation
          </Link>
          <Link to="/privacy" className="text-sm text-gray-400 hover:text-gray-200">
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
