import { useState } from 'react';

import Dropdown from './Dropdown';

export const RadioSortBy = () => {
  const [sortBy, setSortBy] = useState('default');

  return (
    <Dropdown
      sortBy={sortBy}
      setSortBy={(e: any) => setSortBy(e)}
      buttonText="Sort by"
      sort
    />
  );
};

export default {
  component: Dropdown,
  title: 'Molecules/Dropdown',
};
