import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import getStringyDate from '../util/getStringyDate';
import '../styles/DailyForecast.css';
import '../styles/weather-icons.min.css';

const DailyForecast = ({
  date,
  icon,
  temperature,
  description,
  handleMoreDetailsClick,
}) => {
  return (
    <div className="DailyForecast" data-testid="daily-forecast">
      <div className="DailyForecast_date">{getStringyDate(date)}</div>
      <WeatherIcon
        className="DailyForecast_icon"
        name="owm"
        iconId={icon}
        aria-label={`${description} icon`}
        data-testid="weather-icon"
      />
      <div className="DailyForecast_temperature">{`${temperature}°c`}</div>
      <div className="DailyForecast_description">{description}</div>
      <button
        type="button"
        onClick={() => handleMoreDetailsClick(date)}
        className="DailyForecast_more-details"
      >
        More details
      </button>
    </div>
  );
};

DailyForecast.propTypes = {
  date: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  description: PropTypes.string.isRequired,
  handleMoreDetailsClick: PropTypes.func.isRequired,
};

export default DailyForecast;
