import { Meta, StoryFn as Story } from '@storybook/react';

import TopPanel, { TopPanelProps } from './TopPanel';

export const MobilePanelExample = () => <TopPanel device="mobile" />;
export const DesktopPanelExample = () => <TopPanel />;

export default {
  component: TopPanel,
  title: 'Organisms/Top Panel',
  argTypes: {
    device: {
      options: ['mobile', 'tablet', 'desktop'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof TopPanel>;
