import { useAppDispatch } from 'data-access-app-redux';
import { ReactNode, useEffect } from 'react';

export const UserDataProvider: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  return <p>{children}</p>;
};
