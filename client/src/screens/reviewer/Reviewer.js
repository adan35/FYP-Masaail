import { CreatePost, MyPosts, Timeline } from "./components";
import { Switch, Route } from "react-router-dom";
import "./reviewer.css";

const Reviewer = (params) => {
    return (
        <div>
            <Switch>
                <Route exact path="/reviewer" component={Timeline}/>
                <Route exact path="/reviewer/createpost" component={CreatePost}/>
                <Route exact path="/reviewer/myposts" component={MyPosts}/>
            </Switch>
        </div>
    );
}
export default Reviewer;