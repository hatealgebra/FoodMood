import { Dispatch } from "redux";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { DocumentData, onSnapshot } from "firebase/firestore";
import { readSavedRecipes } from "../store/thunks/firestoreCRUD.thunk";
import { savedRecipesRef } from "./firestore.helpers";
import { AppDispatch } from "../store/store";
import { createUser, loginUser } from "../store/thunks/authentication.thunks";

export const firebaseRTU = async (dispatch: Dispatch<any>) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => user);
  const { uid } = auth.currentUser || ({} as User);
  try {
    if (uid) {
      onSnapshot(savedRecipesRef(uid), (snapshot) => {
        const recipes: DocumentData[] = [];
        snapshot.forEach((doc) => {
          const data: DocumentData = doc.data();
          recipes.push(data);
        });
        dispatch(readSavedRecipes(recipes));
      });
    }
  } catch (e) {
    throw e;
  }
};

const credentialsLogin = {
  email: "pavelvondra66@gmail.com",
  psw: "Hellothere2",
};
const credentialsCreate = { ...credentialsLogin, name: "Pavel Vondra" };

export const setUser = async (dispatch: AppDispatch): Promise<void> => {
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
