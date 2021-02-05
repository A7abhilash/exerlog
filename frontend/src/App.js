import React from "react";
import GuestSection from "./GuestSection/GuestSection";
import AuthSection from "./AuthSection/AuthSection";
import { useAuth } from "./contexts/AuthContext";
import Loader from "./containers/Loader";

import "./App.css";

function App() {
  const { user, loading } = useAuth();

  return loading ? (
    <Loader height="100" />
  ) : user ? (
    <AuthSection />
  ) : (
    <GuestSection />
  );
}

export default App;
