import React from "react";

export default Message = ({ userPicture, messageContent }) => {
  return (
    <div className="message-container">
      <div className="message-user-picture">
        <img src="" alt="" />
      </div>
      <div className="message-user-content">
        <p className="message-content-style">message content</p>
      </div>
    </div>
  );
};
