import { Story } from "@storybook/react";
import React from "react";

import TopPanel, { TopPanelProps } from "./TopPanel";

const Template: Story<TopPanelProps> = (args) => <TopPanel {...args} />;

export const TopPanelExample = Template.bind({});
TopPanelExample.args = {
  device: "mobile",
};

export const DesktopPanelExample = () => <TopPanel device="desktop" />;

export default {
  component: TopPanel,
  title: "Organisms/Top Panel",
  argTypes: {
    device: {
      options: ["mobile", "tablet", "desktop"],
      control: { type: "radio" },
    },
  },
};
