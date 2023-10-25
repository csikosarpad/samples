import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Provider from './utils/context';

import './styles/index.css';
import App from './App';
const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
