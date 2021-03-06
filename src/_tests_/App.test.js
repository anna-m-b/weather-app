import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../App';
import getForecast from '../requests/getForecast';

jest.mock('../requests/getForecast');

describe('App', () => {
  describe('with successful response', () => {
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
      getForecast.mockResolvedValue(new Promise(() => {}));
      const { asFragment } = render(<App />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('renders correctly after getting data', async () => {
      const { asFragment, getByText } = render(<App />);

      expect(getForecast).toHaveBeenCalledTimes(1);
      expect(getForecast).toHaveBeenCalledWith('');

      await waitFor(() => expect(getByText(/manchester/i)).toBeInTheDocument());

      expect(asFragment()).toMatchSnapshot();
    });

    it('does not render an error message when there is weather data', async () => {
      const { queryByTestId } = render(<App />);

      await waitFor(() => {
        const invalidCityMessage = queryByTestId('error-invalid-city');
        const serverErrorMessage = queryByTestId('server-error');

        expect(invalidCityMessage).not.toBeInTheDocument();
        expect(serverErrorMessage).not.toBeInTheDocument();
      });
    });

    it('captures user input and sends it to the API', async () => {
      const { getByText, getByRole, getByTestId } = render(<App />);

      await waitFor(() => expect(getByText('Clear')).toBeInTheDocument());

      const input = getByTestId('search-box');
      const button = getByRole('button', { name: /search/i });

      userEvent.type(input, 'london');

      expect(input).toHaveValue('london');

      userEvent.click(button);

      await waitFor(() => {
        expect(getForecast).toHaveBeenCalledTimes(2);
        expect(getForecast).toHaveBeenCalledWith('');
        expect(getForecast).toHaveBeenCalledWith('london');
      });
    });
  });

  describe('with errors', () => {
    it('renders an error message if no response from api', async () => {
      const error = {
        response: {
          status: 500,
        },
      };

      getForecast.mockResolvedValue(Promise.reject(error));
      const { getByText } = render(<App />);

      await waitFor(() =>
        expect(getByText(/there was a problem/i)).toBeInTheDocument()
      );
    });

    it('renders an error message when api sends back a 404', async () => {
      const error = {
        response: {
          status: 404,
        },
      };

      getForecast.mockResolvedValue(Promise.reject(error));
      const { getByText } = render(<App />);

      await waitFor(() => {
        expect(getByText(/no weather data/i)).toBeInTheDocument();
      });
    });
  });
});
