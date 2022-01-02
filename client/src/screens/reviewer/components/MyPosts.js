import React from 'react'
import ReviewerProSidebar from "./ReviewerProSidebar";

const MyPosts = () => {
    return (
        <>
            <ReviewerProSidebar />
            <div className='main-content'>
                <h3 style={{color: "black"}}>Main content here of My Posts</h3>
            </div>
        </>
    )
}

export default MyPosts;