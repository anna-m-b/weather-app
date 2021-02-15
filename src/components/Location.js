/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Location.css';

const Location = ({ location }) => {
  if (!location.city) {
    return null;
  }
  return (
    <h1 className="Location">
      {location.city}, {location.country}
    </h1>
  );
};

Location.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default Location;
