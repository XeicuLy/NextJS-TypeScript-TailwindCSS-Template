---
to: app/<%= component_name %>/<%= h.changeCase.pascal(component_name) %>Container.test.tsx
---

import { render } from '@testing-library/react';

import { <%= h.changeCase.pascal(component_name) %>Container } from './<%= h.changeCase.pascal(component_name) %>Container';

describe('app/<%= component_name %>', () => {
  it('renders correctly', () => {
    const { container } = render(<<%= h.changeCase.pascal(component_name) %>Container />);
    expect(container).toMatchSnapshot();
  });
});
