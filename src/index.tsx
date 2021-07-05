import React from 'react';
import ReactDOM from 'react-dom';
import MasterLayout from './components/master-layout/MasterLayout';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <MasterLayout title="TG OpenTTD" />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
