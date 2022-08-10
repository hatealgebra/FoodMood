import React from "react";
import { Story } from "@storybook/react";
import { Link as GatsbyLink } from "gatsby";
import { Link } from "@chakra-ui/react";

const Template: Story<any> = (args) => <Link as={GatsbyLink} {...args} />;
export const GenericLink = Template.bind({});
GenericLink.args = {
  variant: "button",
  children: "Text",
  to: "#",
};

export const AllVariants = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
    <Link as={GatsbyLink} variant="button" to="#">
      Button
    </Link>

    <Link as={GatsbyLink} variant="classic" to="#">
      Classic
    </Link>
    <Link as={GatsbyLink} variant="appNav" to="#">
      App Navigation
    </Link>
  </div>
);

export default {
  component: Link,
  title: "Atoms/Link",
};
