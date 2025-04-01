import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './spinner';

const meta = {
  title: 'Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    secondary: {
      control: { type: 'boolean' },
    },
    small: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Story: Story = {
  args: {
    secondary: false,
    small: false,
  },
};
