import { ChatBox, CreatePoll, MyPolls, Timeline } from './components';
import { Switch, Route, Link } from "react-router-dom";
import "./investor.css";
import Polls from '../shared/polls';

const Investor = (params) => {
    return (
        <div>
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
            </div>
            <div className='row mt-4'>
                <div className='col-md-3'>
                    <Link to="/investor/createpoll">
                        <button className='btn post-btn'><i class="fas fa-clipboard-list"></i>Create Poll</button>
                    </Link>
                    <Link to="/investor/mypolls">
                        <button className='btn post-btn'><i class="fas fa-poll"></i>My Polls</button>
                    </Link>
                    <Link to="/investor">
                        <button className='btn post-btn'><i class="fas fa-plus-square"></i>Public Reviews</button>
                    </Link>
                    <Link to="/investor/polls">
                        <button className='btn post-btn'><i class="fas fa-clipboard-list"></i>View Polls</button>
                    </Link>
                </div>
                <div className='col'>
                    <Switch>
                        <Route exact path="/investor" component={Timeline} />
                        <Route exact path="/investor/chatbox" component={ChatBox} />
                        <Route exact path="/investor/createpoll" component={CreatePoll} />
                        <Route exact path="/investor/mypolls" component={MyPolls} />
                        <Route exact path="/investor/polls" component={Polls} />
                    </Switch>
                </div>
                <div className='col-md-3'>
                    <h4>Hot Topics</h4>
                    <div className='hot-topic'>
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='hot-topic'>
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <div className='hot-topic'>
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Investor;

