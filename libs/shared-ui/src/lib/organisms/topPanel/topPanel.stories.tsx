import { Meta } from '@storybook/react';

import TopPanel from './TopPanel';

export const MobilePanelExample = () => <TopPanel device="mobile" />;
MobilePanelExample.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};

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
