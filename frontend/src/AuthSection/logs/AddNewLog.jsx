import React from "react";
import { useState } from "react";

function AddNewLog({ addNewLog }) {
  const [logDate, setLogDate] = useState("");

  const addNew = () => {
    const date = new Date(logDate).toDateString();
    // console.log(date);
    addNewLog(date);
    setLogDate("");
  };

  return (
    <div className="d-flex align-items-center mb-2">
      <input
        type="date"
        value={logDate}
        onChange={(e) => setLogDate(e.target.value)}
        className="form-control"
      />
      <button
        onClick={addNew}
        className="btn btn-primary ml-2"
        disabled={logDate === ""}
      >
        Add
      </button>
    </div>
  );
}

export default AddNewLog;
