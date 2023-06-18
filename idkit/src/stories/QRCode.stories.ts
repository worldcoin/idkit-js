import type { Meta, StoryObj } from '@storybook/react';
import QRCode from '@/components/QRCode';

const meta: Meta<typeof QRCode> = {
  title: 'General/QR Code',
  component: QRCode,
  tags: ['autodocs'],
  args: {
    data: "SflKxwRJSMeKKF2QT4fwpMeJf3"
  }
};

export default meta;
type Story = StoryObj<typeof QRCode>;

export const Default: Story = {};
