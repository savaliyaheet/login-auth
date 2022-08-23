import "./App.css";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import NoMatch from "./components/NoMatch";
import Home from "./components/Home";
import AuthContext from "./AuthStore/AuthProvider";
import { useContext, useEffect } from "react";
import AuthRequire from "./AuthStore/AuthRequire";

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route
          path="home"
          element={
            <AuthRequire>
              <Home />
            </AuthRequire>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
