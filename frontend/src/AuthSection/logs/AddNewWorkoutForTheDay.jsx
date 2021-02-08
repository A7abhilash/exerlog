import React from "react";

function AddNewWorkoutForTheDay({ exercises, addNewWorkoutForTheDay }) {
  return exercises.length ? (
    <div className="d-flex"></div>
  ) : (
    <p className="col-12 text-center text-muted pt-2">
      No exercises found in your list...
    </p>
  );
}

export default AddNewWorkoutForTheDay;
