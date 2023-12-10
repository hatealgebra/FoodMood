import { render } from "@testing-library/react";

import { ChakraProvider } from "@chakra-ui/react";
import themeDefault from "../components/particles/themeDefault";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { AppDispatch } from "../../store/store";
import {
  createUser,
  loginUser,
} from "../../store/thunks/authentication.thunks";
import { firebaseRTU } from "./firebase.helpers";

export const renderComponent = (component: any) => {
  return render(
    <Provider store={store}>
      <MemoryRouter>
        <ChakraProvider theme={themeDefault}>{component})</ChakraProvider>
      </MemoryRouter>
    </Provider>
  );
};

const credentialsLogin = {
  email: "pavelvondra66@gmail.com",
  psw: "Hellothere2",
};
const credentialsCreate = { ...credentialsLogin, name: "Pavel Vondra" };

export const setUser = async (dispatch: AppDispatch): Promise<void> => {
  console.log("first step");
  try {
    const loginRes = await dispatch(loginUser(credentialsLogin));

    if (loginRes.type === "user/login/rejected") {
      await dispatch(createUser(credentialsCreate));
      return setUser(dispatch);
    } else {
      return firebaseRTU(dispatch);
    }
  } catch (e) {
    console.log(e);
  }
};
