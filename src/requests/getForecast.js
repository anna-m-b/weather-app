/* eslint-disable no-console */
/* eslint-disable no-undef */
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
        // The request was made but no response was received
        setErrorCode(500);
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
};

export default getForecast;
