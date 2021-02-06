import React from 'react';
import '../../styles/DailyForecast.css';
import '../../styles/weather-icons.min.css';

const DailyForecast = () => {
  return (
    <div className="DailyForecast">
      <p className="date">Sat 6th Feb</p>
      <i className="wi wi-day-rain" />
      <p>
        6°c
        <br />
        Rainy
        <br />
        <span className="more-details">More details</span>
      </p>
    </div>
  );
};

export default DailyForecast;
