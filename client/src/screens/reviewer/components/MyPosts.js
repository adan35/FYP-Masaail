import React from 'react'
import ReviewerSidebar from "./ReviewerSidebar";

const MyPosts = () => {
    return (
        <>
            <ReviewerSidebar />
            <div className='main-content'>
                <h3 style={{color: "black"}}>Main content here of My Posts</h3>
            </div>
        </>
    )
}

export default MyPosts;