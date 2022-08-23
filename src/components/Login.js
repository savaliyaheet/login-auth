import React from "react";
import { Link } from "react-router-dom";
import FacebookLoginAuth from "./FacebookLoginAuth";
import GoogleLoginAuth from "./GoogleLoginAuth";

function Login() {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" required />
        </div>
        <button className="btn">Login</button>
      </form>
      <h4>-- or Login using --</h4>
      <div>
        <FacebookLoginAuth />
        <GoogleLoginAuth />
      </div>
      <Link to="/">Main Page</Link>
    </div>
  );
}

export default Login;
