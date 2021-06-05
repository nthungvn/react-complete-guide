import { render, screen } from '@testing-library/react';
import event from '@testing-library/user-event';
import Greeting from './Greeting';

describe('<Greeting />', () => {
  test('renders the "Hello world!"', () => {
    render(<Greeting />);

    const helloEl = screen.getByText('hello world', { exact: false });
    expect(helloEl).toBeInTheDocument();
  });

  test('renders the "It\'s good to see you"', () => {
    render(<Greeting />);

    const greetingEl = screen.getByText('good to see you', { exact: false });
    expect(greetingEl).toBeInTheDocument();
  });

  test('renders the "Changed!"', () => {
    render(<Greeting />);

    const buttonEl = screen.getByRole('button');
    event.click(buttonEl);

    const greetingEl = screen.queryByText('good to see you', { exact: false });
    expect(greetingEl).toBeNull();

    const changeEl = screen.getByText('Changed!');
    expect(changeEl).toBeInTheDocument();
  });
});
