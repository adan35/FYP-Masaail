import { CreatePost, MyPosts, Timeline } from "./components";
import "./reviewer.css";

const Reviewer = (params) => {
    return (
        <div>
            <CreatePost />
            <MyPosts />
        </div>
    );
}
export default Reviewer;