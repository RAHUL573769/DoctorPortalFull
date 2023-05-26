import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../Pages/Firebase/FirebaseInit";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const provider1 = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [currentUser, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(currentUser);
  const signInGooglePopUp = () => {
    setLoading(true);
    return signInWithPopup(auth, provider1);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => unsubscribe;
  }, [auth]);
  const authInfo = {
    auth,
    currentUser,
    signInGooglePopUp,
    loading,
    createUser,
    signInWithEmail,
    logOut
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
