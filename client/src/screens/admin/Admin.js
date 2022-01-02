import {Approvals, Dashboard, Chats, Reviewers, Investors} from "./components";
import { Switch, Route } from "react-router-dom";
import "./admin.css";

const Admin = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/admin" component={Dashboard}/>
                <Route exact path="/admin/approvals" component={Approvals}/>
                <Route exact path="/admin/chats" component={Chats}/>
                <Route exact path="/admin/reviewers" component={Reviewers}/>
                <Route exact path="/admin/investors" component={Investors}/>
            </Switch>
        </div>
    );
}
export default Admin;
