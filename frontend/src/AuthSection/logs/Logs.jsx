import React from "react";
import { useState } from "react";
import AllLogs from "./AllLogs";
import LogForTheDay from "./LogForTheDay";

function Logs() {
  const [selectedLog, setSelectedLog] = useState("");
  return (
    <div className="row align-items-start">
      <div className="col-lg-4 mx-2 mx-md-auto my-2 card p-0">
        <AllLogs selectedLog={selectedLog} setSelectedLog={setSelectedLog} />
      </div>
      <div className="col-lg-7 mx-2 mx-md-auto my-2 p-2 bg-light">
        <LogForTheDay selectedLog={selectedLog} />
      </div>
    </div>
  );
}

export default Logs;
