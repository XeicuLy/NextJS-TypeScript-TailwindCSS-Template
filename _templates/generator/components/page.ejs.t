---
to: app/<%= component_name %>/page.tsx
---

import { FC } from 'react';

export const <%= component_name %>: FC = () => {
  return (
    <>
      <h1><%= component_name %></h1>
    </>
  );
};
