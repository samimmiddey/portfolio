import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UIContextProvider } from './components/context/ui-context';

ReactDOM.render(
  <React.StrictMode>
    <UIContextProvider>
      <App />
    </UIContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
