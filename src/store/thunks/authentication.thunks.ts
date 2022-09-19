// TODO: Link multiple providers
// TODO: Email link authentication

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  updateProfile,
  deleteUser,
  signOut,
  User,
} from "@firebase/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteDoc, doc, setDoc } from "firebase/firestore";

import themeDefault from "../../@chakra-ui/gatsby-plugin/theme";
import { dbFirestore } from "../../services/firebase/configFirebase";
import { CreateUserProps, LoginCredentials } from "../../types/async.types";

import * as myConstClass from "../../utils/constants/router.constants";
import { userRef } from "../../helpers/firestore.helpers";
import { showError, showSuccess } from "../../helpers/message.helpers";
import { navigate } from "gatsby";

export const loginUser = createAsyncThunk<
  any,
  LoginCredentials,
  { rejectValue: Error }
>("user/login", async (credentials: LoginCredentials, thunkApi) => {
  const { email, pwd } = credentials;
  try {
    setPersistence(getAuth(), browserSessionPersistence);
    await signInWithEmailAndPassword(getAuth(), email, pwd);
    showSuccess("Logged in", "User was successfully logged in.");
    return navigate("/app/home");
  } catch (e) {
    console.log(e);
    const name = "Incorrect login.";
    const message =
      "Login does not match. Either email doesn't exist or password is incorrect.";
    showError({ name, message });
    return thunkApi.rejectWithValue({
      name,
      message,
    });
  }
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
  const { email, pwd, name } = credentials;
  try {
    const userData = await createUserWithEmailAndPassword(
      getAuth(),
      email,
      pwd
    );
    console.log(userData);
    await updateProfile(userData.user, {
      displayName: name,
    });
    const { currentUser } = getAuth();
    if (currentUser !== null) {
      await setDoc(userRef(currentUser.uid), { foo: "bar" });
      toast({
        title: "ACCOUNT REGISTERED!",
        description:
          "Your account was sucesfully created. Please login to proceed",
        status: "success",
        position: "top",
        duration: 3500,
      });
      return navigate("/login");
    }
  } catch (err: any) {
    if (err.message.match(/already/gi)) {
      console.log(err.message);
      const error = {
        name: "Email exists",
        message:
          "This email is already in the use, please select different email. Thank you.",
      };
      showError(error);
      return thunkApi.rejectWithValue(error);
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
    toast({ title: "Something went wrong" });
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
    toast({
      title: "Signed Out",
      description: "You were succesfuly signed out from the app.",
      status: "success",
      position: "top",
    });
    return navigate("/");
  } catch (e) {
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
    const userRef = doc(dbFirestore, "users", uid);
    try {
      await deleteUser(user);
      await deleteDoc(userRef);
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
