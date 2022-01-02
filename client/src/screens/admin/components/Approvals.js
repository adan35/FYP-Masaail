import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { IoIosCreate } from "react-icons/io";
import { MdTimeline, MdReviews, MdPending, MdHome } from "react-icons/md";
import { FaQuestionCircle, FaMoneyBillWave } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import "../../react-pro-sidebar.css";
const Approvals = () => {
  return (
    <div>
      <ProSidebar className="pro-sidebar">
        <SidebarHeader>
          <h1>Masaail</h1>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem icon={<MdHome />}>
              Dashboard
              <Link to="/admin/" />
            </MenuItem>
            <MenuItem icon={<MdPending />}>
              Approvals
              <Link to="/admin/approvals" />
            </MenuItem>
            <MenuItem icon={<MdReviews />}>
              Reviewers
              <Link to="/admin/reviewers" />
            </MenuItem>

            <MenuItem icon={<FaMoneyBillWave />}>
              Investors
              <Link to="/admin/investors" />
            </MenuItem>

            <MenuItem icon={<FaQuestionCircle />}>
              Queries
              <Link to="/admin/chats" />
            </MenuItem>
          </Menu>
        </SidebarContent>

        <SidebarFooter className="sidebar-footer">
          <p className="para">
            copyright@2022 <br /> Masaail.com
          </p>
        </SidebarFooter>
      </ProSidebar>
      <div className="main-content">
          <table class="table table-hover">
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
                  <a href="#">See Post</a>
                </td>
                <td>
                  <button className="btn btn-success">Approve</button>
                </td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default Approvals;
