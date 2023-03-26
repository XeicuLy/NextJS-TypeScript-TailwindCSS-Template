import { render, screen } from '@testing-library/react';
import { Example } from '@/components/atoms/Example';

describe('Example', () => {
  it('renders', () => {
    render(<Example />);
    expect(screen.getByText('Example')).toBeInTheDocument();
  });
});
