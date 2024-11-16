const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm text-gray-400">
           @2024 Mon Portfolio. Tous droits réservés.
        </p>
        
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/terms" className="footer-link">Conditions d'utilisation</a>
          <a href="/privacy" className="footer-link">Politique de confidentialité</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
