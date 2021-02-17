/* eslint-disable no-console */
import axios from 'axios';

const getForecastData = async (city) => {
  const path = city
    ? `https://mcr-codes-weather-app.herokuapp.com/forecast?city=${city}`
    : `https://mcr-codes-weather-app.herokuapp.com/forecast`;
  const result = await axios.get(path);

  return result;
};

export default getForecastData;
