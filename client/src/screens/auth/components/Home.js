import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/img/home.svg";
import "../auth.css";
const Home = () => {
	return (
		<>
			<div className="background">
				<div className="row siginPage homePage">
					<div className="col-md-2">
						<div className="headerlogo">
							<h4>masaail.com</h4>
						</div>
					</div>
					<div className="col-md-8">
						<div className="container-fluid homeContent">
							<h2>Masaail.com</h2>
							<p className="paragraph">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
							</p>

							<h2>Are You?</h2>
							<div className="homeButton">
								<Link type="submit" to="/auth/signup">
									<button type="submit" className="btn homebutton">
										Reviewer
									</button>
								</Link>
							</div>
							<div className="homeButton">
								<Link type="submit" to="/auth/signup">
									<button type="submit" className="btn homebutton">
										Investor
									</button>
								</Link>
								<div className="">
									<p>
										Already have an account?{" "}
										<Link to="/auth/signin">Sign In</Link>
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-2">
            <div className="homeCircle">
            <img src={img} />
            </div>
          </div>
				</div>
			</div>
		</>
	);
};

export default Home;
