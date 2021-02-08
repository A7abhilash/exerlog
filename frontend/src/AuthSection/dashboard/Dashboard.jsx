import React from "react";
import AllLogs from "../logs/AllLogs";
import LogForTheDay from "../logs/LogForTheDay";
import Logs from "../logs/Logs";
import Profile from "../profile/Profile";

function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row my-3 align-items-start">
        <div className="col-md-9 mx-md-auto mx-2">
          <Logs />
        </div>
        <div className="col-md-2 mx-2 mx-md-auto my-2 card p-0 text-center">
          <Profile />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
