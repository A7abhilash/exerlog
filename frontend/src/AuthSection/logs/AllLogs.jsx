import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AddNewLog from "./AddNewLog";
import SidebarItems from "./SidebarItems";

function AllLogs() {
  const [list, setList] = useState(["Sat Feb 06 2021", "Sun Feb 07 2021"]);
  const [selectedLog, setSelectedLog] = useState("");

  const addNewLog = (date) => {
    if (!list.includes(date)) {
      setList([date, ...list]);
      setSelectedLog(date);
    } else {
      alert("Log for the specified day exists");
    }
  };

  useEffect(() => {
    // console.log(list);
    console.log(selectedLog);
  }, [selectedLog]);

  return (
    <>
      <div className="card-header bg-dark text-white text-center">
        <h4>All Logs</h4>
      </div>
      <div className="card-body p-2">
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
      </div>
    </>
  );
}

export default AllLogs;
