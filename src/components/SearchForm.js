import React from 'react';
import PropTypes from 'prop-types';
import '../styles/SearchForm.css';
import '../styles/normalize.css';

const SearchForm = ({ onInputChange, onSubmit, searchInput }) => {
  return (
    <form className="SearchForm" onSubmit={onSubmit} data-testid="search-form">
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
            data-testid="search-box"
            onChange={onInputChange}
          />
        </label>
        <button type="submit" data-testid="search-button">
          Search
        </button>
      </span>
    </form>
  );
};

SearchForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  searchInput: PropTypes.string.isRequired,
};

export default SearchForm;
