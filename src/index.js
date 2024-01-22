import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  {/* Wrapping app inside browser router so we can use routing inside it */}
    <BrowserRouter>  
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);