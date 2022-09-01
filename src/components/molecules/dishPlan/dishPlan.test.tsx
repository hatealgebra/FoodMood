import React from "react";
import { screen } from "@testing-library/react";

import DishPlan from "./DishPlan";
import { setupIsolatedComponent } from "../../../helpers/testing.helpers";

describe("Fish soup", () => {
  beforeEach(() =>
    setupIsolatedComponent(
      <DishPlan
        dish="dinner"
        img="https://image.shutterstock.com/z/stock-photo-fried-cod-fish-filet-with-green-asparagus-and-mushrooms-as-close-up-on-a-plate-1075892291.jpg"
        mealName="Salmon with batatas"
      />
    )
  );
  test("Correct heading", () => {
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent(/dinner/i);
  });
  test("Type of dish", () => {
    const typeOfDish = screen.getByText(/salmon with batatas/i);
    expect(typeOfDish).toBeTruthy();
  });
});
