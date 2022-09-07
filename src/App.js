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
import ErrorBoundary from "./components/ErrorBoundary";
import Main from "./pages/Main";
import Feature from "./pages/Feature";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<Navigation />} />

        <Route
          path="register"
          element={
            <ErrorBoundary>
              <Register />
            </ErrorBoundary>
          }
        />
        <Route
          path="login"
          element={
            <ErrorBoundary>
              <Login />
            </ErrorBoundary>
          }
        />
        <Route
          path="home"
          element={
            <AuthRequire>
              <Home />
            </AuthRequire>
          }
        >
          <Route index element={<Main />} />
          <Route path="main" element={<Main />} />
          <Route path="feature" element={<Feature />} />
          <Route path="about" element={<About />} />
          <Route path="contactus" element={<ContactUs />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
