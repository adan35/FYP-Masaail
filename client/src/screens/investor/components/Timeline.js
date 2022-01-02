import React from 'react'

const Timeline = () => {
    return (
        <>
            <div className='post'>
                <div className='row'>
                    <div className='col-md-2 profile-img'>
                        <div className='img'>

                        </div>
                    </div>
                    <div className='col-md-4'>
                        <h4>Muhammad Haris</h4>
                        <h5>Lahore</h5>
                    </div>
                    <div className='col-md-6'>
                        <h5 className='text-end'>231 Views</h5>
                    </div>
                </div>
                <div className='row'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius feugiat velit, at finibus leo dignissim ac. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis auctor condimentum tortor, et viverra turpis bibendum non. Cras id orci elementum, hendrerit ligula vel, pharetra enim. Vivamus metus sapien, cursus eget mollis eu, feugiat
                    </p>
                </div>
                <div className='row'>
                    <div className='col'>
                        <i class="fas fa-plus-circle"></i>
                        <i class="fas fa-heart"></i>
                    </div>
                    <div className='col-md-4'></div>
                    <div className='col-md-6'>
                        <h5 className='text-end'>231 Support</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timeline;