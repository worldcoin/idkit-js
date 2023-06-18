import type { Meta, StoryObj } from '@storybook/react';
import SignInButton from '@/components/SignInButton';

const meta: Meta<typeof SignInButton> = {
  title: 'Buttons/Sign In',
  component: SignInButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SignInButton>;

export const Default: Story = {};
