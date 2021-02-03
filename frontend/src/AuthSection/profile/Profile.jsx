import React from "react";
import { useAuth } from "../../contexts/AuthContext";

const BACKEND_URL = "http://localhost:7781";

function Profile() {
  const { user } = useAuth();

  return (
    <>
      <div className="card-header">
        <h4>Profile</h4>
      </div>
      <div className="card-content p-2">
        <img
          src={`${user.image}`}
          alt="profile"
          className="img-fluid mb-2 rounded-circle"
        />
        <h5>{user.displayName}</h5>
        <a
          role="button"
          href={`${BACKEND_URL}/auth/logout`}
          className="btn btn-danger"
        >
          Sign out
        </a>
      </div>
    </>
  );
}

export default Profile;
