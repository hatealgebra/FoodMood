import { Dispatch } from "redux";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { DocumentData, onSnapshot } from "firebase/firestore";
import { readSavedRecipes } from "../../store/thunks/firestoreCRUD.thunk";
import { savedRecipesRef } from "./firestore.helpers";

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
