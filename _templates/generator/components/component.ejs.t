---
to: src/components/<%= atomic %>/<%= h.changeCase.pascal(component_name) %>/index.tsx
---

import { FC } from 'react';

export const <%= h.changeCase.pascal(component_name) %>: FC = () => {
  return (
    <>
      <h1><%= h.changeCase.pascal(component_name) %></h1>
    </>
  );
};
