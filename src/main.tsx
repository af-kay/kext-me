import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/iosevka-aile';

import App from './app';

import './main.scss';

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
