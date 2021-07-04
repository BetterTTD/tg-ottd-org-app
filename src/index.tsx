import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app/App';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App title="TG OpenTTD" />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
