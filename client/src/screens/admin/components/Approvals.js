import React from "react";
import { Link } from "react-router-dom";

const Approvals = () => {
  return (
    <div>

      <div className="main-content mainBody">
          <table className="table table-hover approvaltable">
            <thead>
              <tr>
                <td>#</td>
                <td>Name</td>
                <td>Location</td>
                <td>Post</td>
                <td>Approve</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>ABC</td>
                <td>XYZ</td>
                <td>
                  <Link to="#" className="seePost">See Post</Link>
                </td>
                <td>
                  <button className="btn-success">Approve</button>
                </td>
                <td>
                  <button className="btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default Approvals;
