import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';

export const signinUser = async (email: string, psw: string) => {
  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, psw);
};
