import React from "react";
import { useQuery } from "@apollo/client";
import { getUserExercises } from "../queries/queries";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import EditExercise from "./EditExercise";

function Exercise() {
  const { user } = useAuth();
  const { data, loading, error } = useQuery(getUserExercises, {
    variables: { id: user._id },
  });
  const [editExercise, setEditExercise] = useState(null);
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
              <div className="bg-light m-1 p-1 pb-0 d-flex">
                <h6 className="pl-2">{exercise.name}</h6>
                <div className="ml-auto d-flex">
                  <p
                    onClick={() => setEditExercise(exercise)}
                    className="text-info cursor-pointer m-0 px-1"
                  >
                    Edit
                  </p>
                  <p className="text-danger cursor-pointer m-0 px-1">Delete</p>
                </div>
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
      {editExercise && (
        <EditExercise
          editExercise={editExercise}
          setEditExercise={setEditExercise}
        />
      )}
    </div>
  );
}

export default Exercise;
