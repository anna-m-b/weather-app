import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from '../App';

import getForecast from '../requests/getForecast';

jest.mock('../requests/getForecast');

describe('App', () => {
  beforeEach(() => {
    getForecast.mockResolvedValue({
      data: {
        location: {
          city: 'Manchester',
          country: 'UK',
        },
        forecasts: [
          {
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
          },
          {
            date: 1525132800000,
            temperature: {
              max: 13,
              min: 8,
            },
            wind: {
              speed: 60,
              direction: 'ne',
              icon: 'wi wi-wind towards-90-deg',
            },
            humidity: 80,
            description: 'Stormy',
            icon: 211,
          },
        ],
      },
    });
  });

  it('shows loading text while waiting for response on first load', () => {
    getForecast.mockReturnValue(new Promise(() => {}));
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly after getting data', async () => {
    const { asFragment, getByText } = render(<App />);
    await waitFor(() => expect(getByText(/manchester/i)).toBeInTheDocument());
    expect(asFragment()).toMatchSnapshot();
  });
});
