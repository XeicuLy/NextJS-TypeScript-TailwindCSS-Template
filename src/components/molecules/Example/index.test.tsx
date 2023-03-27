import { render } from '@testing-library/react';
import { Example } from '.';

describe('molecules/Example', () => {
  it('renders correctly', () => {
    const { container } = render(<Example />);
    expect(container).toMatchSnapshot();
  });
});
