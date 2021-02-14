/* eslint-disable no-console */
import axios from 'axios';

const getForecast = (
  setSelectedDate,
  setLocation,
  setForecasts,
  setErrorCode,
  city
) => {
  const path = city
    ? `https://mcr-codes-weather-app.herokuapp.com/forecast?city=${city}`
    : `https://mcr-codes-weather-app.herokuapp.com/forecast`;
  axios
    .get(path)
    .then((res) => {
      setSelectedDate(res.data.forecasts[0].date);
      setLocation(res.data.location);
      setForecasts(res.data.forecasts);
    })
    .catch((error) => {
      if (error.response) {
        setErrorCode(error.response.status);
      } else if (error.request) {
        setErrorCode(500);
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
};

export default getForecast;
