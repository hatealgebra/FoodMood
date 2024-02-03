import { Heading } from "@chakra-ui/react";
import { screen } from "@testing-library/react";
import React from "react";
import { renderComponent } from "../../../helpers/testing.helpers";
import { FiraHeadings, Headings } from "./heading.stories";

describe("Rendering correct level of headings", () => {
  test("it is heading", () => {
    renderComponent(<Heading as="h1">This is heading 1</Heading>);
    expect(screen.getByRole("heading")).toHaveTextContent(/heading 1/);
  });
});

describe("correct font family rendering", () => {
  test("if heading has PlayFair Display family", () => {
    renderComponent(<Headings />);

    const headings = screen.getAllByRole("heading");
    headings.map((heading) =>
      expect(heading).toHaveStyle({
        "font-family": "var(--chakra-fonts-heading)",
      })
    );
  });

  test("if heading has Fira family", () => {
    renderComponent(<FiraHeadings />);

    const headings = screen.getAllByRole("heading");
    headings.map((heading) =>
      expect(heading).toHaveStyle({ "font-family": "var(--chakra-fonts-body)" })
    );
  });
});
