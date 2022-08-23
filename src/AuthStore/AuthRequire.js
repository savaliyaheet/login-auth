import AuthContext from "./AuthProvider";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const AuthRequire = ({ children }) => {
  const auth = useContext(AuthContext);
  const data = localStorage.getItem("token");
  if (!data) {
    alert("Please login first");
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AuthRequire;
