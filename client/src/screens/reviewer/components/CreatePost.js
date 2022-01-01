import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { IoIosCreate, IoIosStats } from "react-icons/io";
import { MdTimeline, MdReviews, MdPostAdd} from "react-icons/md";
import 'react-pro-sidebar/dist/css/styles.css';
import '../../react-pro-sidebar.css'

const CreatePost = () => {

    return (
        <>
        <ProSidebar className="pro-sidebar">
            <SidebarHeader>
                <h1>Masaail</h1>
            </SidebarHeader>

            <SidebarContent>
            <Menu iconShape="square">
                <MenuItem icon={<IoIosCreate />}>Create Review</MenuItem>

                <MenuItem icon={<MdTimeline />}>Timeline</MenuItem>

                <MenuItem icon={<MdReviews />}>My Reviews</MenuItem>
            </Menu>
            </SidebarContent>

            <SidebarFooter className='sidebar-footer'>
                <p className='para'>copyright@2022 <br /> Masaail.com</p>
            </SidebarFooter>
        </ProSidebar>
        <div className='main-content'>
            <h3 style={{color: "black"}}>Main content here</h3>
        </div>
        </>
    )
}

export default CreatePost;