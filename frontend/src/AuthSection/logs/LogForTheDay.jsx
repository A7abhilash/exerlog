import React from "react";

function LogForTheDay({ selectedLog }) {
  return (
    <>
      <div className="py-1 border-bottom border-secondary d-flex align-items-center">
        <h4>{selectedLog}</h4>
        <div className="ml-auto d-flex align-items-center pb-2">
          <p className="text-danger cursor-pointer m-0 px-1">Delete</p>
          <h6 className="text-success cursor-pointer m-0 px-1">Save</h6>
        </div>
      </div>
    </>
  );
}

export default LogForTheDay;
