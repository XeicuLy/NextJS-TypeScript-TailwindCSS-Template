import { render } from '@testing-library/react';

import { SamplePresenter } from './SamplePresenter';

describe('app/sample', () => {
  it('renders correctly', () => {
    const { container } = render(<SamplePresenter />);
    expect(container).toMatchSnapshot();
  });
});
