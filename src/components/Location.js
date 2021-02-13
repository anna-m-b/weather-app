/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ location }) => {
  if (!location.city) {
    return <h1 className="Location">No city selected</h1>;
  }
  return (
    <h1 className="Location">
      {location.city} {location.country}
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
