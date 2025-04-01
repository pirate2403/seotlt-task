import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './index';

const meta = {
  title: 'Loader',
  component: Loader,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ height: '400px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    isError: {
      control: { type: 'boolean' },
    },
    isDone: {
      control: { type: 'boolean' },
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Story: Story = {
  args: {
    isError: false,
    isDone: false,
  },
};
