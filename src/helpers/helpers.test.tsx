import React from "react";

import { Heading, Text } from "@chakra-ui/react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import store from "../store/store";
import { showError, showSuccess } from "./message.helpers";
import { renderComponent } from "./testing.helpers";

const mockError = {
  name: "Error name",
  message: "Description of mock error.",
};

const MockComponent = ({
  toastFunction,
}: {
  toastFunction: (error: Error) => Promise<void>;
}) => {
  const callToast = async () => await toastFunction(mockError);

  return (
    <>
      <Heading as="h2">Hello world</Heading>
      <Text>{store && "Store is here."}</Text>
      <button onClick={() => callToast()}>Click me</button>
    </>
  );
};

// TODO: Jest somehow shows already for toasts there, it is a beahviour of toast from Chakra-UI

// describe("Message helpers", () => {
//   test("Error msg", async () => {
//     const { getByRole } = renderComponent(
//       <MockComponent toastFunction={showError} />
//     );
//     await waitFor(() =>
//       document.getElementById("chakra-toast-portal")?.remove()
//     );
//     userEvent.click(getByRole("button"));
//     expect(getByRole("portal"));
//     screen.debug();
//   });
//   test("Success msg", async () => {
//     const success = await showSuccess(
//       "Success title",
//       "Description of succes msg"
//     );
//     expect(success).toBe(2);
//   });
// });

describe("Testing helpers/renderComponent", () => {
  beforeEach(() =>
    renderComponent(<MockComponent toastFunction={showError} />)
  );
  test("correct component", () => {
    const heading = screen.getByRole("heading", { name: "Hello world" });
    expect(heading).toBeInTheDocument();
  });
  test("store provided", () => {
    const storeText = screen.getByText(/store is here/i);
    expect(storeText).toBeInTheDocument();
  });
});

// ? How to test setUserData?
// describe("Testing helpers/setUser", () => {
//   test("Login user", async () => {
//     //  const auth = getAuth();
//     render(
//       <Provider store={store}>
//         <SetUserData>
//           <Heading>
//             {/* {auth.currentUser
//               ? auth.currentUser.displayName
//               : "No username to display."} */}
//           </Heading>
//         </SetUserData>
//       </Provider>
//     );
//   });
// });

// ? test database connection
