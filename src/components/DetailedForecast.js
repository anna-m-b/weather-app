import React from 'react';
import PropTypes from 'prop-types';
import '../styles/DetailedForecast.css';
import getStringyDate from '../util/getStringyDate';
import LargeWeatherIcon from './LargeWeatherIcon';

const DetailedForecast = ({ forecastItem }) => {
  const { date, temperature, humidity, wind, description } = forecastItem;
  const { max, min } = temperature;
  const { speed } = wind;

  return (
    <div className="DetailedForecast">
      <div className="DetailedForecast_info">
        <div className="DetailedForecast_date">{getStringyDate(date)}</div>

        <div className="DetailedForecast_max-temp">{`Max Temperature: ${max}°c`}</div>

        <div className="DetailedForecast_min-temp">{`Min Temperature: ${min}°c`}</div>

        <div className="DetailedForecast_humidity">{`Humidity: ${humidity}`}</div>

        <div className="DetailedForecast_wind">{`Wind: ${speed}mph `}</div>
      </div>
      <LargeWeatherIcon description={description} />
    </div>
  );
};

DetailedForecast.propTypes = {
  forecastItem: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
    }),
    humidity: PropTypes.number,
    description: PropTypes.string,
  }),
};

DetailedForecast.defaultProps = {
  forecastItem: {
    date: new Date().getTime(),
    temperature: { max: 0, min: 0 },
    humidity: 0,
    wind: { speed: 0 },
    description: 'Clear',
  },
};

export default DetailedForecast;
