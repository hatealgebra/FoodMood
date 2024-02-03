import { screen } from "@testing-library/react";
import React from "react";
import { renderComponent } from "../../../helpers/testing.helpers";
import AlertBox from "./AlertBox";

describe("Checking alert variants", () => {
  const getAlertDialog = () => screen.getByLabelText("alert-box");

  test("Info variant rendered", () => {
    renderComponent(<AlertBox status="info">The recipe is low carb</AlertBox>);
    expect(getAlertDialog()).toHaveStyle("background-color: #bee3f8");
  });

  test("Warning variant rendered", () => {
    renderComponent(
      <AlertBox status="warning">The recipe will be deleted</AlertBox>
    );
    expect(getAlertDialog()).toHaveStyle("background-color: #FEEBC8");
  });

  test("Success variant rendered", () => {
    renderComponent(
      <AlertBox status="success">The recipes was saved</AlertBox>
    );
    expect(getAlertDialog()).toHaveStyle("background-color: #C6F6D5");
  });

  test("Error variant rendered", () => {
    renderComponent(
      <AlertBox status="error">The recipe was not saved</AlertBox>
    );
    expect(getAlertDialog()).toHaveStyle("background-color:#FED7D7");
  });
});
