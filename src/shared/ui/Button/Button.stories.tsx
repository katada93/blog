import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';

const meta = {
  title: 'ui/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Clear: Story = {
  args: {
    children: 'Button',
    theme: 'clear',
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    theme: 'outline',
  },
};
