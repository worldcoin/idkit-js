import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/components/Button';

const meta: Meta<typeof Button> = {
  title: 'Buttons/Basic',
  component: Button,
  tags: ['autodocs'],
  args: {
    value: "Next"
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args) => <Button>{args.value}</Button>
};
