import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import useAuth from "./hooks/useAuth";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
function App() {
  const { auth } = useAuth();

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Navigate to={auth ? "/dashboard" : "/login"} />}
          />
          <Route
            path="/login"
            element={auth ? <Navigate to={"/dashboard"} /> : <Login />}
          />
          <Route
            path="/dashboard"
            element={auth ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
