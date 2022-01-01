import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { IoIosCreate } from "react-icons/io";
import { MdTimeline, MdReviews} from "react-icons/md";
import 'react-pro-sidebar/dist/css/styles.css';

const CreatePost = () => {
    return (
        <>
        <ProSidebar>
            <SidebarHeader>
                <h1 style={{textAlign: 'center'}}>Masaail</h1>
            </SidebarHeader>

            <SidebarContent>
            <Menu iconShape="square">
                <MenuItem icon={<IoIosCreate />}>Create Review</MenuItem>

                <SubMenu title="Timeline" icon={<MdTimeline />}>
                    <MenuItem style={{marginLeft: "40px"}}>Statistics</MenuItem>
                    <MenuItem style={{marginLeft: "40px"}}>Posts</MenuItem>
                </SubMenu>

                <MenuItem icon={<MdReviews />}>My Reviews</MenuItem>
            </Menu>
            </SidebarContent>

            <SidebarFooter>
                <p style={{color: "#8E8D8D", marginLeft: "20px", fontSize: "12px"}}>copyright@2022 <br /> Masaail.com</p>
            </SidebarFooter>
        </ProSidebar>
        <div>
            createpost
        </div>
        </>
    )
}

export default CreatePost;