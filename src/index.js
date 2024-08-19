import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/responsive.css';
import App from './App';
import { UIContextProvider } from './context/ui-context';

ReactDOM.render(
  <React.StrictMode>
    <UIContextProvider>
      <App />
    </UIContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
