import React from 'react';
import '../../styles/DetailedForecast.css';

const DetailedForecast = () => {
  return (
    <div className="DetailedForecast">
      <h1>Sat 6th Feb</h1>
      <p>
        <span>Max Temperature: </span>
        13°c
        <br />
        <span>Min Temperature: </span>
        4°c
        <br />
        <span>Humidity: </span>
        47%
        <br />
        <span>Wind: </span>
        33mph
      </p>
    </div>
  );
};

export default DetailedForecast;
