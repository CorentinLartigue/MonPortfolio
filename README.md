# Mon Portfolio

Bienvenue sur le dépôt de mon portfolio de Développeur Web. Cette application est une Single Page Application (SPA) moderne conçue pour présenter mon parcours, mes formations, mes expériences professionnelles ainsi que mes projets.

## Aperçu et Déploiement

Le projet est déployé et accessible en ligne à l'adresse suivante :
**[Consulter mon Portfolio en ligne](https://corentinlartigue.github.io/MonPortfolio/)**

---

## Technologies Utilisées

Le projet est construit avec des technologies modernes et performantes :

*   **React** : Bibliothèque principale pour la création de composants réutilisables.
*   **Vite** : Outil de build rapide et moderne pour un développement fluide.
*   **TypeScript** : Assure un typage statique fort pour la sécurité et la maintenabilité du code.
*   **Tailwind CSS** : Framework CSS utilitaire pour un design sur mesure et responsive.
*   **React Router DOM** : Gestionnaire de routes pour la navigation SPA.
*   **React Icons** : Bibliothèque d'icônes vectorielles harmonisées.

---

## Guide de Développement Local

### Prérequis

Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre machine.

### Installation

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/CorentinLartigue/MonPortfolio.git
   ```

2. Installer les dépendances :
   ```bash
   npm install
   ```

### Lancement du serveur de développement

Pour lancer l'application localement avec rechargement à chaud :
```bash
npm run dev
```
L'application sera accessible par défaut sur `http://localhost:5173/MonPortfolio/`.

### Build de Production

Pour compiler le projet et générer les fichiers optimisés pour la production :
```bash
npm run build
```
Les fichiers générés se trouveront dans le répertoire `dist/`.

### Déploiement

Le déploiement est automatisé sur GitHub Pages grâce au script :
```bash
npm run deploy
```

---

## Conventions de Contribution

Afin de maintenir un historique de version clair et professionnel, les règles de nommage suivantes sont appliquées sur ce dépôt :

### Nommage des Branches

Chaque tâche fait l'objet d'une branche de travail dédiée nommée selon la structure :
`[type]/MP-[numero_tache]-[description]`

Exemples :
*   `feature/MP-1-responsive-page-contact`
*   `fix/MP-2-update-gitignore-fix-vulnerability-repo`
*   `refactoring/MP-3-refactoring-ui-projects`

### Messages de Commit

Les commits doivent commencer par le numéro de la tâche pour lier les modifications à leur ticket :
`MP-[numero_tache] - [Type de commit Fix / Feature / ...] - [description du commit]`

Exemple :
*   `MP-3 - Refactoring - installation de react-icons et externalisation des donnees`
