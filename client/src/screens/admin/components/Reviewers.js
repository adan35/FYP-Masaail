import React from "react";

const Reviewers = () => {
  return (
    <>
          
        <div className="main-content overflow-auto">
        <table className="table table-hover">
            <thead>
              <tr>
                <td>#</td>
                <td>Name</td>
                <td>Email</td>
                <td>Area</td>
                <td>Number</td>
                
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>ABC</td>
                <td>xyz@gmail.com</td>
                <td>
                  Lahore, Pakistan
                </td>
                <td>
                  +92 300 0000000
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      
    </>
  );
};

export default Reviewers;
