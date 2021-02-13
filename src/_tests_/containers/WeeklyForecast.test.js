import React from 'react';
import { render } from '@testing-library/react';
import WeeklyForecast from '../../containers/WeeklyForecast';

describe('WeeklyForecast', () => {
  const validProps = {
    forecasts: [
      {
        date: 1111111,
        description: 'Stub description 1',
        icon: 500,
        temperature: {
          max: 22,
          min: 12,
        },
      },
      {
        date: 2222222,
        description: 'Stub description2',
        icon: 800,
        temperature: {
          max: 24,
          min: 13,
        },
      },
    ],
    handleMoreDetailsClick: () => {},
  };

  it('renders correctly', () => {
    const { asFragment } = render(
      <WeeklyForecast
        forecasts={validProps.forecasts}
        handleMoreDetailsClick={validProps.handleMoreDetailsClick}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the correct number of daily forecasts', () => {
    const { getAllByTestId } = render(
      <WeeklyForecast
        forecasts={validProps.forecasts}
        handleMoreDetailsClick={validProps.handleMoreDetailsClick}
      />
    );

    expect(getAllByTestId('daily-forecast')).toHaveLength(2);
  });
});
