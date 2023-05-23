import React, { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../Pages/Firebase/FirebaseInit";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const provider1 = new GoogleAuthProvider();
  const auth = getAuth(app);

  const signInGooglePopUp = () => {
    return signInWithPopup(auth, provider1);
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = { auth, signInGooglePopUp, createUser, signInWithEmail };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
