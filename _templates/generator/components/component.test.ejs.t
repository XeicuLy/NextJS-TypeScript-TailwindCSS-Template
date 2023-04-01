---
to: src/components/<%= atomic %>/<%= h.changeCase.pascal(component_name) %>/index.test.tsx
---

import { render } from '@testing-library/react';
import { <%= h.changeCase.pascal(component_name) %> } from '.';

describe('<%= atomic %>/<%= h.changeCase.pascal(component_name) %>', () => {
  it('renders correctly', () => {
    const { container } = render(<<%= h.changeCase.pascal(component_name) %> />);
    expect(container).toMatchSnapshot();
  });
});
