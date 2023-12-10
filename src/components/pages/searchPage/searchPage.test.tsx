import React from "react";

import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderComponent } from "../../../utils/helpers/testing.helpers";
import { server } from "../../../mocks/server";

import SearchPage from "./SearchPage";

beforeAll(() => server.listen());
beforeEach(() => {
  renderComponent(<SearchPage />);
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Input testing", () => {
  test("input change", async () => {
    const phrase = screen.getByText(/please type something to search/gi);
    expect(phrase).toBeInTheDocument();
    const input = screen.getByRole("textbox");
    userEvent.type(input, "chicken");
    await waitFor(() => expect(input).toHaveValue("chicken"));
  });
  test("Submit reset", async () => {
    const input = screen.getByRole("textbox");
    const submitBtn = screen.getByLabelText("input-button");
    userEvent.type(input, "some text");
    userEvent.click(submitBtn);
    await waitFor(() => expect(input).toHaveValue(""));
  });
});
