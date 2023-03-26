import { render, screen } from '@testing-library/react';
import { Example } from '.';

describe('molecules/Example', () => {
  it('renders', () => {
    render(<Example />);
    expect(screen.getByText('Example')).toBeInTheDocument();
  });
});
