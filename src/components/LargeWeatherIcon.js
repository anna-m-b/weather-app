import React from 'react';
import PropTypes from 'prop-types';
import cloudy from '../images/weather/cloudy.png';
import sunny from '../images/weather/sunny.png';
import rainy from '../images/weather/rainy.png';
import stormy from '../images/weather/stormy.png';
import snow from '../images/weather/snow.png';
import hazy from '../images/weather/hazy.png';

const LargeWeatherIcon = ({ description }) => {
  let imgSrc;
  switch (description) {
    case 'Clear':
      imgSrc = sunny;
      break;
    case 'Rain':
      imgSrc = rainy;
      break;
    case 'Clouds':
      imgSrc = cloudy;
      break;
    case 'Snow':
      imgSrc = snow;
      break;
    case 'Stormy':
      imgSrc = stormy;
      break;
    case 'Hazy':
      imgSrc = hazy;
      break;
    default:
      imgSrc = '';
  }
  return (
    <img
      src={imgSrc}
      alt={`${description} icon`}
      className="LargeWeatherIcon"
    />
  );
};

LargeWeatherIcon.propTypes = {
  description: PropTypes.string.isRequired,
};

export default LargeWeatherIcon;
