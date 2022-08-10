import {
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { renderComponent } from "../../../utils/helpers/testing.helpers";
import AlertDelete from "./AlertDelete";

const textBtn = "Dialog delete";
let action: jest.Mock;

describe("Alert delete dialog flow", () => {
  beforeEach(() => {
    action = jest.fn();
    renderComponent(
      <AlertDelete
        heading="Alert dialog heading"
        button={textBtn}
        action={action}
      >
        Description text
      </AlertDelete>
    );
  });
  test("Open dialog", async () => {
    const btn = screen.getByRole("button", { name: textBtn });
    userEvent.click(btn);
    const alertDialog = await screen.findByRole("alertdialog");
    await waitFor(() => expect(alertDialog).toBeInTheDocument());
  });
  test("Call delete function", async () => {
    const openBtn = screen.getByRole("button", { name: textBtn });
    userEvent.click(openBtn);
    const alertDialog = await screen.findByRole("alertdialog");
    const deleteBtn = await screen.findByRole("button", { name: "Delete" });
    userEvent.click(deleteBtn);
    expect(action).toHaveBeenCalled();
    await waitForElementToBeRemoved(() => screen.getByRole("alertdialog"));
    expect(alertDialog).not.toBeInTheDocument();
  });
});
