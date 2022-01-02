import React from 'react'
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
          <SidebarHeader>
            <h1>Masaail</h1>
          </SidebarHeader>

          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={window.location.pathname==="/admin/"} icon={<MdHome />}>
                Dashboard
                <Link to="/admin/" />
              </MenuItem>
              <MenuItem active={window.location.pathname==="/admin/approvals"} icon={<MdPending />}>
                Approvals
                <Link to="/admin/approvals" />
              </MenuItem>
              <MenuItem active={window.location.pathname==="/admin/reviewers"} icon={<MdReviews />}>
                Reviewers
                <Link to="/admin/reviewers" />
              </MenuItem>

              <MenuItem active={window.location.pathname==="/admin/investors"} icon={<FaMoneyBillWave />}>
                Investors
                <Link to="/admin/investors" />
              </MenuItem>

              <MenuItem active={window.location.pathname==="/admin/queries"} icon={<FaQuestionCircle />}>
                Queries
                <Link to="/admin/queries" />
              </MenuItem>
            </Menu>
          </SidebarContent>

          <SidebarFooter className="sidebar-footer">
            <p className="para">
              copyright@2022 <br /> Masaail.com
            </p>
          </SidebarFooter>
        </ProSidebar>
      )
  }

  export default AdminSidebar;
  