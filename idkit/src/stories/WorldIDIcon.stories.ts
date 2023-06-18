import type { Meta, StoryObj } from '@storybook/react';
import WordlIDIcon from '@/components/WorldIDIcon';

const meta: Meta<typeof WordlIDIcon> = {
  title: 'General/World ID Icon',
  component: WordlIDIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WordlIDIcon>;

export const Default: Story = {};
