import React, { useContext, useEffect } from "react";
import jwtDecode from "jwt-decode";
import AuthContext from "../AuthStore/AuthProvider";
import { useNavigate } from "react-router-dom";

function GoogleLoginAuth() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const responseGoogle = (res) => {
    console.log(res);
  };

  const handleGoogleLogin = (res) => {
    console.log(res.credential);
    console.log(jwtDecode(res.credential));
    const response = jwtDecode(res.credential);
    auth.login(res.credential);
    auth.userAdd(response.name);
    localStorage.setItem("user", response.name);
    navigate("/home");
  };

  useEffect(() => {
    /*global google */
    window.google.accounts.id.initialize({
      client_id:
        "569690118224-fkooeq2v6ajdkhtp8lsao7ca0km0hrac.apps.googleusercontent.com",
      callback: handleGoogleLogin,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("loginInDiv"),
      {
        theme: "filled_blue",
        size: "medium",
        shape: "circle",
      }
    );
  }, []);
  return (
    <div>
      <div id="loginInDiv"></div>
    </div>
  );
}

export default GoogleLoginAuth;
