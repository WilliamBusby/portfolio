import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders App', () => {
  render(<App />);
  const appText = screen.getByText(/App/i);
  expect(appText).toBeInTheDocument();
});
