import React from "react";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useAuth } from "../../contexts/AuthContext";
import { getUserExercises } from "../queries/queries";
import SelectCard from "./SelectCard";
import { useEffect } from "react";

function AddNewWorkoutForTheDay({ addNewWorkoutForTheDay }) {
  const { user } = useAuth();
  const { data, loading, error } = useQuery(getUserExercises, {
    variables: { id: user._id },
  });

  const [exercise, setExercise] = useState("");
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [workout, setWorkout] = useState("");

  useEffect(() => {
    setSelectedExercise(
      data?.user.exercises.find((item) => item.name === exercise)
    );
    setWorkout("");
  }, [exercise]);

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewWorkoutForTheDay({ exercise, workout });
    setExercise("");
    setWorkout("");
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
          <div className="my-4">
            <div className="my-2">
              <p>Select an Exercise</p>
              {data.user.exercises.map((item) => (
                <SelectCard
                  key={item.id}
                  isSelected={item.name === exercise}
                  name={item.name}
                  handleSelect={setExercise}
                />
              ))}
            </div>
            {exercise && (
              <div className="my-2">
                <p>Select a Workout</p>
                {selectedExercise &&
                  (selectedExercise.workouts.length ? (
                    selectedExercise.workouts.map((item, index) => (
                      <SelectCard
                        key={item + index}
                        isSelected={item === workout}
                        name={item}
                        handleSelect={setWorkout}
                      />
                    ))
                  ) : (
                    <p className="text-muted">
                      <small>No workouts found in this exercise...</small>
                    </p>
                  ))}
              </div>
            )}
            <div className="my-3">
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-sm btn-primary"
                disabled={exercise === "" || workout === ""}
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
