import { CreatePost, MyPosts, Timeline } from "./components";
import { Switch, Route, Link } from "react-router-dom";
import "./reviewer.css";
import Polls from "../shared/polls";

const Reviewer = (params) => {
	return (
		<div>
			<div>
				<div className="row mt-4">
					<div className="title">
						<h3 className="text">masaail.com</h3>
					</div>

					<div className="col-md-3">
						<div class="form-group has-search">
							<span class="fa fa-search form-control-feedback"></span>
							<input type="text" class="form-control" placeholder="Search" />
						</div>
					</div>
					<div className="col">
						<div className="text-end profile"></div>
						<div class="dropdown">
							<div class="dropbtn"><i class="fas fa-sort-down"></i></div>
							<div class="dropdown-content">
								<a href="#">Profile</a>
								<a href="#">Settings</a>
								<a href="#">Logout</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row mt-4">
				<div className="col-md-3">
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
export default Reviewer;
