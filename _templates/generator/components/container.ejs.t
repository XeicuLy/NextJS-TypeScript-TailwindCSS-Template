---
to: app/<%= component_name %>/<%= h.changeCase.pascal(component_name) %>Container.tsx
---

'use client';

import { <%= h.changeCase.pascal(component_name) %>Presenter } from './<%= h.changeCase.pascal(component_name) %>Presenter';

export const <%= h.changeCase.pascal(component_name) %>Container = () => {
  return <<%= h.changeCase.pascal(component_name) %>Presenter />;
};
