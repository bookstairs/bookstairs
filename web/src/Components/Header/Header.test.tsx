import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Render the Header Component correctly', () => {
  test('should render the Vite logo', async () => {
    render(<Header />);

    const viteLogo = await screen.findByTestId('vite-logo');

    expect(viteLogo).toBeInTheDocument();
  });
  test('should render the React logo', async () => {
    render(<Header />);

    const reactLogo = await screen.findByTestId('react-logo');

    expect(reactLogo).toBeInTheDocument();
  });

  test('should render the title', async () => {
    render(<Header />);

    const header = await screen.findByText(/ViteRC/);

    expect(header).toBeInTheDocument();
  });
});
