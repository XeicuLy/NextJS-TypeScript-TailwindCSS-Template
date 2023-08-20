import { render } from '@testing-library/react';

import { Sample } from './Sample';

describe('ui/Sample', () => {
  it('renders correctly', () => {
    const { container } = render(<Sample />);
    expect(container).toMatchSnapshot();
  });
});
