import { render } from '@testing-library/react';

import { SampleContainer } from './SampleContainer';

describe('app/sample', () => {
  it('renders correctly', () => {
    const { container } = render(<SampleContainer />);
    expect(container).toMatchSnapshot();
  });
});
