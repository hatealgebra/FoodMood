import { screen } from '@testing-library/react';
import React from 'react';
import { renderComponent } from '../../../utils/helpers/testing.helpers';
import FormContainer from './FormContainer';

describe('test if container is responsive', () => {
  function getFormContainer(width: number) {
    global.innerWidth = width;
    global.dispatchEvent(new Event('resize'));
    renderComponent(<FormContainer>Hey</FormContainer>);
  }

  test('show mobile version', () => {
    getFormContainer(300);
    const formContainer = screen.getByLabelText('form-container');
    expect(formContainer).toHaveStyle('flex-direction: column');
  });

  //   TODO How to test chakra UI components responnsive styles, global window?
  //   test("show desktop version", () => {
  //     getFormContainer(900);
  //     const formContainer = screen.getByLabelText("form-container");
  //     expect(formContainer).toHaveStyle("flex-direction: row");
  //   });
});
