import { ReactNode } from 'react';

export const SetUserData: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  //   const dispatch = useAppDispatch();

  //   useEffect(() => {
  //     try {
  //       setUser(dispatch);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }, [dispatch]);

  return <p>{children}</p>;
};
