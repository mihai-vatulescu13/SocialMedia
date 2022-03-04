import "./messages.css";
import HomeNav from "../../components/homeNav/HomeNav";
import { connect } from "react-redux";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { Conversation } from "../../components/conversation/Conversation";
import Message from "../../components/Message/Message";
import { socket } from "socket.io-client";

const Messages = ({ connectedUser }) => {
  const [messagesConversation, setMessagesConversation] = useState([]);
  const [conversations, setConversations] = useState([]);

  const [users, setUsers] = useState();
  const { _id } = connectedUser;

  useEffect(() => {
    const fetchingConversations = async () => {
      const { data } = await axios.get(`/conversation/getConversations/${_id}`);
      setConversations(data);
    };
    fetchingConversations();
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      const { data } = await axios.get(`/user/getUser/${_id}`);
      setUsers(data.following);
    };
    getUserData();
  }, [_id]);

  return (
    <div>
      <HomeNav />
      <div className="chat-app">
        {/* users(friends) conversations: */}
        <section className="users-nav">
          <ul>
            {conversations ? (
              conversations.map((item, index) => {
                let friend = item.members.find((id) => id !== _id);
                console.log("friend id:", friend);
                return (
                  <li key={index} className="conversation-item">
                    <Conversation />
                  </li>
                );
              })
            ) : (
              <h1>Loading...</h1>
            )}
          </ul>
        </section>
        {/* messages container between the current user and its friend(selected user from conversations list) */}
        <section className="messages-container">
          <h2>selected user messages</h2>
          <ul className="messages-list-container">
            {messagesConversation.map((item, index) => {
              return (
                <li key={index} className="message-item asa">
                  <Message
                    messageContent={item.message}
                    ownMessage={item.id === 1 ? true : false}
                  />
                </li>
              );
            })}
          </ul>
          <div className="send-message-form">
            <input type="text" className="msg-input" />
            <button className="send-message-btn">Send</button>
          </div>
        </section>
      </div>
    </div>
  );
};

const getUser = (state) => {
  return {
    connectedUser: state.AuthReducer,
  };
};

export default connect(getUser)(Messages);
