import {Approvals, Dashboard, List, Profile, ReactedReviews, Reviews, Chat} from "./components";
import { Switch, Route } from "react-router-dom";
import "./admin.css";

const Admin = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/admin" component={Dashboard}/>
                <Route exact path="/admin/approvals" component={Approvals}/>
                <Route exact path="/admin/list" component={List}/>
                <Route exact path="/admin/profile" component={Profile}/>
                <Route exact path="/admin/reactedreviews" component={ReactedReviews}/>
                <Route exact path="/admin/reviews" component={Reviews}/>
                <Route exact path="/admin/chat" component={Chat}/>
            </Switch>
        </div>
    );
}
export default Admin;
