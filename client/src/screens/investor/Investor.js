import { ChatBox, CreatePoll, MyPolls, Timeline } from './components';
import "./investor.css";

const Investor = (params) => {
    return (
        <div>
            <MyPolls />
            <CreatePoll />
        </div>
    );
}
export default Investor;

