import { action } from "@storybook/addon-actions";
import React from "react";

import ShowMoreButton from "./ShowMoreButton";

export const ShowMoreButtonExample = (
  <ShowMoreButton
    nextLink="random link"
    dispatchAction={action("The action was dispatched!")}
  />
);

export default {
  title: "Molecules/Show More Recipes Button",
  component: ShowMoreButton,
};
