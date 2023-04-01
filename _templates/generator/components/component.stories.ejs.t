---
to: src/components/<%= atomic %>/<%= h.changeCase.pascal(component_name) %>/index.stories.tsx
---

import type { Meta, StoryObj } from '@storybook/react';
import { <%= h.changeCase.pascal(component_name) %> } from '.';

const meta = {
  title: 'components/<%= atomic %>/<%= h.changeCase.pascal(component_name) %>',
  component: <%= h.changeCase.pascal(component_name) %>,
  parameters: {},
  args: {},
} satisfies Meta<typeof <%= h.changeCase.pascal(component_name) %>>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    primary: true,
  },
};
