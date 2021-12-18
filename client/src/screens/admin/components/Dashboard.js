import React from "react";

const Dashboard = () => {
  return (
    <body className="dashboard">
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card admin-card main">
              <h2 className="userHeading">Users</h2>
              <button className="investor">Investor</button>
              <button className="investor">Reviewer</button>
              <button className="approvals-pending">Approvals Pending</button>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </body>
  );
};

export default Dashboard;
