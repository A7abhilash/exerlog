import React from "react";
import Navbar from "../containers/Navbar";
import { useAuth } from "../contexts/AuthContext";
import Profile from "./profile/Profile";

function AuthSection() {
  const { user } = useAuth();

  return (
    <div className="container-fluid">
      <Navbar />
      <div className="row">
        <div className="col-md-3 mx-2 mx-auto my-2 card p-0"></div>
        <div className="col-md-3 mx-2 mx-auto my-2"></div>
        <div className="col-md-3 mx-2 mx-auto my-2 card p-0 text-center">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default AuthSection;
