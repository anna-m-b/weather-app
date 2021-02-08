import React from 'react';
import PropTypes from 'prop-types';
import DailyForecast from '../components/DailyForecast';
import getStringyDate from '../../util/getStringyDate';

import '../../styles/WeeklyForecast.css';

const WeeklyForecast = ({ forecast }) => {
  const forecasts = forecast.map((forecastItem) => {
    const { date, temperature, description, icon } = forecastItem;
    const dateString = getStringyDate(date);
    return (
      <DailyForecast
        date={dateString}
        temperature={temperature.max}
        description={description}
        icon={icon}
        key={date}
      />
    );
  });

  return <div className="WeeklyForecast">{forecasts}</div>;
};

WeeklyForecast.propTypes = {
  forecast: PropTypes.arrayOf(
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
      icon: PropTypes.string,
    })
  ).isRequired,
};

export default WeeklyForecast;
