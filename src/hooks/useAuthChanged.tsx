"use client";
import { UserInfo, getAuth, onAuthStateChanged } from "@firebase/auth";
import { useRouter } from "next/navigation";
import * as routerConstants from "~constants/router.constants";
import { useState } from "react";

const useAuthChanged = () => {
  const [user, setUser] = useState<UserInfo | null | undefined>(undefined);
  const auth = getAuth();
  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  return { user, router, isAuthenticating: user === undefined };
};

export default useAuthChanged;
