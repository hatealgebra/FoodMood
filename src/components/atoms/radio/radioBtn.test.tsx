import { screen } from "@testing-library/react";
import React from "react";

import { renderComponent } from "../../../utils/helpers/testing.helpers";
import RadioBtnGroup from "./RadioBtn";

describe("checks actual value", () => {
  test("has 4 value", () => {
    renderComponent(
      <RadioBtnGroup
        initialValue="4"
        direction="row"
        radioValues={[
          ["1", "first"],
          ["2", "second"],
          ["3", "third"],
          ["4", "fourth"],
        ]}
      />
    );
    const radios = screen.getAllByRole("radio");
    expect(radios[3]).toHaveAttribute("checked", "");
  });
});
