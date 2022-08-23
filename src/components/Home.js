import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../AuthStore/AuthProvider";

function Home() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const photoURL = localStorage.getItem("profile");
  const handleLogout = () => {
    /*global FB */
    window.FB.getLoginStatus((res) => {
      console.log(res.status);
      if (res.status === "connected") {
        FB.logout((res) => console.log("Facebook Logged Out", res));
      }
    });
    auth.logout();
    navigate("/");
    console.log("logged Out");
  };

  useEffect(() => {
    const tick = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(tick);
    };
  }, [count]);

  return (
    <div>
      <h2>Home Page</h2>
      <h4>Hello, welcome {auth.user}</h4>
      <img
        src={photoURL}
        alt=""
        style={{
          width: 100,
          height: 100,
        }}
      />
      <h1>{count}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
