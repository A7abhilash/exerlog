import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
  const { user } = useAuth();
  const addNew = [
    {
      name: "Add New Log for the Day",
      to: "/newLog",
    },
    {
      name: "My Exercises",
      to: "/myExercises",
    },
  ];
  return (
    <nav className="bg-light text-center px-md-5 py-2 m-0 d-block d-md-flex align-items-center">
      <Link to="/dashboard" className="navbar-brand text-dark">
        <h3>ExerLog</h3>
      </Link>
      {user && (
        <div className="ml-auto d-block d-md-flex p-2 p-md-0">
          {addNew.map(({ name, to }) => (
            <Link key={name} to={to} className="nav-link text-danger">
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
