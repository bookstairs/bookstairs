import { render, screen } from '@testing-library/react';
import ReadTheDocs from '.';

describe('Render the ReadTheDocs Component correctly', () => {
  test('should render the `p` correctly', async () => {
    render(<ReadTheDocs />);

    expect(await screen.findByTestId('read-the-docs')).toBeInTheDocument();
  });
});
