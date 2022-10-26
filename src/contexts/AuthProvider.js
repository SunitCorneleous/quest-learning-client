import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { useEffect } from "react";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, currentUser => {
        setLoading(false);
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
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google
  const signInUserWithGoogle = provider => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // sign in with github
  const signInUserWithGithub = provider => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // add user name and image
  const updateUserProfile = userProfile => {
    return updateProfile(auth.currentUser, userProfile);
  };

  // logout
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    updateUserProfile,
    logOut,
    signInUserWithGoogle,
    signInUserWithGithub,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
