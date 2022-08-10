import { Story } from "@storybook/react";
import React from "react";

import UserAvatar, { UserAvatarProps } from "./UserAvatar";

const Template: Story<UserAvatarProps> = (args) => <UserAvatar {...args} />;

export const GenericAvatar = Template.bind({});
GenericAvatar.args = {
  name: "Pavel Vondra",
  status: "idle",
};

export default {
  component: UserAvatar,
  title: "Molecules/User Avatar",
};
