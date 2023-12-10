import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import React from "react";
import AlertDelete, { AlertDeleteProps } from "./AlertDelete";

const Template: Story<AlertDeleteProps> = (args) => <AlertDelete {...args} />;

export const Alert = Template.bind({});
Alert.args = {
  action: action("Delete action was runned."),
  heading: "Alert delete heading",
  button: "Delete action",
  children: "Description of the action.",
};

export default {
  component: AlertDelete,
  title: "Molecules/Alert Delete",
} as Meta;
