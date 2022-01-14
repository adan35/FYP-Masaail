import React from "react";

const Queries = () => {
  return (
    <div>

      <div className="main-content overflow-auto">
        <table className="table table-hover">
          <thead>
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Email</td>
              <td>Area</td>
              <td>Query</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>ABC</td>
              <td>xyz@gmail.com</td>
              <td>Lahore, Pakistan</td>
              <td>
                <p>This is query</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Queries;
