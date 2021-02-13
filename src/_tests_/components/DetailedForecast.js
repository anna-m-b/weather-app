import React from 'react';
import { render, screen } from '@testing-library/react';
import DetailedForecast from '../../components/DetailedForecast';

describe('DetailedForecast', () => {
  const validProps = {
    date: 1525046400000,
    temperature: {
      max: 11,
      min: 4,
    },
    wind: {
      speed: 13,
      direction: 's',
      icon: 'wi wi-wind towards-180-deg',
    },
    humidity: 30,
    description: 'Clear',
    icon: 800,
  };

  it('renders correctly', () => {
    const { asFragment } = render(
      <DetailedForecast forecastItem={validProps} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  describe('each element renders according to props', () => {
    beforeEach(() => render(<DetailedForecast forecastItem={validProps} />));

    it('renders the date', () => {
      expect(screen.getByText('Mon, 30 April')).toHaveClass(
        'DetailedForecast_date'
      );
    });

    it('renders the maximum and minimum temperature', () => {
      expect(screen.getByText('4°c')).toHaveClass('DetailedForecast_min-temp');
      expect(screen.getByText('11°c')).toHaveClass('DetailedForecast_max-temp');
    });

    it('renders humidity', () => {
      expect(screen.getByText('Humidity')).toBeTruthy();
      expect(screen.getByText('30')).toHaveClass('DetailedForecast_humidity');
    });

    it('renders wind speed', () => {
      expect(screen.getByText('Wind')).toBeTruthy();
      expect(screen.getByText('13mph')).toHaveClass('DetailedForecast_wind');
    });
  });
});
