import React from "react";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
  const { user } = useAuth();
  return (
    <nav className="bg-light py-2 m-0">
      <h3 className="text-center">ExerLog</h3>
    </nav>
  );
}

export default Navbar;
