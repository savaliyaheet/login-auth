import React, { useState, useEffect } from "react";

const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("token");
    const userdata = localStorage.getItem("user");
    console.log(data);
    if (data) {
      setToken(data);
    }
    if (userdata) {
      setUser(userdata);
    }
  });

  const login = (receviedToken) => {
    localStorage.setItem("token", receviedToken);
    setToken(receviedToken);
  };

  const logout = () => {
    localStorage.clear("token");
    setToken(null);
  };

  const userAdd = (newUser) => {
    setUser(newUser);
  };

  return (
    <AuthContext.Provider value={{ login, token, logout, user, userAdd }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
