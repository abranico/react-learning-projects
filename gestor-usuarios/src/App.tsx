import { useState } from "react";
import "./App.css";
import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
function App() {
  const login = useSelector((store) => store.auth);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Navigate to={login ? "/dashboard" : "/login"} />}
          />
          <Route
            path="/login"
            element={login ? <Navigate to={"/dashboard"} /> : <Login />}
          />
          <Route
            path="/dashboard"
            element={login ? <h2>DASHBOARD</h2> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
