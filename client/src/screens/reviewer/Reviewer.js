import { CreatePost, MyPosts, Timeline } from "./components";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import "./reviewer.css";
import Polls from "../shared/polls";
import { useEffect, useState } from "react";
import http from "../../axios";

const Reviewer = (params) => {
	const [hot, setHot] = useState([]);
  const history = useHistory();
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
			<div className="row mt-4">
			  <div className="nav-bar d-flex align-items-center justify-content-between">
        <Link to={'/reviewer'} className="title text">
						masaail.com
        </Link>

          <div className="row icons px-2">

            <div className="d-flex align-items-center col icon px-2 mx-2">
              <i class="fa-solid fa-user"></i>
            </div>

            <div className="d-flex align-items-center col icon px-2 mx-2">
              <Link to={'/chat'}>
                <i class="fa-solid fa-comment-dots"></i>
              </Link>
            </div>

            <div className="d-flex align-items-center col icon px-2 mx-2">
              <Link to={'/auth/signin'} onClick={logout}>
              <i class="fa-solid fa-power-off"></i></Link>
            </div>
          </div>

				</div>
			</div>


			<div className="row mt-4">

				<div className="col-md-3 d-flex flex-column">

					<Link to="/reviewer/createpost">
						<button className="btn post-btn">
							<i class="fas fa-pen-square"></i>Create Post
						</button>
					</Link>

					<Link to="/reviewer/">
						<button className="btn post-btn">
							<i class="fas fa-home"></i>Timeline
						</button>
					</Link>

					<Link to="/reviewer/myposts">
						<button className="btn post-btn">
							<i class="fas fa-clipboard-list"></i>My Reviews
						</button>
					</Link>

				</div>

				<div className="col">
					<Switch>
						<Route exact path="/reviewer" component={Timeline} />
						<Route exact path="/reviewer/createpost" component={CreatePost} />
						<Route exact path="/reviewer/myposts" component={MyPosts} />
					</Switch>
				</div>
				{/* <div className="col-md-3">
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
				</div> */}
			</div>
		</div>
	);
};
export default Reviewer;
