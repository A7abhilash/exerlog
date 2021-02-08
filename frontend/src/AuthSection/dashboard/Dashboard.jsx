import React from "react";
import AllLogs from "../logs/AllLogs";
import Profile from "../profile/Profile";

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row my-3 align-items-start">
        <div className="col-md-3 mx-2 mx-md-auto my-2 card p-0">
          <AllLogs />
        </div>
        <div className="col-md-5 mx-2 mx-md-auto my-2 bg-light"></div>
        <div className="col-md-3 mx-2 mx-md-auto my-2 card p-0 text-center">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
