import { render } from '@testing-library/react';

import DataAccessAppRedux from './data-access-app-redux';

describe('DataAccessAppRedux', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataAccessAppRedux />);
    expect(baseElement).toBeTruthy();
  });
});
