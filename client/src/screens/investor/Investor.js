import { ChatBox, CreatePoll, MyPolls, Timeline } from './components';
import { Switch, Route } from "react-router-dom";
import "./investor.css";

const Investor = (params) => {
    return (
        <div>
            <Switch>
                <Route exact path="/investor" component={Timeline} />
                <Route exact path="/investor/chatbox" component={ChatBox} />
                <Route exact path="/investor/createpoll" component={CreatePoll} />
                <Route exact path="/investor/mypolls" component={MyPolls} />
            </Switch>
        </div>
    );
}
export default Investor;

