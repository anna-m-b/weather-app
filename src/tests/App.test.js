import { render, screen } from '@testing-library/react';
import App from '../components/App';

xtest('renders the title', () => {
  render(<App />);
  const title = screen.getByText(/weather forecast/i);
  expect(title).toBeInTheDocument();
});
