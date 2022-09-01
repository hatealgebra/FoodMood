import React from "react";
import { setupIsolatedComponent } from "../../../helpers/testing.helpers";
import { AllVariants } from "./link.stories";

test("test link", () => {
  setupIsolatedComponent(<AllVariants />);
});
