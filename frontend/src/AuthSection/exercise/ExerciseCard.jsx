import React from "react";
import { useMutation } from "@apollo/client";
import { deleteExerciseMutation, getUserExercises } from "../queries/queries";
import { useAuth } from "../../contexts/AuthContext";

function ExerciseCard({ exercise, setEditExercise }) {
  const { user } = useAuth();
  const [deleteExercise] = useMutation(deleteExerciseMutation);

  const handleDeleteExercise = async (id) => {
    if (window.confirm("Are you sure to delete this exercise?")) {
      let res = await deleteExercise({
        variables: { id },
        refetchQueries: [
          { query: getUserExercises, variables: { id: user._id } },
        ],
      });
      if (res.data.deleteExercise.id === id) {
        alert("Exercise deleted successfully");
      }
    }
  };

  return (
    <div className="bg-light m-1 px-1 pt-1 pb-0">
      <div className="d-flex pb-0 border-bottom border-secondary mx-2">
        <h6 className="pl-2">{exercise.name}</h6>
        <div className="ml-auto d-flex">
          <p
            onClick={() => setEditExercise(exercise)}
            onClick={() => setEditExercise(exercise)}
            className="text-info cursor-pointer m-0 px-1"
          >
            Edit
          </p>
          <p
            onClick={() => handleDeleteExercise(exercise.id)}
            className="text-danger cursor-pointer m-0 px-1"
          >
            Delete
          </p>
        </div>
      </div>
      <ul className="list-unstyled px-3 pb-1">
        {exercise.workouts.length ? (
          exercise.workouts.map((workout, index) => (
            <li key={index + workout}>{workout}</li>
          ))
        ) : (
          <p className="text-center text-muted pt-2">
            <small>No workouts in this list...</small>
          </p>
        )}
      </ul>
    </div>
  );
}

export default ExerciseCard;
