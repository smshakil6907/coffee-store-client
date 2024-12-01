import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userInfo = {
    user,
    loading,
    createUser,
  };
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
}
