import React from "react";

const CreatePost = () => {
	return (
		<>
			<div className="col-md-12">
				<div className="col-md-8 create-post">
					<form>
						<div className="create mt-8">
                            <div className="form-group">
							<textarea placeholder="Write Your Observation to attract a Business Investment"></textarea>
                            </div>
							<div>
                                <div className="form-group">
								<i class="far fa-location"></i>
								<i class="fas fa-paperclip"></i>
								<i class="fas fa-tag"></i>
                                </div>
							</div>
						</div>
						<div className="d-flex justify-content-end">
							<button className="btn">Post</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default CreatePost;
