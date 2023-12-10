import { screen } from "@testing-library/react";
import React from "react";
import { renderComponent } from "../../../utils/helpers/testing.helpers";
import GenericPage from "./GenericPage";

describe("test if header and footer are rendered", () => {
  // mobile version, the label on the btn cannot be found
  beforeEach(() => renderComponent(<GenericPage>Hello World</GenericPage>));

  // TODO How to check icon rendering based on the device width

  // test("has header", () => {
  //   expect(screen.getByLabelText("mobile-menu-icon")).toBeTruthy();
  // });

  test("has footer", () => {
    expect(screen.getAllByLabelText("social-link")[0]).toBeTruthy();
  });
});
