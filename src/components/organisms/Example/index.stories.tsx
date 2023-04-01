import type { Meta, StoryObj } from '@storybook/react';
import { Example } from '.';

const meta = {
  title: 'components/organisms/Example',
  component: Example,
  parameters: {},
  args: {},
} satisfies Meta<typeof Example>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    primary: true,
  },
};
