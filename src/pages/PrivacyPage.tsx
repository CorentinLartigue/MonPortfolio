import React from 'react';
import ReturnButton from '../components/shared/ReturnButton';
import { Link } from 'react-router-dom';


const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-xl rounded-lg space-y-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center">Politique de confidentialité</h1>

        <p className="text-lg text-gray-600 text-center">
          Cette politique de confidentialité décrit les pratiques en matière de collecte de données personnelles sur ce site web. Votre vie privée est importante pour nous.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8">1. Aucune collecte de données personnelles</h2>
          <p className="mt-2 text-gray-600">
            Nous ne collectons aucune donnée personnelle vous concernant lors de votre navigation sur ce site. Il n'y a pas d'inscription, de collecte d'informations personnelles, ni d'autres procédés liés à la collecte de données sensibles.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8">2. Données collectées de manière passive</h2>
          <p className="mt-2 text-gray-600">
            Bien que ce site ne collecte pas activement vos données personnelles, il est possible que certaines données de navigation, comme les informations liées aux performances techniques du site (par exemple, l'adresse IP, le type de navigateur ou les erreurs) puissent être collectées à des fins de maintenance et d'amélioration du site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8">3. Aucune utilisation de cookies ou services tiers</h2>
          <p className="mt-2 text-gray-600">
            Ce site ne fait pas usage de cookies et ne partage pas d'informations avec des services tiers, ce qui signifie qu'aucune donnée n'est collectée pour des fins publicitaires ou de suivi.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8">4. Modifications de cette politique</h2>
          <p className="mt-2 text-gray-600">
            Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page, et vous êtes encouragés à vérifier cette page régulièrement pour vous tenir informé de tout changement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8">5. Droit à l'information</h2>
          <p className="mt-2 text-gray-600">
            Si nous devions collecter des données personnelles à l'avenir, vous aurez le droit d'accès, de rectification ou de suppression des informations que vous nous avez fournies. Vous pourrez en faire la demande via notre page de <Link to="/contact" className="text-blue-500 hover:underline">Contact</Link>.
          </p>
        </section>
      </div>

      <ReturnButton />
    </div>
  );
};

export default PrivacyPage;
