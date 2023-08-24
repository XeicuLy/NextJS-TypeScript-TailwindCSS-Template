---
to: app/<%= component_name %>/<%= h.changeCase.pascal(component_name) %>Presenter.test.tsx
---

import { render } from '@testing-library/react';

import { <%= h.changeCase.pascal(component_name) %>Presenter } from './<%= h.changeCase.pascal(component_name) %>Presenter';

describe('app/<%= component_name %>', () => {
  it('renders correctly', () => {
    const { container } = render(<<%= h.changeCase.pascal(component_name) %>Presenter />);
    expect(container).toMatchSnapshot();
  });
});
