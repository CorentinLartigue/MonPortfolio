import {createBrowserRouter} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home.tsx';
import Projects from '../pages/Projects.tsx';
import Contact from '../pages/Contact.tsx';
import Experiences from '../pages/Experiences.tsx';
import Training from '../pages/Training.tsx';
import Skills from '../pages/Skills.tsx';
import Terms from '../pages/Terms.tsx';
import Privacy from '../pages/Privacy.tsx';
import Berroyer from '../pages/projects/Berroyer.tsx';
import Sneaky from '../pages/projects/Sneaky.tsx';
import Portfolio from '../pages/projects/Portfolio.tsx';
import Echecs from '../pages/projects/Echecs.tsx';
import Ysport from '../pages/projects/Ysport.tsx';
import Amphitryon from '../pages/projects/Amphitryon.tsx';
import Biorelai from '../pages/projects/Biorelai.tsx';
import M2L from '../pages/projects/M2L.tsx';
import Dovinyle from '../pages/projects/Dovinyle.tsx';
import Cheerzup from '../pages/projects/Cheerzup.tsx';
import LocPriority from '../pages/projects/LocPriority.tsx';
import Ytellerie from '../pages/projects/Ytellerie.tsx';
import Horamanea from '../pages/projects/Horamanea.tsx';
import Error404Page from '../pages/errors/404';
import Error503Page from '../pages/errors/503';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout/>,
            children: [
                {path: '/', element: <Home/>},
                {path: '/projects', element: <Projects/>},
                {path: '/experiences', element: <Experiences/>},
                {path: '/formations', element: <Training/>},
                {path: '/competences', element: <Skills/>},
                {path: '/contact', element: <Contact/>},
                {path: '/terms', element: <Terms/>},
                {path: '/privacy', element: <Privacy/>},
                {path: '/projects/berroyer', element: <Berroyer/>},
                {path: '/projects/sneaky', element: <Sneaky/>},
                {path: '/projects/portfolio', element: <Portfolio/>},
                {path: '/projects/echecs', element: <Echecs/>},
                {path: '/projects/ysport', element: <Ysport/>},
                {path: '/projects/amphitryon', element: <Amphitryon/>},
                {path: '/projects/biorelai', element: <Biorelai/>},
                {path: '/projects/m2l', element: <M2L/>},
                {path: '/projects/dovinyle', element: <Dovinyle/>},
                {path: '/projects/cheerzup', element: <Cheerzup/>},
                {path: '/projects/locpriority', element: <LocPriority/>},
                {path: '/projects/ytellerie', element: <Ytellerie/>},
                {path: '/projects/horamanea', element: <Horamanea/>},
                {path: '/503', element: <Error503Page/>},
                {path: '/maintenance', element: <Error503Page/>},
                {path: '*', element: <Error404Page/>},
            ],
        },
    ],
    {
        basename: '/MonPortfolio/',
    }
);

export default router;