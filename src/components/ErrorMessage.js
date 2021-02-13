import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ErrorMessage.css';

const ErrorMessage = ({ errorCode, city }) => {
  if (errorCode === 404) {
    return (
      <div className="ErrorMessage">
        {`No weather data for ${city} available`}
      </div>
    );
  }
  if (errorCode === 500) {
    return (
      <div className="ErrorMessage">
        There was a problem getting data. Please refresh the page.
      </div>
    );
  }
  return null;
};

ErrorMessage.propTypes = {
  city: PropTypes.string.isRequired,
  errorCode: PropTypes.number.isRequired,
};

export default ErrorMessage;
