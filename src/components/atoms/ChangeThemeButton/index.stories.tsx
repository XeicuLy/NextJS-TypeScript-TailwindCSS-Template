import type { Meta, StoryObj } from '@storybook/react';
import { ChangeThemeButton } from '.';

const meta = {
  title: 'components/atoms/ChengeThemeButton',
  component: ChangeThemeButton,
  parameters: {},
  args: {},
} satisfies Meta<typeof ChangeThemeButton>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    primary: true,
  },
};
