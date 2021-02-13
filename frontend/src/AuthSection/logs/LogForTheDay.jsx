import React from "react";
import { useQuery } from "@apollo/client";
import { useAuth } from "../../contexts/AuthContext";
import WorkoutsForTheDay from "./WorkoutsForTheDay";
import AddNewWorkoutForTheDay from "./AddNewWorkoutForTheDay";
import { useState } from "react";

function LogForTheDay({ selectedLog }) {
  const { user } = useAuth();
  const [allLogs, setAllLogs] = useState([]);

  const addNewWorkoutForTheDay = (newLog) => {
    console.log({ ...newLog, selectedLog });
    setAllLogs([...allLogs, newLog]);
  };

  return (
    <>
      <div className="py-1 border-bottom border-secondary d-flex align-items-center">
        <h4>{selectedLog.date}</h4>
        <div className="ml-auto d-flex align-items-center pb-2">
          <p className="text-danger cursor-pointer m-0 px-1">Delete</p>
          <h6 className="text-success cursor-pointer m-0 px-1">Save</h6>
        </div>
      </div>
      <AddNewWorkoutForTheDay addNewWorkoutForTheDay={addNewWorkoutForTheDay} />
      <WorkoutsForTheDay logs={allLogs} />
    </>
  );
}

export default LogForTheDay;
