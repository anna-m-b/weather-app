import React from 'react';
import { render, screen } from '@testing-library/react';
import Location from '../../components/Location';

describe('Location', () => {
  it('renders the correct city and location props', () => {
    render(<Location location={{ city: 'Manchester', country: 'UK' }} />);
    expect(screen.getByText('Manchester, UK')).toBeTruthy();
    expect(screen.getByText('Manchester, UK')).toHaveClass('Location');
  });
});
