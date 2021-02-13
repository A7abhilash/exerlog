import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useAuth } from "../../contexts/AuthContext";
import { getUserLogsQuery } from "../queries/queries";
import AddNewLog from "./AddNewLog";
import SidebarItems from "./SidebarItems";

function AllLogs({ selectedLog, setSelectedLog }) {
  const { user } = useAuth();
  const { data, loading, error } = useQuery(getUserLogsQuery, {
    variables: { id: user._id },
  });
  const [list, setList] = useState(null);

  const addNewLog = (date) => {
    if (!list.find((item) => item.data !== date)) {
      setList([{ id: "12", date }, ...list]);
      setSelectedLog({ id: "12", date });
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
        {data && selectedLog && (
          <>
            <AddNewLog addNewLog={addNewLog} />
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
