import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { BUTTON_ICON_POSITION, BUTTON_KIND, BUTTON_SIZE } from './constants';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    kind: {
      control: { type: 'inline-radio' },
      options: Object.values(BUTTON_KIND),
    },
    size: {
      control: { type: 'inline-radio' },
      options: Object.values(BUTTON_SIZE),
    },
    iconPosition: {
      control: { type: 'inline-radio' },
      options: Object.values(BUTTON_ICON_POSITION),
    },
    fullWidth: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    icon: { control: { type: 'text' } },
    children: { table: { disable: true } },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Story: Story = {
  args: {
    kind: BUTTON_KIND.PRIMARY,
    size: BUTTON_SIZE.LG,
    iconPosition: BUTTON_ICON_POSITION.PREV,
    disabled: false,
    fullWidth: false,
    children: 'Button',
    icon: '',
  },
};
