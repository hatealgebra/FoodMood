"use client";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useRouter } from "next/navigation";
import showToast from "~helpers/toast.helpers";
import * as routerConstants from "~constants/router.constants";
import { useState } from "react";

const useAuthChanged = () => {
  const [isLogged, setIsLogged] = useState(false);
  const auth = getAuth();
  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push(routerConstants.ROUTE_WEB.LOGIN_PAGE);
      return setIsLogged(false);
    }

    return setIsLogged(true);
  });
  return isLogged;
};

export default useAuthChanged;
