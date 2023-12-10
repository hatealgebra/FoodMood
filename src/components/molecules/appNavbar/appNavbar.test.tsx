import React from "react";

import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderComponent } from "../../../utils/helpers/testing.helpers";

import AppNavbar from "./AppNavbar";

describe("check the correct hover", () => {
  beforeEach(() => {
    renderComponent(<AppNavbar />);
  });

  test("home hover", () => {
    const hoverElement = screen.getByLabelText(/hover-element/i);
    const homeLink = screen.getByRole("link", { name: /home/i });
    userEvent.hover(homeLink);
    expect(hoverElement).toHaveStyle({
      width: "45px",
      left: "0px",
    });
  });

  // TODO Test the hover, it is really possible?

  // test("Search hover", async () => {
  //   const searchLink = screen.getByRole("link", { name: /search/i });
  //   const hoverElement = screen.getByLabelText(/hover-element/i);
  //   userEvent.hover(searchLink);
  //   await waitFor(() =>
  //     expect(hoverElement).toHaveStyle({
  //       width: "55px",
  //       left: "45px",
  //     })
  //   );
  // });
  // test("Saved recipes hover", () => {
  //   const hoverElement = screen.getByLabelText(/hover-element/i);
  //   const savedLink = screen.getByRole("link", { name: /saved recipes/i });
  //   userEvent.hover(savedLink);
  //   expect(hoverElement).toHaveStyle({
  //     width: "95px",
  //     left: "100px",
  //   });
  // });
  // test("meal plan hover", () => {
  //   const hoverElement = screen.getByLabelText(/hover-element/i);
  //   const planLink = screen.getByRole("link", { name: /meal plan/i });
  //   userEvent.hover(planLink);
  //   expect(hoverElement).toHaveStyle({
  //     width: "85px",
  //     left: "185px",
  //   });
  // });
});
