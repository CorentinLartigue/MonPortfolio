import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './config/router';
import ErrorBoundary from './helpers/ErrorBoundary';


const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="App flex-grow">
        <RouterProvider router={router} />
      </div>
    </ErrorBoundary>
  );

};

export default App;
