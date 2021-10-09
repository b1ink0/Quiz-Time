import React, { useContext, useEffect, useState } from "react";
import { auth, signInWithGoogle } from "../firebase";

// Creating Context
const AuthContext = React.createContext();

// Using Created Context a
export function useAuth() {
  return useContext(AuthContext);
}

// Creating Provider
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const logIn = () => {
    return signInWithGoogle();
  };
  const logOut = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        setLoading(false);
      } else setLoading(false);
    });
    return unsubscribe;
  });
  const value = {
    currentUser,
    logIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}