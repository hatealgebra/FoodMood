import React from "react";

import { Button } from "@chakra-ui/react";
import userEvent from "@testing-library/user-event";

import { renderComponent } from "../../../helpers/testing.helpers";
import ModalContact from "./ModalContact";
import { waitFor, waitForElementToBeRemoved } from "@testing-library/react";

const TestingComponent = ({ status }: { status: boolean }) => {
  const [isOpen, setIsOpen] = React.useState(status);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}></Button>
      <ModalContact
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

describe("Modal contact", () => {
  test("Open modal contact", async () => {
    const { getByRole } = renderComponent(<TestingComponent status={false} />);
    await userEvent.click(getByRole("button"));
    expect(getByRole("dialog")).toBeInTheDocument();
  });

  test("Close modal contact", async () => {
    const { getByRole, getByLabelText } = renderComponent(
      <TestingComponent status={true} />
    );
    await userEvent.click(getByLabelText("Close"));
    await waitForElementToBeRemoved(getByRole("dialog"));
  });
});
