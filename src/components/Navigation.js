import React from "react";

import { Link, Outlet } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <Link to="login" className="button">
        Login
      </Link>
      <Link to="register" className="button">
        Register
      </Link>
    </div>
  );
}

export default Navigation;
