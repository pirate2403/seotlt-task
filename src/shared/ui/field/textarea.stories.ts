import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

const meta = {
  title: 'Textarea',
  component: Textarea,
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
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Story: Story = {
  args: {
    label: 'Textarea',
    placeholder: 'Enter your value',
    errorMessage: '',
    withValidIndicator: false,
    withoutMessage: false,
    disabled: false,
  },
};
