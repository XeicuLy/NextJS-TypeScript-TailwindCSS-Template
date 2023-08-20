---
to: components/<%= component_type %>/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.test.tsx
---

import { render } from '@testing-library/react';
import { <%= h.changeCase.pascal(component_name) %> } from './<%= h.changeCase.pascal(component_name) %>';

describe('<%= component_type %>/<%= h.changeCase.pascal(component_name) %>', () => {
  it('renders correctly', () => {
    const { container } = render(<<%= h.changeCase.pascal(component_name) %> />);
    expect(container).toMatchSnapshot();
  });
});
