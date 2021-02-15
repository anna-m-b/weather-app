import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'normalize.css';
import './styles/weather-icons.min.css';
import App from './App';
import Background from './containers/Background';
import './styles/normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <Background>
      <App />
    </Background>
  </React.StrictMode>,
  document.getElementById('root')
);
