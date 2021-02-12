import React from 'react';
import PropTypes from 'prop-types';
import '../styles/DailyForecast.css';
import '../styles/weather-icons.min.css';

const DailyForecast = ({ date, icon, temperature, description }) => {
  return (
    <div className="DailyForecast" data-testid="daily-forecast">
      <div className="DailyForecast_date">{date}</div>
      <figure
        className="DailyForecast_icon"
        role="figure"
        aria-label={`${description} icon`}
      >
        <i className={icon} />
      </figure>
      <div className="DailyForecast_temperature">{`${temperature}°c`}</div>
      <div className="DailyForecast_description">{description}</div>
      <div className="DailyForecast_more-details">More details</div>
    </div>
  );
};

DailyForecast.propTypes = {
  date: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default DailyForecast;
