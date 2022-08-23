import React, { useContext, useEffect, useState } from "react";
import FacebookLogin from "react-facebook-login";
import AuthContext from "../AuthStore/AuthProvider";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";

function FacebookLoginAuth() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const testAPI = (token, id) => {
    axios
      .get(
        `https://graph.facebook.com/${id}?fields=id,name,email,picture&access_token=${token}`
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", res.data.name);
        localStorage.setItem("profile", res.data.picture.data.url);
        auth.userAdd(res.data.name);
      })
      .catch((err) => console.log(err));
  };

  const onLoginClick = () => {
    window.FB.login(
      (res) => {
        console.log(res);
        if (res.status === "connected") {
          testAPI(res.authResponse.accessToken, res.authResponse.userID);
          auth.login(res.authResponse.accessToken);
          navigate("/home");
        }
      },
      { scope: "public_profile,email" }
    );
  };

  return (
    <div>
      <button onClick={onLoginClick}>Login with Facebook</button>
    </div>
  );
}

export default FacebookLoginAuth;
