import React, { useEffect, useState } from "react";
import constants from "../../../constants";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import http from "../../../axios";
import "../reviewer.css";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    http.get("/post/get/my").then((res) => {
      setPosts(res.data.data);
    });
  }, []);

  return (
    <>
      {posts.map((post, index) => {
        return (
          <div className="post">
          <div className="row">
            <div className="col-md-2 profile-img">
              <div className="img">
                <img src={constants.file_url + '/' + post.by.profileImage} />
              </div>
            </div>
            <div className="col-md-4">
              <h4>{post.by.firstName}</h4>
              <h6 className="paragrapgh">{post.by.city}, {post.by.country}</h6>
            </div>
            <div className="col-md-6">
              <p className="text-end">
                <span>231</span> Views
              </p>
            </div>
          </div>
          <div className="row">
            <p>
              {post.body}
            </p>
          </div>
          <div>
            <Carousel className="carousel">
              {
                post.images.map((image, index) => {
                  return (
                    <div key={index}>
                      <img src={constants.file_url + '/' +  image.url} />
                    </div>
                  )
                })
              }
            </Carousel>
          </div>
          <div className="row">
            <div className="col">
              <i class="fas fa-plus-circle"></i>
              <i class="fas fa-heart"></i>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-6">
              <h5 className="text-end">231 Support</h5>
            </div>
          </div>
        </div>
        )
      })}
    </>
  );
};

export default MyPosts;
