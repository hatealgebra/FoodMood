import React from "react";

import { renderComponent } from "../../../helpers/testing.helpers";
import ShowMoreButton from "./ShowMoreButton";
import userEvent from "@testing-library/user-event";

//  TODO: Test dispatch
describe("Functionality of the show more button", () => {
  const mockFn = jest.fn();
  const { getByRole } = renderComponent(
    <ShowMoreButton nextLink="random href" dispatchAction={mockFn} />
  );

  userEvent.click(getByRole("button"));
});
