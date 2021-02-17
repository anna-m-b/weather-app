import React from 'react';
import { render, screen } from '@testing-library/react';
import DailyForecast from '../../components/DailyForecast';

describe('DailyForecast', () => {
  const validProps = {
    date: 1525392000000,
    icon: '501',
    description: 'Rainy',
    temperature: 6,
    handleMoreDetailsClick: () => {},
  };

  it('renders correctly', () => {
    const { asFragment } = render(<DailyForecast {...validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  describe('it renders each element based on props', () => {
    beforeEach(() => {
      render(<DailyForecast {...validProps} />);
    });

    it('renders the date', () => {
      expect(screen.getByText('Fri 4 May')).toBeTruthy();
      expect(screen.getByText('Fri 4 May')).toHaveClass('DailyForecast_date');
    });

    it('renders a weather icon', () => {
      expect(
        screen.getByTestId('weather-icon', { name: /rainy/i })
      ).toBeTruthy();
      expect(
        screen.getByTestId('weather-icon', { name: /rainy/i })
      ).toHaveClass('DailyForecast_icon');
    });

    it('renders the temperature', () => {
      expect(screen.getByText('6°c')).toBeTruthy();
      expect(screen.getByText('6°c')).toHaveClass('DailyForecast_temperature');
    });

    it('renders a weather description as text', () => {
      expect(screen.getByText('Rainy')).toBeTruthy();
      expect(screen.getByText('Rainy')).toHaveClass(
        'DailyForecast_description'
      );
    });
  });
});
