import React from "react";
import "./message.css";

const Message = ({ userPicture, messageContent, ownMessage }) => {
  const PF = process.env.REACT_APP_ASSETS;
  return (
    <div className="message-container">
      <div className={ownMessage ? "my-message" : "other-message"}>
        <img
          src={userPicture ? userPicture : PF + "user-avatar.png"}
          className="userMessageAvatar"
          alt="user message avatar"
        />

        <div className="message-user-content">
          <p
            className="message-content-style"
            style={
              ownMessage
                ? { backgroundColor: " rgb(0, 110, 255)" }
                : { backgroundColor: " rgb(219, 219, 219)" }
            }
          >
            {messageContent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
