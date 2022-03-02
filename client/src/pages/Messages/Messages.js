import React, { useState } from 'react';
import './messages.css';
import HomeNav from '../../components/homeNav/HomeNav';
import { connect } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { Conversation } from '../../components/conversation/Conversation';
import Message from '../../components/Message/Message';

const Messages = ({ connectedUser }) => {
  // const messages = ["helk", "alooo", "votez AUR", "ami plake cafeaua"];
  const messagesConversation = [
    { id: 1, message: 'alooo' },
    { id: 2, message: 'zii ce vrei' },
    { id: 1, message: 'voiam sa vad ce faci' },
    { id: 1, message: 'sper ca nu te-am deranjat' },
    { id: 2, message: 'e ok, stai linistit' },
  ];
  const [users, setUsers] = useState();
  const { _id } = connectedUser;

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
            {users ? (
              users.map((item, index) => {
                return (
                  <li key={index} className="conversation-item">
                    <Conversation
                      name={item.name}
                      profilePicture={item.profilePicture}
                    />
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
          <ul>
            {messagesConversation.map((item, index) => {
              return (
                <li key={index} className="message-item">
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
