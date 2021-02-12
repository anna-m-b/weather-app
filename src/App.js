import './styles/App.css';
import React from 'react';
import PropTypes from 'prop-types';
import WeeklyForecast from './containers/WeeklyForecast';
import Location from './components/Location';
import DetailedForecast from './components/DetailedForecast';

function App({ forecastData }) {
  const { location, forecasts } = forecastData;

  return (
    <div className="App">
      <Location location={location} />
      <DetailedForecast forecastItem={forecasts[0]} />
      <WeeklyForecast forecasts={forecasts} />
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