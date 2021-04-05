import React, { useEffect, useState } from "react";
import firebase from "./firebase.js";
export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);
  if (pending) {
    return (
      <div>
        <div className="header-bar-chargement" id="loadbar_conatainer">
      <div className="progress-container-chargement ">
        <div className="progress-bar-chargement " id="loadbar"></div>
      </div>
    </div>
    
    <p className="loading-text">Loading...</p>
      </div>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
