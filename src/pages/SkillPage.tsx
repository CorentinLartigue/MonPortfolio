import React from 'react';

const SkillPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-xl rounded-lg space-y-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 text-center">Compétences</h1>
        
        <section>
          <h2 className="text-2xl font-semibold text-gray-800">Back-end</h2>
          <ul className="mt-2 text-gray-600 list-disc pl-6">
            <li>PHP (et Symfony actuellement en formation)</li>
            <li>Python</li>
            <li>Java (et Spring Boot)</li>
            <li>C#</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Front-end</h2>
          <ul className="mt-2 text-gray-600 list-disc pl-6">
            <li>HTML</li>
            <li>CSS (et Tailwind ou BootStrap5)</li>
            <li>JavaScript ou TypeScript</li>
            <li>React (en cours de formation)</li>
            <li>Angular</li>
            <li>Jquery</li>
            <li>Font Awesome</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Data</h2>
          <ul className="mt-2 text-gray-600 list-disc pl-6">
            <li>SQL</li>
            <li>MEA</li>
            <li>MLR</li>
            <li>UML</li>
            <li>MySQL ou MariaDB</li>
            <li>RGPD</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Logiciels</h2>
          <ul className="mt-2 text-gray-600 list-disc pl-6">
            <li>Visual Studio Code</li>
            <li>Figma</li>
            <li>Github</li>
            <li>WampServer</li>
            <li>Intellij-ultimate</li>
            <li>WinDesign</li>
            <li>Eclipse</li>
            <li>Gitlab</li>
            <li>Trello</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Soft Skills</h2>
          <ul className="mt-2 text-gray-600 list-disc pl-6">
            <li>Méthodes agiles (scrum)</li>
            <li>À l’écoute</li>
            <li>Motivé</li>
            <li>Rigoureux et sérieux</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SkillPage;
