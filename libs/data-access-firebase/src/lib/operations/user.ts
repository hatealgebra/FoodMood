import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from '@firebase/auth';
import { userRef } from '../references';

export const createUser = async (email: string, psw: string, name: string) => {
  const userData = await createUserWithEmailAndPassword(getAuth(), email, psw);

  if (name) {
    await updateProfile(userData.user, {
      displayName: name,
    });
  }

  return userData;
};

export const deleteUser = async (uid: string) => {
  const user = userRef(uid);
  return await deleteUser(user);
};
