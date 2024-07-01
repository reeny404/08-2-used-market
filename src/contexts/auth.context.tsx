"use client";

import { User } from "@supabase/supabase-js";
import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { supabase } from "./supabase.context";

type AuthContextValue = { isInitialized: boolean; isLoggedIn: boolean; user: User | null };

const initialValue: AuthContextValue = {
  isInitialized: false,
  isLoggedIn: false,
  user: null,
};

const AuthContext = createContext<AuthContextValue>(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const [user, setUser] = useState<AuthContextValue["user"]>(null);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      setUser(session?.user || null);
      if (event === "INITIAL_SESSION") {
      } else if (event === "SIGNED_IN") {
        setUser(session!.user);
      } else if (event === "SIGNED_OUT") {
        setUser(null);
      } else if (event === "USER_UPDATED") {
        setUser(session!.user);
      }
      setIsInitialized(true);
    });
  }, []);

  const value = { isInitialized, isLoggedIn: Boolean(user), user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
