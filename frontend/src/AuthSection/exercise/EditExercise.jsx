import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function EditExercise({ editExercise, setEditExercise }) {
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseWorkouts, setExerciseWorkouts] = useState(null);
  const [editWorkout, setEditWorkout] = useState("");
  useEffect(() => {
    if (editExercise) {
      console.log(editExercise);
      setExerciseName(editExercise.name);
      setExerciseWorkouts(editExercise.workouts);
    }
  }, []);

  const editThisWorkout = (workout) => {
    setExerciseWorkouts(exerciseWorkouts.filter((w) => w !== workout));
    setEditWorkout(workout);
  };

  const deleteThisWorkout = (workout) => {
    setExerciseWorkouts(exerciseWorkouts.filter((w) => w !== workout));
  };

  const addNewWorkout = (event) => {
    setExerciseWorkouts([...exerciseWorkouts, editWorkout]);
    setEditWorkout("");
  };

  const handleSaveExercise = () => {
    let exercise = { name: exerciseName, workouts: exerciseWorkouts };
    console.log(exercise);
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
            onChange={(e) => setExerciseName({ name: e.target.value })}
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
                    onClick={() => editThisWorkout(workout)}
                    className="text-info cursor-pointer m-0 px-1"
                  >
                    Edit
                  </p>
                  <p
                    onClick={() => deleteThisWorkout(workout)}
                    className="text-danger cursor-pointer m-0 px-1"
                  >
                    Delete
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted">
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
