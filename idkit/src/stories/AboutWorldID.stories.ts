import type { Meta, StoryObj } from '@storybook/react';
import AboutWorldID from '@/components/AboutWorldID';

const meta: Meta<typeof AboutWorldID> = {
  title: 'General/About World ID',
  component: AboutWorldID,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutWorldID>;

export const Default: Story = {};
