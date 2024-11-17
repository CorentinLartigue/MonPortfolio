import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import ProjectPage from '../pages/ProjectPage';
import ContactPage from '../pages/ContactPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/projects', element: <ProjectPage /> },
        { path: '/contact', element: <ContactPage /> },
      ],
    },
  ],
  {
    basename: '/MonPortfolio/', 
  }
);

export default router;
