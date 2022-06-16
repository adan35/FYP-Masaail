import React, { useEffect, useState } from "react";
import http from "../../../axios";
import Poll from "react-polls";
import constants from "../../../constants";

const pollQuestion = "Choose between these?";

const Timeline = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    http.get("/poll/get/my").then((res) => {
      setPosts(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  const [pollAnswers, setPollAnswers] = useState([
    { option: "React", votes: 8 },
    { option: "Angular", votes: 2 },
  ]);

  const handleVote = (voteAnswer) => {};

  return (
    <>
      {
        posts.map((post, index) => {

          return (
            <div className="post">
              <div className="row">
                <div className="col-md-2 profile-img">
                  <div className="img">
                    <img src={constants.file_url + '/' + post.by.profileImage}/>
                  </div>
                </div>
                <div className="col-md-4">
                  <h4>{post.by.firstName}</h4>
                  <h5>{post.by.city}, {post.by.country}</h5>
                </div>
                <div className="col-md-6">
                  <h5 className="text-end"></h5>
                </div>
              </div>
              <div className="row">
                <Poll
                  question={post.title}
                  answers={post.answers}
                  onVote={handleVote}
                />
                </div>
              </div>
      )

        })
      }
    </>
  );
};

export default Timeline;
