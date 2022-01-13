import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../reviewer.css";
import img1 from "../../../assets/img/1.jpg";
import img2 from "../../../assets/img/2.jpg";
import img3 from "../../../assets/img/3.jpg";
import user from "../../../assets/img/user.jpg";

const MyPosts = () => {
    return (
        <>
           <div className='post'>
            <div className="row">
					<div className="col-md-2 profile-img">
						<div className="img">
							<img src={user} />
						</div>
					</div>
					<div className="col-md-4">
						<h4>Mr. Test1</h4>
						<h6 className="paragrapgh">XYZ, London</h6>
					</div>
					<div className="col-md-6">
						<p className="text-end"><span>231</span> Views</p>
					</div>
				</div>
				<div className="row">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius
						feugiat velit, at finibus leo dignissim ac.Interdum et malesuada
						fames ac ante ipsum primis in faucibus. Duis auctor condimentum.
					</p>
				</div>
                <div>
                <Carousel className="carousel">
                    <div>
                        <img src={img1} />
                    </div>
                    <div>
                        <img src={img1} />
                    </div>
                    <div>
                        <img src={img1} />
                    </div>
                    <div>
                        <img src={img1} />
                    </div>
                    <div>
                        <img src={img1} />
                    </div>
                  
                </Carousel>
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
            <div className='post'>
            <div className="row">
					<div className="col-md-2 profile-img">
						<div className="img">
							<img src={user} />
						</div>
					</div>
					<div className="col-md-4">
						<h4>Mr. Test</h4>
						<h6 className="paragrapgh">XYZ, Pakistan</h6>
					</div>
					<div className="col-md-6">
						<p className="text-end"><span>231</span> Views</p>
					</div>
				</div>
				<div className="row">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius
						feugiat velit, at finibus leo dignissim ac.Interdum et malesuada
						fames ac ante ipsum primis in faucibus. Duis auctor condimentum.
					</p>
				</div>
                <div>
                <Carousel className="carousel">
                    <div>
                        <img src={img1} />
                    </div>
                    <div>
                        <img src={img1} />
                    </div>
                    <div>
                        <img src={img1} />
                    </div>
                    <div>
                        <img src={img1} />
                    </div>
                    <div>
                        <img src={img1} />
                    </div>
                  
                </Carousel>
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

export default MyPosts;