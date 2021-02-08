import React from "react";
import { useQuery } from "@apollo/client";
import { useAuth } from "../../contexts/AuthContext";
import { getUserExercises } from "../queries/queries";
import WorkoutsForTheDay from "./WorkoutsForTheDay";
import AddNewWorkoutForTheDay from "./AddNewWorkoutForTheDay";

function LogForTheDay({ selectedLog }) {
  const { user } = useAuth();
  const { data, loading, error } = useQuery(getUserExercises, {
    variables: { id: user._id },
  });

  return (
    <>
      <div className="py-1 border-bottom border-secondary d-flex align-items-center">
        <h4>{selectedLog}</h4>
        <div className="ml-auto d-flex align-items-center pb-2">
          <p className="text-danger cursor-pointer m-0 px-1">Delete</p>
          <h6 className="text-success cursor-pointer m-0 px-1">Save</h6>
        </div>
      </div>
      {loading && <h4 className="text-center text-info">Loading data...</h4>}
      {error && (
        <h4 className="text-center text-danger">Error fetching data!!!</h4>
      )}
      {data && (
        <>
          <AddNewWorkoutForTheDay exercises={data.user.exercises} />
          <WorkoutsForTheDay exercises={data.user.exercises} />
        </>
      )}
    </>
  );
}

export default LogForTheDay;
