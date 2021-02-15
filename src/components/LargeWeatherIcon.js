import React from 'react';
import PropTypes from 'prop-types';
import cloudy from '../images/weather/cloudy.png';
import sunny from '../images/weather/sunny.png';
import rainy from '../images/weather/rainy.png';

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
