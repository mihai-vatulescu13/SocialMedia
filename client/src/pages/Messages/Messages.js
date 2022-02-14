import React, { useState } from "react";
import "./messages.css";
import HomeNav from "../../components/homeNav/HomeNav";
import { connect } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

const Messages = ({ connectedUser }) => {
  const messages = ["helk", "alooo", "votez AUR", "ami plake cafeaua"];
  const [users, setUsers] = useState();
  const { _id } = connectedUser;

  useEffect(() => {
    const getUserData = async () => {
      const { data } = await axios.get(`/user/getUser/${_id}`);
      setUsers(data.following);
    };
    getUserData();
  }, []);

  return (
    <div>
      <HomeNav />
      <div className="chat-app">
        <section className="users-nav">
          {/* return an user card: */}
          <ul>
            {users ? (
              users.map((item, index) => {
                return (
                  <li key={index} className="user-message-card">
                    <img
                      src={item.profilePicture}
                      alt="user follow"
                      className="message-user-img"
                    />
                    <h3>{item.name}</h3>
                  </li>
                );
              })
            ) : (
              <h1>Loading...</h1>
            )}
          </ul>
        </section>
        <section className="messages-container">
          <h2>selected user messages</h2>
          <ul>
            {messages.map((item, index) => {
              return (
                <li key={index} className="message-item">
                  {item}
                </li>
              );
            })}
          </ul>
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
