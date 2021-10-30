import {CreatePost, MyPosts, Timeline} from  "./components";
import "./reviewer.css";

function Reviewer(params) {
    return(
        <>
        <CreatePost />
        <MyPosts />
        </>
    );
}
export default Reviewer;