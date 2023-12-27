// TODO: Link multiple providers
// TODO: Email link authentication

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  deleteUser,
  signOut,
  User,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
} from "@firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteDoc, doc, setDoc } from "firebase/firestore";

import { CreateUserProps, LoginCredentials } from "~types/async.types";

import { userRef } from "~helpers/firestore.helpers";
import showToast from "~helpers/toast.helpers";
import themeDefault from "~particles/themeDefault";
import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast({ theme: themeDefault });

export const loginUser = createAsyncThunk<
  any,
  LoginCredentials,
  { rejectValue: Error }
>("user/login", async (credentials: LoginCredentials, thunkApi) => {
  const { email, psw } = credentials;
  const auth = getAuth();
  setPersistence(auth, browserLocalPersistence)
    .then(async () => {
      await signInWithEmailAndPassword(auth, email, psw);
      showToast("Logged in", "User was successfully logged in.", "success");
    })
    .catch((error) => {
      console.log(error);
      const name = "Incorrect login.";
      const message =
        "Login does not match. Either email doesn't exist or password is incorrect.";
      showToast(name, message, "error");
      return thunkApi.rejectWithValue({
        name,
        message,
      });
    });
});

// * Login google

// export const loginGoogle = createAsyncThunk<any, any, { rejectValue: Error }>(
//   "user/google",
//   async (_, thunkApi) => {
//     const auth = getAuth();
//     try {
//       const signIn = await linkWithPopup(auth, new GoogleAuthProvider());
//       return signIn;
//     } catch (e) {}
//   }
// );

export const createUser = createAsyncThunk<
  any,
  CreateUserProps,
  { rejectValue: Error }
>("user/register", async (credentials: CreateUserProps, thunkApi) => {
  const { email, psw, name } = credentials;
  try {
    const userData = await createUserWithEmailAndPassword(
      getAuth(),
      email,
      psw
    );
    await updateProfile(userData.user, {
      displayName: name,
    });
    const { currentUser } = getAuth();
    if (currentUser !== null) {
      toast({
        title: "ACCOUNT REGISTERED!",
        description:
          "Your account was sucesfully created. Please login to proceed",
        status: "success",
        position: "top",
        duration: 3500,
      });
      await setDoc(userRef(currentUser.uid), { foo: "bar" });
    }
  } catch (err: any) {
    console.log(err);
    if (err.message.match(/email-already-in-use/gi)) {
      showToast(
        "Email exists",
        "This email is already in the use, please select different email. Thank you",
        "error"
      );
      return thunkApi.rejectWithValue({
        name: "Email exists",
        message:
          "This email is already in the use, please select different email. Thank you",
      });
    } else {
      return thunkApi.rejectWithValue({
        name: "Something went wrong",
        message:
          "There was an error. Please try later. If problem persist, please, contact us",
      });
    }
  }
});

export const updateUser = createAsyncThunk<
  void,
  Partial<User>,
  { rejectValue: Error }
>("user/updateProfile", async (user, thunkApi) => {
  const { currentUser } = getAuth();
  const { displayName, photoURL } = user;
  try {
    currentUser &&
      updateProfile(currentUser, {
        displayName: displayName,
        photoURL: photoURL,
      });
  } catch (e) {
    showToast(
      "Something went wrong",
      "User couldn't be update. Try later or contact admin",
      "error"
    );
    return thunkApi.rejectWithValue({
      name: "Something went wrong.",
      message: "Message couldn't be update. Try later or contact admin.",
    });
  }
});

export const signOutUser = createAsyncThunk<
  boolean,
  null,
  { rejectValue: Error }
>("user/signOut", async (_, thunkApi) => {
  try {
    await signOut(getAuth());
    showToast(
      "Signed Out",
      "You were succesfuly signed out from the app.",
      "info"
    );
    return true;
  } catch (e) {
    showToast("Something went wrong", "Please try again later.", "error");
    return thunkApi.rejectWithValue({
      name: "Something went wrong!",
      message:
        "There was problem with signing the user out. Please try refresh.",
    });
  }
});

export const deleteUserAcc = createAsyncThunk<
  void,
  User | null,
  { rejectValue: Error }
>("user,deleteUser", async (user, thunkApi) => {
  if (user) {
    const { uid } = user;
    // const userRef = doc(dbFirestore, "users", uid);
    try {
      await deleteUser(user);
      // await deleteDoc(userRef);
    } catch (e) {
      return thunkApi.rejectWithValue({
        name: "Something went wrong",
        message:
          "User is not probably in the system. Try to refresh browser or contact admin.",
      });
    }
  } else {
    return thunkApi.rejectWithValue({
      name: "No user entity",
      message: "No current user is logged in",
    });
  }
});
