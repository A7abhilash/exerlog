import React from "react";
import Navbar from "../containers/Navbar";
import { useAuth } from "../contexts/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

function AuthSection() {
  const { user } = useAuth();

  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default AuthSection;
