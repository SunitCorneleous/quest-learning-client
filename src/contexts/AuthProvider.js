import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
      });
    };

    return () => unsubscribe();
  }, []);

  // create user with email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user sign in
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // add user name and image
  const updateUserProfile = userProfile => {
    return updateProfile(auth.currentUser, userProfile);
  };

  // logout
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = { user, createUser, signInUser, updateUserProfile, logOut };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
