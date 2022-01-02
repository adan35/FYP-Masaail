import React from 'react'
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { IoIosCreate } from "react-icons/io";
import { MdTimeline, MdReviews} from "react-icons/md";
import { Link } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import '../../react-pro-sidebar.css'

export default function ReviewerProSidebar() {
    return (
        <ProSidebar className="pro-sidebar">
                <SidebarHeader>
                    <h1>Masaail</h1>
                </SidebarHeader>

                <SidebarContent>
                <Menu iconShape="square">
                    <MenuItem active={window.location.pathname === "/reviewer/createpost"} icon={<IoIosCreate />}>
                        Create Post
                        <Link to="/reviewer/createpost" /></MenuItem>
                    <MenuItem active={window.location.pathname === "/reviewer"} icon={<MdTimeline />}>
                        Timeline
                        <Link to="/reviewer" /></MenuItem>

                    <MenuItem active={window.location.pathname === "/reviewer/myposts"} icon={<MdReviews />}>
                        My Posts
                        <Link to="/reviewer/myposts" /></MenuItem>
                </Menu>
                </SidebarContent>

                <SidebarFooter className='sidebar-footer'>
                    <p className='para'>copyright@2022 <br /> Masaail.com</p>
                </SidebarFooter>
            </ProSidebar>
    )
}
