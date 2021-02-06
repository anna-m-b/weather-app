import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'normalize.css';
import './styles/weather-icons.min.css';
import App from './components/App';
import forecastData from './data/forecast.json';

ReactDOM.render(
  <React.StrictMode>
    <App forecastData={forecastData} />
  </React.StrictMode>,
  document.getElementById('root')
);
