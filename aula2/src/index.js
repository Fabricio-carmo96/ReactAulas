import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Usuarios from './Components/Usuarios';
import Postagens from './Components/Postagens';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Postagens />
    <App />
    <Usuarios/>
  </>
);

