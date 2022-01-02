import { ChatBox, CreatePoll, MyPolls, Timeline } from './components';
import { Switch, Route } from "react-router-dom";
import "./investor.css";

const Investor = (params) => {
    return (
        <div>
            <div className='row mt-4'>
                <div className='col-md-2'>
                    <div className='title'>
                        <p className='text'>MASAIL.COM</p>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div class="form-group has-search">
                        <span class="fa fa-search form-control-feedback"></span>
                        <input type="text" class="form-control" placeholder="Search"/>
                    </div>
                </div>
                <div className='col'>
                    <div className='text-end profile'>
                        <i class="fas fa-sort-down"></i>
                    </div>
                </div>
            </div>
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

