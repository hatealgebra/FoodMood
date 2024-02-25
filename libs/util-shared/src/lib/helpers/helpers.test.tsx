import React from 'react';

import { Heading, Text } from '@chakra-ui/react';
import { render, screen, waitFor } from '@testing-library/react';
import { getAuth } from 'firebase/auth';
import store from '../../store/store';
import {
  showError,
  showSuccess,
} from '../../../../feature-app/src/lib/helpers/toast.helpers';
import { renderComponent } from './testing.helpers';
import { SetUserData } from '../../../../feature-app/src/lib/helpers/storybook.helpers';
import { Provider } from 'react-redux';

const mockError = {
  name: 'Error name',
  message: 'Description of mock error.',
};

const MockComponent = () => {
  return (
    <>
      <Heading as="h2">Hello world</Heading>
      <Text>{store && 'Store is here.'}</Text>
    </>
  );
};
describe('Message helpers', () => {
  test('Error msg', async () => {
    const error = await showError(mockError);
    expect(error).toBe(1);
  });
  test('Success msg', async () => {
    const success = await showSuccess(
      'Success title',
      'Description of succes msg',
    );
    expect(success).toBe(2);
  });
});

describe('Testing helpers/renderComponent', () => {
  beforeEach(() => renderComponent(<MockComponent />));
  test('correct component', () => {
    const heading = screen.getByRole('heading', { name: 'Hello world' });
    expect(heading).toBeInTheDocument();
  });
  test('store provided', () => {
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
