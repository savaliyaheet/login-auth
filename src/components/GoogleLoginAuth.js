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
    try {
      console.log("We are in try block");
      window.google.accounts.id.initialize({
        client_id:
          "569690118224-spk6pqbjqom8fitheevqkcadf0j5iuib.apps.googleusercontent.com",
        callback: handleGoogleLogin,
      });
    } catch (e) {
      console.log("We are in catch block");
      return new Error("Error caught in the API request");
    }

    try {
      window.google.accounts.id.renderButton(
        document.getElementById("loginInDiv"),
        {
          theme: "filled_blue",
          size: "medium",
          shape: "circle",
        }
      );
    } catch (e) {
      console.log("New Error caught", e);
    }
  }, [handleGoogleLogin]);
  return (
    <div>
      <div id="loginInDiv"></div>
    </div>
  );
}

export default GoogleLoginAuth;
