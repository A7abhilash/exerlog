import React from "react";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useAuth } from "../../contexts/AuthContext";
import { getUserExercises } from "../queries/queries";
import SelectCard from "./SelectCard";

function AddNewWorkoutForTheDay({ addNewWorkoutForTheDay }) {
  const { user } = useAuth();
  const { data, loading, error } = useQuery(getUserExercises, {
    variables: { id: user._id },
  });

  const [exercise, setExercise] = useState("");
  const [workout, setWorkout] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(exercise);
    console.log(workout);
  };

  return (
    <>
      {loading && (
        <h6 className="text-center text-info my-3">
          Loading your exercises...
        </h6>
      )}
      {error && (
        <h6 className="text-center text-danger my-3">Error fetching data!!!</h6>
      )}
      {data &&
        (data.user.exercises.length ? (
          <div className="my-2">
            <div>
              <p>Select an Exercise</p>
              {data.user.exercises.map((item) => (
                <SelectCard
                  key={item.id}
                  isSelected={item.name === exercise}
                  name={item.name}
                  handleSelect={setExercise}
                />
              ))}
              <hr />
            </div>
            {exercise && (
              <div>
                <p>Select a Workout</p>
                {data.user.exercises
                  .find((item) => item.name === exercise)
                  .workouts.map((item, index) => (
                    <SelectCard
                      key={item + index}
                      isSelected={item === workout}
                      name={item}
                      handleSelect={setWorkout}
                    />
                  ))}
                <hr />
              </div>
            )}
            <div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-sm btn-dark"
              >
                Add Workout
              </button>
            </div>
          </div>
        ) : (
          <p className="col-12 text-center text-muted pt-2">
            No exercises found in your list...
          </p>
        ))}
    </>
  );
}

export default AddNewWorkoutForTheDay;
