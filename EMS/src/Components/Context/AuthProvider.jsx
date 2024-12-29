import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../Utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState({ employees: [], admin: [] });


  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    if (employees && admin) {
      setuserData({ employees, admin });
    }
  }, []);
  

  return (
    <AuthContext.Provider value={[userData, setuserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
