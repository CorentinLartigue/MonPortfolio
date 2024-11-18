import React from 'react';
import ReturnButton from '../components/shared/ReturnButton';
import { Link } from 'react-router-dom';


const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-xl rounded-lg space-y-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center">Conditions d'utilisation</h1>

        <p className="text-lg text-gray-600 text-center">
          En utilisant ce site web, vous acceptez les termes et conditions suivants.
        </p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8">1. Acceptation des conditions</h2>
          <p className="mt-2 text-gray-600">
            L'accès et l'utilisation de ce site sont soumis à votre acceptation de ces conditions. Si vous n'êtes pas d'accord avec ces conditions, veuillez ne pas utiliser ce site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8">2. Utilisation du site</h2>
          <p className="mt-2 text-gray-600">
            Vous vous engagez à ne pas utiliser ce site de manière frauduleuse, illégale ou nuisible. Vous êtes responsable de toute activité se produisant sur ce site à partir de votre compte (le cas échéant).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8">3. Modifications des conditions</h2>
          <p className="mt-2 text-gray-600">
            Nous nous réservons le droit de modifier ces conditions à tout moment. Toute modification sera publiée sur cette page, et nous vous encourageons à vérifier régulièrement cette page pour prendre connaissance des éventuels changements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8">4. Limitation de responsabilité</h2>
          <p className="mt-2 text-gray-600">
            Ce site est fourni "tel quel". Nous ne garantissons pas que le site sera exempt d'erreurs ou toujours disponible. En aucun cas, nous ne serons responsables des pertes, dommages ou préjudices indirects, consécutifs ou imprévus résultant de l'utilisation de ce site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-8">5. Contact</h2>
          <p className="mt-2 text-gray-600">
            Si vous avez des questions concernant ces conditions, veuillez nous contacter via la page <Link to="/contact" className="text-blue-500 hover:underline">Contact</Link>.
          </p>
        </section>
      </div>

      <ReturnButton />
    </div>
  );
};

export default TermsPage;
