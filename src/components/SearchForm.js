import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SearchForm.css';
import '../styles/normalize.css';

const SearchForm = ({ onInputChange, onSubmit, searchInput }) => {
  return (
    <div className="SearchForm">
      <p className="SearchForm_instruction">
        Search for a UK city to see its weather forecast
      </p>
      <span className="SearchForm_search">
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
      </span>
    </div>
  );
};

SearchForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
};

export default SearchForm;
