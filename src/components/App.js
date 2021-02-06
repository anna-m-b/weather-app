import '../styles/App.css';
import React from 'react';
import PropTypes from 'prop-types';
import WeeklyForecast from './containers/WeeklyForecast';
import Location from './components/Location';
import DetailedForecast from './components/DetailedForecast';
import '../data/forecast.json';

function App({ forecastData }) {
  const { location } = forecastData;

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Location location={location} />
      <WeeklyForecast />
      <DetailedForecast />
    </div>
  );
}

App.propTypes = {
  forecastData: PropTypes.shape({
    location: PropTypes.shape({
      city: PropTypes.string,
      country: PropTypes.string,
    }),
    forecasts: PropTypes.arrayOf(PropTypes.any),
  }).isRequired,
};

export default App;
