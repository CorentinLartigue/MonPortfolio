import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './config/router';


const App: React.FC = () => (
    <div className="App flex-grow">
      <RouterProvider router={router} />
    </div>
);

export default App;
