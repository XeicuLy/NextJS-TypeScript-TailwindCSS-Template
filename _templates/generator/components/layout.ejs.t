---
to: app/<%= component_name %>/layout.tsx
---

import { FC } from 'react';

export const <%= component_name %>: FC = () => {
  return (
    <>
      <h1><%= component_name %></h1>
    </>
  );
};
