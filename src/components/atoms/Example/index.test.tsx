import { render } from '@testing-library/react';
import { Example } from '.';

describe('atoms/Example', () => {
  it('renders correctly', () => {
    const { container } = render(<Example />);
    expect(container).toMatchSnapshot();
  });
});
