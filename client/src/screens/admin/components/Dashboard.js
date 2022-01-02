import React from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
const Dashboard = () => {
  return (
    <>
      <div>
        
        <AdminSidebar />
        
        <div className="main-content">
            <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div className="row">
              <div className="container">
                <ul className="list-unstyled">
                  <li>
                    <div className="container">
                      <div className="card">
                        <img
                          src="https://cdn.pixabay.com/photo/2014/04/02/10/12/checkbox-303113_960_720.png"
                          className="card-img-top img"
                          alt="img1"
                        />

                        <div className="card-body">
                          <center>
                            <h5 className="card-title">Approvals</h5>
                          </center>

                          <p className="card-text">
                           50 Posts are pending for approvals.
                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown p
                          </p>

                          <center>
                            <Link to="/admin/approvals" className="btn button">
                              Approve Posts
                            </Link>
                          </center>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="container">
              <ul className="list-unstyled">
                <li>
                  <div className="container">
                    <div className="card">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/942/942751.png"
                        className="card-img-top img"
                        alt="img2"
                      />

                      <div className="card-body">
                        <center>
                          <h5 className="card-title">Queries</h5>
                        </center>

                        <p className="card-text">
                            50 queries are pending to be answered.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer too
                        </p>

                        <center>
                          <Link to="/admin/queries" className="btn button">
                            Queries
                          </Link>
                        </center>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Dashboard;
