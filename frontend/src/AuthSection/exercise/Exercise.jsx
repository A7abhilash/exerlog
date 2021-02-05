import React from "react";
import { useQuery } from "@apollo/client";
import { getUserExercises } from "../queries/queries";
import { useAuth } from "../../contexts/AuthContext";

function Exercise() {
  const { user } = useAuth();
  const { data, loading, error } = useQuery(getUserExercises, {
    variables: { id: user._id },
  });
  console.log(data);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 my-3">
          <h3 className="text-center">Your Exercises & Workouts</h3>
        </div>
      </div>
      {loading && <h4 className="text-center text-info">Loading data...</h4>}
      {error && (
        <h4 className="text-center text-danger">Error fetching data!!!</h4>
      )}
      {data && (
        <div className="row">
          {data.user.exercises.map((exercise) => (
            <section key={exercise.id} className="col-sm-3 mx-2 mx-md-auto p-2">
              <div className="bg-light m-1 p-1 text-center">
                <h6>{exercise.name}</h6>
              </div>
              <ul className="list-unstyled px-3">
                {exercise.workouts.map((workout, index) => (
                  <li key={index + workout}>{workout}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

export default Exercise;
