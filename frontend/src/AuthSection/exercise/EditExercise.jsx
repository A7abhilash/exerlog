import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { getUserExercises, updateExerciseMutation } from "../queries/queries";
import { useAuth } from "../../contexts/AuthContext";

function EditExercise({ editExercise, setEditExercise }) {
  const { user } = useAuth();
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseWorkouts, setExerciseWorkouts] = useState(null);
  const [editWorkout, setEditWorkout] = useState("");
  const [updateExercise] = useMutation(updateExerciseMutation);

  useEffect(() => {
    if (editExercise) {
      // console.log(editExercise);
      setExerciseName(editExercise?.name);
      setExerciseWorkouts(editExercise?.workouts);
    }
  }, [editExercise]);

  const editThisWorkout = (workout, index) => {
    setExerciseWorkouts(exerciseWorkouts.filter((_, i) => i !== index));
    setEditWorkout(workout);
  };

  const deleteThisWorkout = (index) => {
    setExerciseWorkouts(exerciseWorkouts.filter((_, i) => i !== index));
  };

  const addNewWorkout = () => {
    setExerciseWorkouts([...exerciseWorkouts, editWorkout]);
    setEditWorkout("");
  };

  const handleSaveExercise = async () => {
    let exercise = {
      id: editExercise.id,
      name: exerciseName,
      workouts: exerciseWorkouts,
    };
    // console.log(exercise);
    const res = await updateExercise({
      variables: exercise,
      refetchQueries: [
        { query: getUserExercises, variables: { id: user._id } },
      ],
    });
    if (res) {
      setEditExercise(null);
    }
  };

  return (
    <div className="backdropStyles">
      <div className="col-md-4 card bg-light p-0 mx-2">
        <div className="card-header d-flex">
          <h5>Edit Exercise</h5>
          <p
            onClick={() => setEditExercise(null)}
            className="ml-auto cursor-pointer m-0 pr-2"
          >
            Close
          </p>
        </div>
        <div className="card-body p-2">
          <input
            type="text"
            className="form-control"
            value={exerciseName}
            onChange={(e) => setExerciseName(e.target.value)}
          />
          <hr />
          <div className="d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="New/Edit Workout"
              value={editWorkout}
              onChange={(e) => setEditWorkout(e.target.value)}
            />
            <button
              onClick={(e) => addNewWorkout(e)}
              className="btn btn-primary btn-sm mx-1"
            >
              Add
            </button>
          </div>
          {exerciseWorkouts?.length ? (
            exerciseWorkouts?.map((workout, index) => (
              <div key={index + workout} className="m-1 p-1 pb-0 d-flex">
                <h6 className="pl-2">{workout}</h6>
                <div className="ml-auto d-flex">
                  <p
                    onClick={() => editThisWorkout(workout, index)}
                    className="text-info cursor-pointer m-0 px-1"
                  >
                    Edit
                  </p>
                  <p
                    onClick={() => deleteThisWorkout(index)}
                    className="text-danger cursor-pointer m-0 px-1"
                  >
                    Delete
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted pt-2">
              <small>No workouts in this list...</small>
            </p>
          )}
        </div>
        <div className="card-footer p-0">
          <button
            onClick={handleSaveExercise}
            className="btn btn-success btn-sm float-right m-2"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditExercise;
