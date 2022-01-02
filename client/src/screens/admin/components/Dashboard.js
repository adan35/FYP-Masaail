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

const Dashboard = () => {
  return (
    <>
      <div>
        <ProSidebar className="pro-sidebar">
          <SidebarHeader>
        <h1>Masaail</h1>
          </SidebarHeader>

          <SidebarContent>
            <Menu iconShape="square">
            <MenuItem icon={<MdHome />}>
                Dashboard
                <Link to="#" />
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
            <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <div className="row">
              <div className="container">
                <ul className="list-unstyled">
                  <li>
                    <div class="container">
                      <div class="card">
                        <img
                          src="https://cdn.pixabay.com/photo/2014/04/02/10/12/checkbox-303113_960_720.png"
                          class="card-img-top img"
                        />

                        <div class="card-body">
                          <center>
                            <h5 class="card-title">Approvals</h5>
                          </center>

                          <p class="card-text">
                           50 Posts are pending for approvals.
                           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown p
                          </p>

                          <center>
                            <a href="/admin/approvals" class="btn button">
                              Approve Posts
                            </a>
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
                  <div class="container">
                    <div class="card">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/942/942751.png"
                        class="card-img-top img"
                      />

                      <div class="card-body">
                        <center>
                          <h5 class="card-title">Queries</h5>
                        </center>

                        <p class="card-text">
                            50 queries are pending to be answered.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer too
                        </p>

                        <center>
                          <a href="/admin/chats" class="btn button">
                            Queries
                          </a>
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
