import React from "react";

import userEvent from "@testing-library/user-event";

import { Button } from "@chakra-ui/react";
import TabletMenu from "./TabletMenu";
import { renderComponent } from "../../../helpers/testing.helpers";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";

const TestingComponent = ({ status }: { status: boolean }) => {
  const [isOpen, setIsOpen] = React.useState(status);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open menu</Button>
      <TabletMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

describe("Tablet menu interactivity", () => {
  test("Open tablet menu", async () => {
    const { getByRole } = renderComponent(<TestingComponent status={false} />);
    await userEvent.click(getByRole("button", { name: /open menu/i }));
    expect(getByRole("dialog")).toBeInTheDocument();
  });
  test("Open tablet menu", async () => {
    const { getByLabelText, getByRole } = renderComponent(
      <TestingComponent status={true} />
    );
    await userEvent.click(getByLabelText("Close"));
    await waitForElementToBeRemoved(() => expect(getByRole("dialog")));
  });
});
