import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('renders the greeting', () => {
    render(<App />);

    const greetingEl = screen.queryByText("Let's get started!");
    expect(greetingEl).toBeInTheDocument();
  });
});
