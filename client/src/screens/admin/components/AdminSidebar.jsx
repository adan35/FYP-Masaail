import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { MdReviews, MdPending, MdHome } from "react-icons/md";
import { FaQuestionCircle, FaMoneyBillWave } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import "../../react-pro-sidebar.css";

const AdminSidebar = () => {
  return (
    <ProSidebar className="pro-sidebar">
      <SidebarHeader className="row sidebarbox">
        <div className="col-md-12">
          <div className="container-fluid masaail">
            <h3 className="headingM">Masaail</h3>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="sidebarbox">
        <Menu className="sideicon">
          <MenuItem
            className="sidebarmenu"
            active={window.location.pathname === "/admin/"}
            icon={<MdHome />}
          >
            Dashboard
            <Link to="/admin/" />
          </MenuItem>
          <MenuItem
            active={window.location.pathname === "/admin/approvals"}
            icon={<MdPending />}
          >
            Approvals
            <Link to="/admin/approvals" />
          </MenuItem>
          <MenuItem
            active={window.location.pathname === "/admin/reviewers"}
            icon={<MdReviews />}
          >
            Reviewers
            <Link to="/admin/reviewers" />
          </MenuItem>

          <MenuItem
            active={window.location.pathname === "/admin/investors"}
            icon={<FaMoneyBillWave />}
          >
            Investors
            <Link to="/admin/investors" />
          </MenuItem>

          <MenuItem
            active={window.location.pathname === "/admin/queries"}
            icon={<FaQuestionCircle />}
          >
            Queries
            <Link to="/admin/queries" />
          </MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter className="sidebar-footer sidebarbox">
        <div className="row">
          <div className="col-md-12">
            <div className="container-fluid">
              <p className="para">
                copyrights@2022 <br /> Masaail.com
              </p>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default AdminSidebar;
