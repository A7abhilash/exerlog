import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useAuth } from "../../contexts/AuthContext";
import { addNewLogMutation, getUserLogsQuery } from "../queries/queries";
import AddNewLog from "./AddNewLog";
import SidebarItems from "./SidebarItems";

function AllLogs({ selectedLog, setSelectedLog }) {
  const { user } = useAuth();
  const [list, setList] = useState([]);
  const { data, loading, error } = useQuery(getUserLogsQuery, {
    variables: { id: user._id },
  });
  const [addNewLog] = useMutation(addNewLogMutation);

  const newLog = async (date) => {
    if (new Date(date).getTime().toString() > new Date().getTime().toString()) {
      alert("Selected date is not before today!!!");
      return;
    }
    if (!list.find((item) => item.date === date)) {
      let log = {
        date,
        userId: user._id,
      };
      let res = await addNewLog({
        variables: log,
        refetchQueries: [
          { query: getUserLogsQuery, variables: { id: user._id } },
        ],
      });
      if (res) {
        alert(
          `New log on date: ${res.data.addNewLog.date} added successfully!!!`
        );
        setSelectedLog(res.data.addNewLog);
      }
    } else {
      alert("Log for the specified day exists");
    }
  };

  useEffect(() => {
    setList(data?.user?.logs);
    setSelectedLog(data?.user?.logs[0]);
  }, [data]);

  return (
    <>
      <div className="card-header bg-dark text-white text-center">
        <h4>All Logs</h4>
      </div>
      <div className="card-body p-2">
        {loading && <h4 className="text-center text-info">Loading data...</h4>}
        {error && (
          <h4 className="text-center text-danger">Error fetching data!!!</h4>
        )}
        <AddNewLog addNewLog={newLog} />
        {data && selectedLog && (
          <>
            {list.length ? (
              <SidebarItems
                list={list}
                selectedLog={selectedLog}
                setSelectedLog={setSelectedLog}
              />
            ) : (
              <p className="col-12 text-center text-muted pt-2">
                No logs found in this list...
              </p>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default AllLogs;
