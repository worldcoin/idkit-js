import type { Meta, StoryObj } from '@storybook/react';
import SignInWithWorldID from '@/components/SignInWithWorldID';

const meta: Meta<typeof SignInWithWorldID> = {
  title: 'Buttons/Sign In With World ID',
  component: SignInWithWorldID,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SignInWithWorldID>;

export const Default: Story = {};
