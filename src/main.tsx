import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from 'react-router-dom';
import router from './config/router';
import ErrorBoundary from './helpers/ErrorBoundary';
import './styles/app.css'
import './config/i18n';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ErrorBoundary>
            <div className="App flex-grow">
                <RouterProvider router={router}/>
            </div>
        </ErrorBoundary>
    </StrictMode>,
)