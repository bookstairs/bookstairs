import { render, screen } from '@testing-library/react';

import { Welcome } from '@/components/Welcome/Welcome';

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Welcome />);
    expect(screen.getByText('this guide')).toHaveProperty(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
