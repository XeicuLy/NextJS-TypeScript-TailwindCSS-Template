import { render } from '@testing-library/react';

import { Sample } from './Sample';

describe('feature/Sample', () => {
  it('renders correctly', () => {
    const { container } = render(<Sample />);
    expect(container).toMatchSnapshot();
  });
});
