---
to: components/<%= component_type %>/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.tsx
---

import { FC } from 'react';

export const <%= h.changeCase.pascal(component_name) %>: FC = () => {
  return (
    <>
      <h1><%= h.changeCase.pascal(component_name) %></h1>
    </>
  );
};
