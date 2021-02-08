import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SidebarItems from "./SidebarItems";

function AllLogs() {
  const [list, setList] = useState(["Sat Feb 06 2021", "Sun Feb 07 2021"]);
  const [selectedLog, setSelectedLog] = useState("");

  const addNewLog = (event) => {
    event.preventDefault();
    const today = new Date().toDateString();
    setList([today, ...list]);
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
        <button
          onClick={addNewLog}
          className="btn btn-primary btn-sm btn-block mb-2"
          disabled={list.includes(new Date().toDateString())}
        >
          Add New Log For the Day
        </button>
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
