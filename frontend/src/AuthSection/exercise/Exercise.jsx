import React from "react";
import { useQuery } from "@apollo/client";
import { getUserExercises } from "../queries/queries";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import EditExercise from "./EditExercise";
import ExerciseCard from "./ExerciseCard";
import AddNewExercise from "./AddNewExercise";

function Exercise() {
  const { user } = useAuth();
  const { data, loading, error } = useQuery(getUserExercises, {
    variables: { id: user._id },
  });
  const [editExercise, setEditExercise] = useState(null);
  return (
    <div className="container-fluid">
      <div className="row align-items-center my-3">
        <div className="col-md-6 mx-auto">
          <h3 className="text-center">Your Exercises & Workouts</h3>
        </div>
        <div className="col-md-4 mx-auto p-2">
          <AddNewExercise />
        </div>
      </div>
      {loading && <h4 className="text-center text-info">Loading data...</h4>}
      {error && (
        <h4 className="text-center text-danger">Error fetching data!!!</h4>
      )}
      {data && (
        <div className="row align-items-start">
          {data.user.exercises.length ? (
            data.user.exercises.map((exercise) => (
              <section
                key={exercise.id}
                className="col-sm-3 mx-2 mx-md-auto p-2"
              >
                <ExerciseCard
                  exercise={exercise}
                  setEditExercise={setEditExercise}
                />
              </section>
            ))
          ) : (
            <p className="col-12 text-center text-muted pt-2">
              No exercises found in this list...
            </p>
          )}
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
