# Directives et Règles Opérationnelles pour les Agents IA

Ce document constitue la référence centrale pour tout agent IA ou développeur intervenant sur ce projet. Toutes les règles définies ci-dessous sont strictes et doivent être appliquées sans exception.

---

## 1. Comportement, Langues & Communication

- **Langue des échanges avec l'utilisateur** : Répondre et communiquer exclusivement en français.
- **Langue du code et des commentaires** : Les commentaires dans le code et les messages de commit sont impérativement rédigés en anglais.
- **Interdiction formelle des emojis** : Aucun emoji dans le code, les logs, les messages de commit, la documentation ou les réponses textuelles.
- **Bibliothèques d'icônes** : Utiliser exclusivement des bibliothèques de composants d'icônes adaptées à la technologie front-end (`react-icons` : `Fa*`, `Si*`, `Md*`, etc.). Ne jamais insérer d'emojis pour illustrer une action ou un visuel.
- **Analyse exhaustive & explication détaillée** : Toujours effectuer une analyse exhaustive et expliquer la démarche en détail avant d'effectuer toute modification.
- **Cohérence architecturale & relecture systématique** : Relire systématiquement le code existant et s'adapter à l'architecture pour maintenir une cohérence parfaite avant toute nouvelle fonctionnalité.
- **Navigation et liens** : Créer des liens markdown cliquables pour chaque fichier ou symbole de code mentionné.

---

## 2. Conventions de Commentaires de Code

### A. En JavaScript / TypeScript (`.js`, `.jsx`, `.ts`, `.tsx`)
- **Langue** : Strictement en anglais.
- **Syntaxe obligatoire** : Ne pas utiliser de blocs `/* */`. Utiliser exclusivement des commentaires mono-lignes `//`.
- **Typographie** : La première lettre doit impérativement être en majuscule (ex: `// Fetch project metadata from catalog.`).
- **Préservation stricte** : Ne jamais supprimer ni écraser les commentaires existants. Exception unique : s'ils sont devenus techniquement obsolètes suite à un refactoring, les mettre à jour en anglais pour refléter l'implémentation exacte.
- **Pertinence** : Commentaires concis, directs et intelligents (indicateurs techniques sans bavardage), réservés aux sections de code complexes ou volumineuses.

### B. En CSS (`.css`)
- **Langue** : Strictement en anglais.
- **Grandes sections** : Délimiter chaque bloc ou composant majeur avec la forme :
  ```css
  /*======= COMPONENT NAME ========*/
  ```
- **Règles et classes spécifiques** : Commenter les blocs avec la forme :
  ```css
  /* Visual styling and hover transitions */
  ```

---

## 3. Commandes Git & Workflow de Versionnement

- **Inspection autorisée** : L'utilisation des commandes `git status`, `git diff`, `git diff --stat` et `git diff --cached` est autorisée pour analyser l'état de l'arbre de travail et les modifications apportées.
- **Autorisation de commit** : Ne jamais procéder à un commit (`git commit`) ni à un push (`git push`) sans l'accord ou l'ordre explicite de l'utilisateur.
- **Conventions de commit** : Utiliser impérativement la convention Conventional Commits, rédigée en anglais et en minuscules :
  - `feat(...)` : nouvelle fonctionnalité
  - `fix(...)` : correction de bogue
  - `refactor(...)` : refactorisation sans changement de comportement
  - `style(...)` : ajustements de style, CSS, mise en page
  - `chore(...)` : tâches de maintenance, configuration, dépendances

---

## 4. Architecture CSS & Front-End

- **Zéro classe utilitaire inline** : Aucune classe utilitaire Tailwind inline dans les balises JSX/TSX (`p-4`, `flex`, `text-xl`, etc.).
- **Priorité aux balises HTML sémantiques** :
  1. Utiliser en priorité absolue les balises HTML natives appropriées (`header`, `main`, `section`, `article`, `figure`, `figcaption`, `h1`, `h2`, `h3`, `p`, `ul`, `ol`, `li`, `img`, `button`, `a`).
  2. Éviter la prolifération de noms de classes personnalisés sur chaque balise enfant (ex: ne pas créer `carte-titre`, `carte-desc`, `carte-item`).
  3. Définir une classe conteneur sémantique principale si nécessaire, puis cibler ses éléments enfants par des sélecteurs de balises descendants dans le fichier CSS dédié (`.carte h2`, `.carte p`, `.carte ul`, `.carte li`, `.carte img`).
- **Isolation CSS & PostCSS** :
  - Ne jamais utiliser `@apply` avec des classes personnalisées définies dans un autre fichier CSS (cause d'erreur de compilation PostCSS).
  - Dans les directives `@apply`, utiliser uniquement des classes utilitaires Tailwind natives.
  - Les classes génériques globales (ex: `project-zoomable-container`) s'appliquent directement dans le JSX en complément des classes structurelles du composant, sans passer par `@apply` inter-fichiers.

---

## 5. Configuration, Variables d'Environnement & Constantes

- **Centralisation dans `src/config/`** : Toute configuration utilisant des variables d'environnement ou des constantes externes doit impérativement être définie dans le dossier `src/config/` et injectée via des classes ou modules de configuration dédiés (à adapter selon la configuration et les technologies du projet).
- **Interdiction des accès directs sauvages** : Ne jamais appeler directement `process.env` ou `import.meta.env` au milieu des composants ou services sans passer par la couche de configuration centralisée.

---

## 6. Contenu Technique, Visuels & Portfolio

- **Zéro numéro de version dans les stacks** : Ne jamais afficher ou mentionner de numéros de version dans les présentations de projets ou de compétences (ex: mentionner "Angular", "NestJS", "PostgreSQL", "Flutter" et non "Angular 21", "NestJS 11" ou "PostgreSQL 16").
- **Formatage uniforme des images & Zoom HD** :
  - Toutes les captures d'écran et maquettes de projets doivent être intégrées dans le conteneur zoomable unifié (`project-zoomable-container`) avec overlay au survol, curseur pointeur et zoom doux (`scale(1.02)`).
  - L'agrandissement s'effectue via le composant accessible réutilisable `ImageModal` avec gestion du clavier (`Escape`), blocage du défilement d'arrière-plan, affichage plein écran et légende descriptive.
- **Gestion des états & URLs propres** :
  - Ne pas polluer l'URL du navigateur avec des paramètres de requête superflus (`?category=...&page=...`).
  - Préférer la persistance transparente via `sessionStorage` pour préserver le contexte de navigation (filtres, pages) lors des allers-retours entre pages de détails et listes.
