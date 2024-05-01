import React from 'react';
import ReactDOM from 'react-dom/client';
import Samples from './Samples.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Samples />
    </BrowserRouter>
  </React.StrictMode>,
)
