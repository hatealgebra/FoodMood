import { ChakraProvider } from '@chakra-ui/react';

import { Provider } from 'react-redux';

import { firebaseRTU } from './firebase.helpers';
import { createRoot } from 'react-dom/client';
import { theme } from 'ui-shared';

const WrapperComponent = ({ children }: any) => {
  return (
    <Provider store={store}>
      {/* <MemoryRouter> */}
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
      {/* </MemoryRouter> */}
    </Provider>
  );
};

export const renderComponent = (component: any) => {
  const container = document.body.appendChild(document.createElement('div'));

  const componentToRender = createRoot(container).render(
    <WrapperComponent>{component}</WrapperComponent>
  );
  return componentToRender;
};

const credentialsLogin = {
  email: 'pavelvondra66@gmail.com',
  psw: 'Hellothere2',
};
const credentialsCreate = { ...credentialsLogin, name: 'Pavel Vondra' };

export const setUser = async (dispatch: AppDispatch): Promise<void> => {
  console.log('first step');
  try {
    const loginRes = await dispatch(loginUser(credentialsLogin));

    if (loginRes.type === 'user/login/rejected') {
      await dispatch(createUser(credentialsCreate));
      return setUser(dispatch);
    } else {
      return firebaseRTU(dispatch);
    }
  } catch (e) {
    console.log(e);
  }
};
