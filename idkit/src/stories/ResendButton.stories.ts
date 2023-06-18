import type { Meta, StoryObj } from '@storybook/react';
import ResendButton from '@/components/ResendButton';

const meta: Meta<typeof ResendButton> = {
  title: 'Buttons/Resend',
  component: ResendButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ResendButton>;

export const Default: Story = {};
