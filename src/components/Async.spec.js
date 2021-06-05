import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('<Async />', () => {
  test('renders list item', async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'Post' }],
    });

    render(<Async />);

    const listItemEl = await screen.findAllByRole('listitem');
    expect(listItemEl).not.toHaveLength(0);
  });
});
