import React from 'react';
import PropTypes from 'prop-types';
import DailyForecast from '../components/DailyForecast';
import '../styles/WeeklyForecast.css';

const WeeklyForecast = ({ forecasts, handleMoreDetailsClick, errorCode }) => {
  let forecastsToDisplay;
  if (errorCode) {
    forecastsToDisplay = forecasts.map((forecastItem) => {
      const { date } = forecastItem;

      return (
        <DailyForecast
          date={date}
          temperature="- - -"
          description="- - -"
          icon="800"
          key={date}
          handleMoreDetailsClick={() => {}}
        />
      );
    });
  } else if (forecasts) {
    forecastsToDisplay = forecasts.map((forecastItem) => {
      const { date, temperature, description, icon } = forecastItem;

      return (
        <DailyForecast
          date={date}
          temperature={temperature.max}
          description={description}
          icon={icon.toString()}
          key={date}
          handleMoreDetailsClick={handleMoreDetailsClick}
        />
      );
    });
  }
  return <div className="WeeklyForecast">{forecastsToDisplay}</div>;
};

WeeklyForecast.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
      wind: PropTypes.shape({
        speed: PropTypes.number,
        direction: PropTypes.string,
      }),
      humidity: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.number,
    })
  ).isRequired,
  handleMoreDetailsClick: PropTypes.func.isRequired,
  errorCode: PropTypes.number,
};

WeeklyForecast.defaultProps = {
  errorCode: 0,
};

export default WeeklyForecast;
