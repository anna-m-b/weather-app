import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SearchForm.css';

const SearchForm = ({ onInputChange, onSubmit, searchInput }) => {
  return (
    <div className="SearchForm">
      <label htmlFor="search">
        <input
          type="text"
          value={searchInput}
          placeholder="Enter a city"
          id="search"
          onChange={onInputChange}
        />
      </label>
      <button type="submit" onClick={onSubmit} data-testid="search-button">
        Search
      </button>
    </div>
  );
};

SearchForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
};

export default SearchForm;
