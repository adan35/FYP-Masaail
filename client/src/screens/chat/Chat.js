import "./chat.css"
import user from "../../assets/img/user.jpg"
import { Link } from "react-router-dom";
function Chat (){
    return (
        <div className="chat">
            <div class="messaging">
                <div class="inbox_msg">
                    <div class="inbox_people">
                        <div class="headind_srch">
                            <div class="recent_heading">
                                <h4>
                                    <Link to="/investor">
                                    <i class="fas fa-arrow-circle-left me-3"></i>
                                    </Link>
                                    Inbox
                                </h4>
                            </div>
                            <div class="srch_bar">
                                <div class="stylish-input-group">
                                    <input type="text" class="search-bar" placeholder="Search" />
                                    <span class="input-group-addon">
                                        <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
                                    </span> </div>
                            </div>
                        </div>
                        <div class="inbox_chat">
                            <div class="chat_list active_chat">
                                <div class="chat_people">
                                    <div class="chat_img"> <img src={user}/> </div>
                                    <div class="chat_ib">
                                        <h5>Muhhammad Haris <span class="chat_date">Dec 25</span></h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sapien viverra, consequat felis ut</p>
                                    </div>
                                </div>
                            </div>
                            <div class="chat_list">
                                <div class="chat_people">
                                    <div class="chat_img"> <img src={user}/> </div>
                                    <div class="chat_ib">
                                        <h5>Muhhammad Haris <span class="chat_date">Dec 25</span></h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sapien viverra, consequat felis ut</p>
                                    </div>
                                </div>
                            </div>

                            <div class="chat_list">
                                <div class="chat_people">
                                    <div class="chat_img"> <img src={user}/> </div>
                                    <div class="chat_ib">
                                        <h5>Muhhammad Haris <span class="chat_date">Dec 25</span></h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sapien viverra, consequat felis ut</p>
                                    </div>
                                </div>
                            </div>

                            <div class="chat_list">
                                <div class="chat_people">
                                    <div class="chat_img"> <img src={user}/> </div>
                                    <div class="chat_ib">
                                        <h5>Muhhammad Haris <span class="chat_date">Dec 25</span></h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sapien viverra, consequat felis ut</p>
                                    </div>
                                </div>
                            </div>

                            <div class="chat_list">
                                <div class="chat_people">
                                    <div class="chat_img"> <img src={user}/> </div>
                                    <div class="chat_ib">
                                        <h5>Muhhammad Haris <span class="chat_date">Dec 25</span></h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut sapien viverra, consequat felis ut</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mesgs">
                        <div class="msg_history">
                            <div class="incoming_msg">
                                <div class="incoming_msg_img"> <img src={user} alt="sunil" /> </div>
                                <div class="received_msg">
                                    <div class="received_withd_msg">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                        <span class="time_date"> 11:01 AM    |    June 9</span></div>
                                </div>
                            </div>
                            <div class="outgoing_msg">
                                <div class="sent_msg">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                    <span class="time_date"> 11:01 AM    |    June 9</span> </div>
                            </div>

                            <div class="incoming_msg">
                                <div class="incoming_msg_img"> <img src={user} alt="sunil" /> </div>
                                <div class="received_msg">
                                    <div class="received_withd_msg">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                        <span class="time_date"> 11:01 AM    |    June 9</span></div>
                                </div>
                            </div>
                            <div class="outgoing_msg">
                                <div class="sent_msg">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                    <span class="time_date"> 11:01 AM    |    June 9</span> </div>
                            </div>

                            <div class="incoming_msg">
                                <div class="incoming_msg_img"> <img src={user} alt="sunil" /> </div>
                                <div class="received_msg">
                                    <div class="received_withd_msg">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                        <span class="time_date"> 11:01 AM    |    June 9</span></div>
                                </div>
                            </div>
                            <div class="outgoing_msg">
                                <div class="sent_msg">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                    <span class="time_date"> 11:01 AM    |    June 9</span> </div>
                            </div>

                            <div class="incoming_msg">
                                <div class="incoming_msg_img"> <img src={user} alt="sunil" /> </div>
                                <div class="received_msg">
                                    <div class="received_withd_msg">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                        <span class="time_date"> 11:01 AM    |    June 9</span></div>
                                </div>
                            </div>
                            <div class="outgoing_msg">
                                <div class="sent_msg">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                                    <span class="time_date"> 11:01 AM    |    June 9</span> </div>
                            </div>
                        </div>
                        <div class="type_msg">
                            <div class="input_msg_write">
                                <input type="text" class="write_msg" placeholder="Type Here" />
                                <button class="msg_send_btn" type="button"><i class="far fa-paper-plane"></i>   </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;