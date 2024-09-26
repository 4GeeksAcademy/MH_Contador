import React from 'react';
import ReactDOM from 'react-dom/client';
import SecondsCounter from './SecondsCounter';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <SecondsCounter />
  </React.StrictMode>
);