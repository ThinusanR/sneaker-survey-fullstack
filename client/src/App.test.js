import { render, screen } from '@testing-library/react';
import App from './App';

describe('App.js Test', () => {
  test('Renders Sneaker survey app ', () => {
    render(<App />);
    const linkElement = screen.getByText('Sneaker Survey');
    expect(linkElement).toBeInTheDocument();
  });
});
