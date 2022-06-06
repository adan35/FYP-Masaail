import { ChatBox, CreatePoll, Timeline } from "./components";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import "./investor.css";
import Polls from "../shared/polls";

const Investor = (params) => {
  const history = useHistory();
  const logout = () => {
    window.localStorage.removeItem("token");
    history.push("/auth");
  }
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
        <div className="col-md-2 width-container">
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
            <Route exact path="/investor/polls" component={Polls} />
          </Switch>
        </div>
        <div className="col-md-3">
          <h4>Hot Topics</h4>
          <div className="hot-topic">
            <h4>Lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="hot-topic">
            <h4>Lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="hot-topic">
            <h4>Lorem Ipsum</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Investor;
