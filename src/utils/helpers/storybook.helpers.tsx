import { getAuth } from "firebase/auth";
import React, { ReactNode, useEffect } from "react";
// import ModalRecipe from "../../components/organisms/modalRecipe/ModalRecipe";
import { useAppDispatch } from "../../store/hooks";
import { setUser } from "./testing.helpers";

export const SetUserData: React.FC<{
  children: ReactNode;
}> = ({ children }) => {
  const dispatch = useAppDispatch();
  const auth = getAuth();
  console.log(auth);

  useEffect(() => {
    try {
      if (auth === null) {
        setUser(dispatch);
      }
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  return <>{children}</>;
};
