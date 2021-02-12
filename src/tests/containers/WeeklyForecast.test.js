import React from 'react';
import { render } from '@testing-library/react';
import WeeklyForecast from '../../containers/WeeklyForecast';

// What could be the most important thing to test here? Please remember that tests for particular values already have been tested.
// What should be tested first?
// What type of queries and assertions you might want use this time?

describe('WeeklyForecast', () => {
  const validProps = [
    {
      date: 1111111,
      description: 'Stub description 1',
      icon: 'stubIcon1',
      temperature: {
        max: 22,
        min: 12,
      },
    },
    {
      date: 2222222,
      description: 'Stub description2',
      icon: 'stubIcon2',
      temperature: {
        max: 24,
        min: 13,
      },
    },
  ];

  it('renders correctly', () => {
    const { asFragment } = render(<WeeklyForecast forecasts={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders the correct number of daily forecasts', () => {
    const { getAllByTestId } = render(
      <WeeklyForecast forecasts={validProps} />
    );

    expect(getAllByTestId('daily-forecast')).toHaveLength(2);
  });
});
