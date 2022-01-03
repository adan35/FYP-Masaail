import React from 'react'
import ReviewerSidebar from "./ReviewerSidebar";

const CreatePost = () => {

    return (
        <>
            <div className='col-md-10 create-post'>
                <div className='create mt-4'>
                    <textarea placeholder='Write your observation here'></textarea>
                    <div>
                        <i class="far fa-location"></i>
                        <i class="fas fa-paperclip"></i>
                        <i class="fas fa-tag"></i>
                    </div>
                </div>
                <div className='d-flex justify-content-end'>
                    <button className='btn'>Post</button>
                </div>
            </div>
        </>
    )
}

export default CreatePost;