import "./chat.css"
import user from "../../assets/img/user.jpg"
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import http from "../../axios";
import constants from "../../constants";
function Chat (){
    const [chats, setChats] = useState([]);
    const messagesEndRef = useRef(null)
    const [message, setMessage] = useState("");
    const [index, setIndex] = useState(0);
    const user = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        getChats();
    }, []);

    const getChats = () => {
        http.get("/chat/get/all").then((res) => {
            setChats(res.data.data);
            scrollToBottom();
        })
    }

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    const sendMessage = () => {
        http.post("/chat/message", {chatId: chats[index]._id, message: message}).then((res) => {
            getChats();
            document.getElementById("msg").value = "";
        })
    }

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
                        </div>
                        <div class="inbox_chat">
                            {
                                chats.map((chat, ind) => {
                                    return (
                                        <div class={ind === index ? "chat_list active_chat" : "chat_list"}>
                                            <div class="chat_people" onClick={() => setIndex(ind)}>
                                                <div class="chat_img"> <img src={
                                                    constants.file_url + '/' + (user._id.toString() === chat.user1._id.toString() ? chat.user2.profileImage : chat.user1.profileImage)
                                                }/> </div>
                                                <div class="chat_ib">
                                                    <h5>
                                                        {
                                                            user._id.toString() === chat.user1._id.toString() ? chat.user2.firstName : chat.user1.firstName
                                                        }
                                                    </h5>
                                                    <p>{
                                                       chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].body : 'Start Chat'
                                                    }</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div class="mesgs">
                        <div class="msg_history" ref={messagesEndRef}>
                            {
                                chats[index]?.messages.map((chat, index) => {
                                    return(
                                        <>
                                        <div class={chat.by._id.toString() === user._id.toString() ? 'outgoing_msg' : 'incoming_msg'}>
                                            <div class={chat.by._id.toString() === user._id.toString() ? 'sent_msg' : 'received_mdg'}>
                                                    <p>{chat.body}</p>
                                            </div>
                                        </div>
                                        </>
                                    );
                                })
                            }
                        </div>
                        <div class="type_msg">
                            <div class="input_msg_write">
                                <input type="text" id="msg" class="write_msg" placeholder="Type Here" onChange = {(e) => {setMessage(e.target.value)}} />
                                <button class="msg_send_btn" type="button" onClick = {sendMessage}><i class="far fa-paper-plane"></i>   </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;