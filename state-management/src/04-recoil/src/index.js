import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import './index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <StrictMode>
      <App />
    </StrictMode>
  </RecoilRoot>
);
