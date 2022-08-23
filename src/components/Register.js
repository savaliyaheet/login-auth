import React, { useState } from "react";
import { Link } from "react-router-dom";
import FacebookLoginAuth from "./FacebookLoginAuth";
import GoogleLoginAuth from "./GoogleLoginAuth";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitForm = () => {
    alert(`${username} ${password}`);
  };

  return (
    <div className="login">
      <h2>Register</h2>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">
          Register
        </button>
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

export default Register;
