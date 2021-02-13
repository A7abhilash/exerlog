import React from "react";

function WorkoutsForTheDay({ logs, deleteOneLog }) {
  return (
    <div>
      <hr />
      <h5>Workouts for the day</h5>
      {logs.length ? (
        <div className="table-responsive">
          <table className="table table-sm table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Sl No.</th>
                <th>Exercise Category</th>
                <th>Workout</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((item, index) => (
                <tr key={index + item.exercise}>
                  <td>{index + 1}</td>
                  <td>{item.exercise}</td>
                  <td>{item.workout}</td>
                  <td>
                    <p
                      onClick={() => deleteOneLog(item.id)}
                      className="text-danger cursor-pointer m-0 px-1"
                    >
                      Delete
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="col-12 text-center text-muted pt-2">
          No logs found in this day...
        </p>
      )}
    </div>
  );
}

export default WorkoutsForTheDay;
