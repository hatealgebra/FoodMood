import { server } from "../../../mocks/server";
import { screen } from "@testing-library/react";
import mockLocalStorage from "../../../mocks/data/localStorage.mock.json";

import { renderComponent } from "../../../utils/helpers/testing.helpers";
import AppHomepage from "./AppHomepage";

// TODO How to test components that renders and then render on their own as part of the process (Data fetching etc....)

test("Just blank test", () => {});

// beforeAll(() => {
//   server.listen();
//   localStorage.setItem("user", JSON.stringify(mockLocalStorage));
// });
// beforeEach(async () => {
//   renderComponent(<AppHomepage />);
//   expect(await screen.findAllByLabelText("recipe-card")).toBeTruthy();
// });
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

// // TODO ON start chaning state with the starting render
// describe("DailyRecipes testing", () => {
//   test("Show recipe after loading", async () => {
//     const loadingSkeletons = await screen.findAllByLabelText(
//       "loading-recipe-card"
//     );
//     expect(loadingSkeletons).toBeTruthy();
//   });
// });
