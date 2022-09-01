import React from "react";

import { Text } from "@chakra-ui/react";
import { setupIsolatedComponent } from "../../../helpers/testing.helpers";
import AppSection from "./AppSection";
import { getByRole, screen } from "@testing-library/react";

describe("correct rendering of the props", () => {
  beforeEach(() =>
    setupIsolatedComponent(
      <AppSection headingOne="first part" headingTwo="second part">
        <Text>Some text</Text>
      </AppSection>
    )
  );
  test("heading text", () => {
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent(/first partsecond part/i);
  });
  test("children content", () => {
    const paragraph = screen.getByText(/some text/i);
    expect(paragraph).toBeInTheDocument();
  });
});
