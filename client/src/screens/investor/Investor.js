import { ChatBox, CreatePoll, Timeline, MyPolls } from "./components";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import "./investor.css";
import { useEffect, useState } from "react";
import http from "../../axios";

const Investor = (params) => {
  const history = useHistory();
  const [hot, setHot] = useState([]);
  const logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    window.location.reload();
    history.push("/auth");
  }
  useEffect(() => {
    http.get("/post/hot/topics").then(res => {
      setHot(res.data.data);
    })
    }, []);
  return (
    <div>
      <div>
        <div className="row mt-4 nav">
          <div className="title">
            <p className="text">masaail.com</p>
          </div>

          <div className="col-md-3" style={{ marginLeft: "6.5%" }}>
            <div className="form-group has-search form-control-feedback">
              <span className="fa fa-search form-control-feedback"></span>
              <input type="text" className="form-control" placeholder="Search" />
            </div>
          </div>
          <div className="col">
            <div className="text-end profile">
              <div className="dropdown">
                <div className="dropbtn">
                  <i className="fas fa-sort-down"></i>
                  <div className="dropdown-content">
                    <a href="#">Profile</a>
                    <a href="#">Settings</a>
                    <a onClick={logout}>Logout</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-2 width-container d-flex flex-column">
          <Link to="/investor/createpoll">
            <button className="btn post-btn">
              <i className="fas fa-clipboard-list"></i>Create Poll
            </button>
          </Link>

          <Link to="/investor">
            <button className="btn post-btn">
              <i className="fas fa-home"></i>Timeline
            </button>
          </Link>

          <Link to="/investor/polls">
            <button className="btn post-btn">
              <i className="fas fa-poll"></i>My Polls
            </button>
          </Link>
          
        </div>
        <div className="col">
          <Switch>
            <Route exact path="/investor" component={Timeline} />
            <Route exact path="/investor/chatbox" component={ChatBox} />
            <Route exact path="/investor/createpoll" component={CreatePoll} />
            <Route exact path="/investor/polls" component={MyPolls} />
          </Switch>
        </div>
        <div className="col-md-3">
					<h4>Hot Topics</h4>
					{
						hot.map((item, index) => {
							return(
								<div className="hot-topic">
									<p>{
										item.body
									}</p>
								</div>
							);
						})
					}
				</div>
      </div>
    </div>
  );
};
export default Investor;
