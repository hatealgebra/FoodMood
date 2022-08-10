import { Meta, Story } from "@storybook/react";
import React from "react";
import AppSection, { AppSectionProps } from "./AppSection";

const Template: Story<AppSectionProps> = (args) => (
  <AppSection {...args}></AppSection>
);

export const GenericAppSection = Template.bind({});
GenericAppSection.args = {
  headingOne: "This is",
  headingTwo: "heading",
  children: "Lorem Ipsum",
};

export default {
  component: AppSection,
  title: "Molecules/App Section",
} as Meta;
