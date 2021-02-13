import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchForm from '../../components/SearchForm';

describe('SearchForm', () => {
  const validProps = {
    onInputChange: () => {},
    onSubmit: () => {},
    searchInput: 'Manchester',
  };

  it('renders correctly', () => {
    const { asFragment } = render(<SearchForm {...validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('button', () => {
    it('renders the button with text "search"', () => {
      render(<SearchForm {...validProps} />);
      expect(screen.getByTestId('search-button')).toHaveTextContent('Search');
    });
  });
});
