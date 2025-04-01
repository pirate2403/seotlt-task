import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './typography';
import { TYPOGRAPHY_KIND, TYPOGRAPHY_SIZE, TYPOGRAPHY_TAG, TYPOGRAPHY_WEIGHT } from './constants';

const meta = {
  title: 'Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    kind: {
      control: { type: 'inline-radio' },
      options: Object.values(TYPOGRAPHY_KIND),
    },
    tag: {
      control: { type: 'inline-radio' },
      options: Object.values(TYPOGRAPHY_TAG),
    },
    size: {
      control: { type: 'inline-radio' },
      options: Object.values(TYPOGRAPHY_SIZE),
    },
    weight: {
      control: { type: 'inline-radio' },
      options: Object.values(TYPOGRAPHY_WEIGHT),
    },
    className: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Story: Story = {
  args: {
    tag: TYPOGRAPHY_TAG.SPAN,
    kind: TYPOGRAPHY_KIND.PRIMARY,
    size: TYPOGRAPHY_SIZE.LG,
    weight: TYPOGRAPHY_WEIGHT.BOLD,
    children: 'Typography',
  },
};
