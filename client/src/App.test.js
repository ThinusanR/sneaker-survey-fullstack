import { render, screen } from '@testing-library/react';
import App from './App';

describe('testing', () => {
  test('renders ', () => {
    render(<App />);
    const linkElement = screen.getByPlaceholderText('Enter your first name');
    expect(linkElement).toBeInTheDocument();
  });
});
