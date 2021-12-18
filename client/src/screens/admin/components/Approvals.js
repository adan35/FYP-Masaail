import React from "react";

const Approvals = () => {
  return (
    <body className="Approvals">
      <div>
        <div className="container1">
          <div className="listview1">
            <table id="list-pending">
              <tr>
                <td>
                  <div className="circle-list">
                    <h5 className="idNumber">1</h5>
                  </div>
                </td>
                <td>
                  <h5 className="name">Muhammad Ghyas</h5>
                </td>
                <td>
                  <h5 className="dsgn">Reviewer</h5>
                </td>
                <td>
                  <h5 className="city">Lahore, Pakistan</h5>
                </td>
                <td>
                  <a href="#" className="see-post">
                    See Posting
                  </a>
                </td>
                <td className="button-approve">
                  <button className="approve-btn button">Approve</button>
                  <button className="delete-btn button">Delete</button>
                
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Approvals;
