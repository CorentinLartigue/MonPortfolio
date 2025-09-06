import React from 'react';

const SkillPage: React.FC = () => {
  return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-xl rounded-lg space-y-8">
          <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6 ">
            🚀 Compétences
          </h1>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-3 mb-3">
              Back-end
            </h2>
            <ul className="mt-2 text-gray-700 space-y-2">
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">💻</span> PHP (Symfony et Laravel)
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">🐍</span> Python
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">☕</span> Java (Spring Boot)
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">🚀</span> Express
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-3 mt-6 mb-3">
              Front-end
            </h2>
            <ul className="mt-2 text-gray-700 space-y-2">
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">🎨</span> HTML
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">🎨</span> CSS (Tailwind / Bootstrap5)
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">⚡</span> JavaScript ou TypeScript
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">⚛️</span> React (+Vite / Next.js)
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">🅰️</span> Angular
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">📜</span> jQuery
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-3 mt-6 mb-3">
              Data et services
            </h2>
            <ul className="mt-2 text-gray-700 space-y-2">
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">📊</span> SQL
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">📉</span> MEA
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">📈</span> MLR
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">📝</span> UML
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">💾</span> MySQL ou MariaDB
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">🔐</span> RGPD
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">🌐</span> Nginx
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">🔧</span> Apache
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-3 mt-6 mb-3">
              CMS et ERP
            </h2>
            <ul className="mt-2 text-gray-700 space-y-2">
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">🛒</span> Prestashop
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">🛍️</span> Shopify
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">📦</span> Fastmag
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">📊</span> Joolan
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-3 mt-6 mb-3">
              Logiciels
            </h2>
            <ul className="mt-2 text-gray-700 space-y-2">
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">💻</span> C#
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">📂</span> JavaFX
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-3 mt-6 mb-3">
              Utilitaires
            </h2>
            <ul className="mt-2 text-gray-700 space-y-2">
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">⚙️</span> Intellij-ultimate
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">⚙️</span> PhpStorm
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">⚙️</span> WebStorm
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">🛠️</span> Postman
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">🐳</span> Docker
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">🐧</span> Linux (CMD)
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">📅</span> Trello
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">🎨</span> Figma
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">💬</span> Slack
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">📖</span> Notion
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">💻</span> Github
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-3 mt-6 mb-3">
              Soft Skills
            </h2>
            <ul className="mt-2 text-gray-700 space-y-2">
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">📌</span> Méthodes agiles (Scrum & Kanban)
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">👂</span> À l'écoute
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">🔥</span> Motivé
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">✅</span> Sérieux
              </li>
              <li className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition">
                <span className="text-blue-500 mr-3">🎯</span> Rigoureux
              </li>
            </ul>
          </section>
        </div>
      </div>
  );
};

export default SkillPage;
