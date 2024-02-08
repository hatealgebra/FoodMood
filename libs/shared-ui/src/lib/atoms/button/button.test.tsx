import React from 'react';

import { Button } from '@chakra-ui/react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SaveButton from './SaveButton';

// TODO: Import stories for testingo

describe('Button state', () => {
  test('Button is loading?', () => {
    renderComponent(<Button isLoading>Button is loading</Button>);
    const isLoadingText = screen.getByText(/is loading/i);
    expect(isLoadingText).toBeTruthy();
  });
  test('Save button is saved', () => {
    const mockFn = jest.fn();
    renderComponent(
      <SaveButton savedStatus={false} onClick={mockFn}>
        Save
      </SaveButton>
    );
    const saveButton = screen.getByRole('button');
    userEvent.click(saveButton);
    const btnByLabel = screen.getByLabelText('Saved');
    expect(btnByLabel).toBeTruthy();
    expect(mockFn).toHaveBeenCalled();
  });
});
