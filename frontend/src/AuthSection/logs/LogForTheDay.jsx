import React from "react";
import { useMutation } from "@apollo/client";
import { useAuth } from "../../contexts/AuthContext";
import WorkoutsForTheDay from "./WorkoutsForTheDay";
import AddNewWorkoutForTheDay from "./AddNewWorkoutForTheDay";
import { useState } from "react";
import {
  deleteLogMutation,
  getUserLogsQuery,
  updateLogMutation,
} from "../queries/queries";
import { useEffect } from "react";

function LogForTheDay({ selectedLog }) {
  const { user } = useAuth();
  const [allLogs, setAllLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [updateLog] = useMutation(updateLogMutation);
  const [deleteLog] = useMutation(deleteLogMutation);

  useEffect(() => {
    setAllLogs(
      selectedLog.logs?.map(({ exercise, workout }) => ({ exercise, workout }))
    );
  }, [selectedLog]);

  const addNewWorkoutForTheDay = (newLog) => {
    setAllLogs([...allLogs, newLog]);
  };

  const handleDeleteLog = async (id) => {
    if (window.confirm("Are you sure to delete this log?")) {
      setIsLoading(true);
      let res = await deleteLog({
        variables: { id },
        refetchQueries: [
          { query: getUserLogsQuery, variables: { id: user._id } },
        ],
      });
      if (res.data.deleteLog.id === id) {
        alert("Log deleted successfully");
      }
      setIsLoading(false);
    }
  };

  const deleteOneLog = (index) => {
    setAllLogs(allLogs.filter((_, i) => i !== index));
  };

  const saveLog = async () => {
    setIsLoading(true);
    let log = {
      id: selectedLog.id,
      logs: allLogs,
    };
    // console.log(allLogs);
    let res = await updateLog({
      variables: log,
      // refetchQueries: [
      //   { query: getUserLogsQuery, variables: { id: user._id } },
      // ],
    });
    // console.log(res);
    if (res.data.updateLog.id === selectedLog.id) {
      alert("Log saved successfully");
    }
    setIsLoading(false);
  };
  return (
    <>
      <div className="py-1 border-bottom border-secondary d-flex align-items-center">
        <h4>{selectedLog.date}</h4>
        <div className="ml-auto d-flex align-items-center pb-2">
          {!isLoading ? (
            <>
              <p
                onClick={() => handleDeleteLog(selectedLog.id)}
                className="text-danger cursor-pointer m-0 px-1"
              >
                Delete
              </p>
              <h6
                onClick={() => saveLog()}
                className="text-success cursor-pointer m-0 px-1"
              >
                Save
              </h6>
            </>
          ) : (
            <p className="text-muted mb-0">
              <em>
                <small>Updating changes...</small>
              </em>
            </p>
          )}
        </div>
      </div>
      <AddNewWorkoutForTheDay addNewWorkoutForTheDay={addNewWorkoutForTheDay} />
      {allLogs && (
        <WorkoutsForTheDay logs={allLogs} deleteOneLog={deleteOneLog} />
      )}
    </>
  );
}

export default LogForTheDay;
