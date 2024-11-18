import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import ProjectPage from '../pages/ProjectPage';
import ContactPage from '../pages/ContactPage';
import ExperiencePage from '../pages/ExperiencePage';
import TrainingPage from '../pages/TrainingPage';
import SkillPage from '../pages/SkillPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPage from '../pages/PrivacyPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/projects', element: <ProjectPage /> },
        { path: '/experiences', element: <ExperiencePage /> },
        { path: '/formations', element: <TrainingPage /> },
        { path: '/competences', element: <SkillPage /> },
        { path: '/contact', element: <ContactPage /> },
        { path: '/terms', element: <TermsPage /> },
        { path: '/privacy', element: <PrivacyPage /> },
      ],
    },
  ],
  {
    basename: '/MonPortfolio/', 
  }
);

export default router;
