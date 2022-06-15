import React, { useEffect, useState } from "react";
import constants from "../../../constants";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import http from "../../../axios";
import "../reviewer.css";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    http.get("/post/get/my").then((res) => {
      setPosts(res.data.data);
    });
  }, []);

  return (
    <>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Supports</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body p-4">
            {
              posts[index]?.supportBy.map((user) => {
                return (
                  <p>{user.firstName} {user.lastName}</p>
                )
              })
            }
            {
              posts[index]?.supportBy.length === 0 && <p>No supports</p>
            }
        </div>
      </div>
    </div>
  </div>
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
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-6">
              <h5 className="text-end" onClick={() => setIndex(index)} data-toggle="modal" data-target="#exampleModal">{post.supportCount} Support</h5>
            </div>
          </div>
        </div>
        )
      })}
    </>
  );
};

export default MyPosts;
