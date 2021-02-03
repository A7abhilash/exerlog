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
      name: "Add New Exercise/Workout",
      to: "/newExercise",
    },
  ];
  return (
    <nav className="bg-light py-2 m-0 d-flex align-items-center">
      <h3 className="text-center">ExerLog</h3>
      {user && (
        <div className="ml-auto d-flex">
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
