"use client";
import { UserInfo, getAuth, onAuthStateChanged } from "@firebase/auth";
import { useRouter } from "next/navigation";
import showToast from "~helpers/toast.helpers";
import * as routerConstants from "~constants/router.constants";
import { useState } from "react";

const useAuthChanged = () => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const auth = getAuth();
  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push(routerConstants.ROUTE_WEB.LOGIN_PAGE);
      return setUser(null);
    }

    return setUser(user);
  });
  return [user, router];
};

export default useAuthChanged;
