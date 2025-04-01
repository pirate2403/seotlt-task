import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
    errorMessage: { control: { type: 'text' } },
    withValidIndicator: { control: { type: 'boolean' } },
    withoutMessage: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Story: Story = {
  args: {
    label: 'Input',
    placeholder: 'Enter your value',
    errorMessage: '',
    withValidIndicator: false,
    withoutMessage: false,
    disabled: false,
  },
};
