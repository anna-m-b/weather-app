import React from 'react';
import { render, screen } from '@testing-library/react';
import DailyForecast from '../../components/components/DailyForecast';

describe('DailyForecast', () => {
  beforeEach(() => {
    render(
      <DailyForecast
        date="Mon 8th Feb"
        icon="wi wi-day-rain"
        description="Rainy"
        temperature="6°c"
      />
    );
  });

  it('renders the date', () => {
    expect(screen.getByText('Mon 8th Feb')).toBeTruthy();
    expect(screen.getByText('Mon 8th Feb')).toHaveClass('DailyForecast_date');
  });

  it('renders a weather icon', () => {
    expect(screen.getByRole('figure', { name: /rainy/i })).toBeTruthy();
    expect(screen.getByRole('figure', { name: /rainy/i })).toHaveClass(
      'DailyForecast_icon'
    );
  });

  it('renders the temperature', () => {
    expect(screen.getByText('6°c')).toBeTruthy();
    expect(screen.getByText('6°c')).toHaveClass('DailyForecast_temperature');
  });

  it('renders a weather description as text', () => {
    expect(screen.getByText('Rainy')).toBeTruthy();
    expect(screen.getByText('Rainy')).toHaveClass('DailyForecast_description');
  });
});
