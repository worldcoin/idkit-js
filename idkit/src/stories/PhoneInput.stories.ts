import type { Meta, StoryObj } from '@storybook/react';
import PhoneInput from '@/components/PhoneInput';

const meta: Meta<typeof PhoneInput> = {
  title: 'PhoneInput',
  component: PhoneInput,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PhoneInput>;

export const Default: Story = {};
