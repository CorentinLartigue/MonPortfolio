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
import BerroyerPage from '../pages/BerroyerPage';
import SneakyPage from '../pages/SneakyPage';
import PortfolioPage from '../pages/PortfolioPage';
import EchecsPage from '../pages/EchecsPage';
import YsportPage from '../pages/YsportPage';
import AmphitryonPage from '../pages/AmphitryonPage';
import BiorelaiPage from '../pages/BiorelaiPage';
import M2LPage from '../pages/M2LPage';

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
        { path: '/projects/berroyer', element: <BerroyerPage /> },
        { path: '/projects/sneaky', element: <SneakyPage /> },
        { path: '/projects/portfolio', element: <PortfolioPage /> },
        { path: '/projects/echecs', element: <EchecsPage /> },
        { path: '/projects/ysport', element: <YsportPage /> },
        { path: '/projects/amphitryon', element: <AmphitryonPage /> },
        { path: '/projects/biorelai', element: <BiorelaiPage /> },
        { path: '/projects/m2l', element: <M2LPage /> },
      ],
    },
  ],
  {
    basename: '/MonPortfolio/', 
  }
);

export default router;
