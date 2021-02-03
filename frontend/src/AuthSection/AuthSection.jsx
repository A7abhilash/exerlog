import React from "react";
import Navbar from "../containers/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

function AuthSection() {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
}

export default AuthSection;
